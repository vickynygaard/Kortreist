import React, { useState } from "react";
import { useMsal } from "@azure/msal-react"; // Reintroducing authentication
import { loginRequest } from "../msalConfig"; // Importing authentication config
import Button from "../components/buttons/Button"; 
import Image from "next/image";

const LoginButton: React.FC = () => {
  const { instance, inProgress } = useMsal(); // Authentication instance
  const [isLoading, setIsLoading] = useState(false);

  // Handle login with Microsoft Authentication
  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await instance.loginRedirect({  
        ...loginRequest,
        prompt: "login", // Ensures fresh login each time
      });
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle account creation (if different from Microsoft login)
  const handleSignUp = async () => {
    console.log("Create Account button clicked");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customYellow2 relative">
      {/* Logo Image */}
      <Image 
        src="/images/Kortreist.png" 
        alt="Logo" 
        width={120} 
        height={120} 
        className="mb-4"
      />
      
      {/* Title */}
      <h1 className="text-4xl font-semibold text-customViolet">Kortreist</h1>

      {/* Buttons */}
      <div className="flex flex-col gap-4 mt-12">
        <Button
          onClick={handleSignIn}
          title={isLoading || inProgress !== "none" ? "Logger inn..." : "Logg Inn"}
          className="border-customViolet text-customViolet bg-white hover:bg-customViolet w-60"
          disabled={isLoading || inProgress !== "none"} // Disables button when loading
        />
        <Button
          onClick={handleSignUp}
          title="Opprett Konto"
          className="border-customViolet text-white bg-customViolet hover:bg-customViolet w-60"
        />
      </div>

      {/* Bottom Image */}
      <div className="absolute bottom-0 w-full">
        <Image 
          src="/images/Grass.png" 
          alt="Scenery Illustration" 
          width={850} 
          height={303} 
          className="w-full"
        />
      </div>
    </div>
  );
};

export default LoginButton;
