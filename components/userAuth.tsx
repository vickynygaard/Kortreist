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
  const { instance, accounts } = useMsal();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const updateUserData = async (account: AccountInfo) => {
    try {
      const response = await instance.acquireTokenSilent({
        scopes: loginRequest.scopes,
        account: account,
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
        console.warn("Silent token failed: interaction required");

      } else {
        setError("Failed to acquire token: " + tokenError);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const response = await instance.handleRedirectPromise();
  
        if (response?.account) {
          instance.setActiveAccount(response.account);
        }
  
        const activeAccount = instance.getActiveAccount();
        if (activeAccount) {
          await updateUserData(activeAccount);
        } else {
          const existingAccounts = instance.getAllAccounts();
          if (existingAccounts.length > 0) {
            instance.setActiveAccount(existingAccounts[0]);
            await updateUserData(existingAccounts[0]);
          } else {
            setUserData(null);
            setLoading(false);
          }
        }
        
      } catch (initError) {
        setError("MSAL initialization error: " + initError);
      } finally {
        setLoading(false);
      }
    };
  
    initializeAuth();
  }, [instance]);
  
  return { userData, loading, error };
};