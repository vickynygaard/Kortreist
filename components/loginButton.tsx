import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../msalConfig";

const LoginButton: React.FC = () => {
  const { instance, inProgress } = useMsal();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Always force a fresh login by using prompt: "login"
      await instance.loginRedirect({
        ...loginRequest,
        prompt: "login",
      });
    } catch (error) {
      console.error("Error in login flow:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button 
        onClick={handleLogin} 
        disabled={isLoading || inProgress !== "none"}
      >
        {isLoading || inProgress !== "none" ? "Signing in..." : "Sign In"}
      </button>
    </div>
  );
};

export default LoginButton;
