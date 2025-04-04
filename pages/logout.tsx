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
        postLogoutRedirectUri: `${process.env.NEXT_PUBLIC_BASE_PATH}/login`, 
      });
    };

    logout();
  }, [instance]);

  return null; 
};

export default Logout;
