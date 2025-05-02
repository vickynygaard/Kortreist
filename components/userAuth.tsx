import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "@/msalConfig";
import { AccountInfo, InteractionRequiredAuthError } from "@azure/msal-browser";

export interface TokenClaims {
  emails?: string[];
  email?: string;
  preferred_username?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  sub: string;
}

export interface UserData {
  email: string;
  name: string;
  idTokenClaims: TokenClaims;
  idToken: string;
  accessToken: string;
}

export const useUserAuth = (): {
  userData: UserData | null;
  loading: boolean;
  error: string | null;
} => {
  const { instance } = useMsal();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const updateUserData = async (account: AccountInfo) => {
    try {
      const response = await instance.acquireTokenSilent({
        scopes: loginRequest.scopes,
        account,
      });

      const claims = response.idTokenClaims as TokenClaims;
      const data: UserData = {
        email: claims.emails?.[0] || claims.email || claims.preferred_username || "",
        name:
          claims.name ||
          `${claims.given_name || ""} ${claims.family_name || ""}`.trim() ||
          "Unknown User",
        idTokenClaims: claims,
        idToken: response.idToken,
        accessToken: response.accessToken,
      };

      setUserData(data);
    } catch (tokenError) {
      if (tokenError instanceof InteractionRequiredAuthError) {
        console.warn("Silent token failed, trying ssoSilent...");

        try {
          const ssoResponse = await instance.ssoSilent({
            scopes: loginRequest.scopes,
            loginHint: account.username,
          });

          const claims = ssoResponse.idTokenClaims as TokenClaims;
          const data: UserData = {
            email: claims.emails?.[0] || claims.email || claims.preferred_username || "",
            name:
              claims.name ||
              `${claims.given_name || ""} ${claims.family_name || ""}`.trim() ||
              "Unknown User",
            idTokenClaims: claims,
            idToken: ssoResponse.idToken,
            accessToken: ssoResponse.accessToken,
          };

          setUserData(data);
        } catch (ssoError) {
          console.warn("SSO silent also failed");
          setUserData(null);
          setError("Reauthentication required");
        }
      } else {
        setError("Failed to acquire token: " + tokenError);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const response = await instance.handleRedirectPromise();
  
        if (response?.account) {
          instance.setActiveAccount(response.account);
          localStorage.setItem("lastUsedAccountId", response.account.homeAccountId);
        }
  
        let activeAccount = instance.getActiveAccount();
  
        if (!activeAccount) {
          const allAccounts = instance.getAllAccounts();
          const lastUsedId = localStorage.getItem("lastUsedAccountId");
  
          if (lastUsedId) {
            const matching = allAccounts.find(
              (acct) => acct.homeAccountId === lastUsedId
            );
            if (matching) {
              instance.setActiveAccount(matching);
              activeAccount = matching;
            }
          }
  
          if (!activeAccount && allAccounts.length > 0) {
            activeAccount = allAccounts[0];
            instance.setActiveAccount(activeAccount);
            localStorage.setItem("lastUsedAccountId", activeAccount.homeAccountId);
          }
        }
  
        if (activeAccount) {
          await updateUserData(activeAccount);
        } else {
          setUserData(null);
        }
      } catch (initError) {
        setError("MSAL initialization error: " + initError);
      } finally {
        setLoading(false);
      }
    };
  
    initializeAuth();
  }, [instance]);  

  useEffect(() => {
    if (!userData) return;
    
    const interval = setInterval(async () => {
      const account = instance.getActiveAccount();
      if (account) {
        try {
          await instance.acquireTokenSilent({
            scopes: loginRequest.scopes,
            account
          });
        } catch (error) {
          console.log("Token refresh failed", error);
        }
      }
    }, 3600000); // Check every hour
    
    return () => clearInterval(interval);
  }, [userData, instance]);

  return { userData, loading, error };
};