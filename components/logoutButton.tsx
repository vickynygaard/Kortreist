import React from "react";
import { useMsal } from "@azure/msal-react";

const LogoutButton: React.FC = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    sessionStorage.removeItem("userUpserted");
    instance.logoutRedirect();
  };

  return <button onClick={handleLogout}>Sign Out</button>;
};

export default LogoutButton;
