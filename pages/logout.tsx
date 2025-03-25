// pages/logout.tsx
import { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { useRouter } from "next/router";

const Logout = () => {
  const { instance } = useMsal();
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      await instance.logoutRedirect({
        postLogoutRedirectUri: "/login", // 👈 Redirect back to login after logout
      });
    };

    logout();
  }, [instance]);

  return null; // Or a spinner if you want
};

export default Logout;
