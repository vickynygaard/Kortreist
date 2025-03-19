// useUserAuth.tsx
import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../msalConfig";
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

  // Function to update user data based on the account info
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
        try {
          await instance.loginRedirect(loginRequest);
        } catch (loginError) {
          setError("Login required: " + loginError);
        }
      } else {
        setError("Failed to acquire token: " + tokenError);
      }
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await instance.initialize(); // Ensure MSAL is initialized
        const response = await instance.handleRedirectPromise();
        let account: AccountInfo | undefined;
        if (response) {
          account = instance.getAllAccounts()[0];
        } else if (accounts.length > 0) {
          account = accounts[0];
        }
        if (account) {
          await updateUserData(account);
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