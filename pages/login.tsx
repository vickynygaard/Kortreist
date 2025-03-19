import React, { useState } from "react";
// import { useMsal } from "@azure/msal-react";
// import { loginRequest } from "../msalConfig";
import Button from "../components/buttons/primaryButton"; 
import Image from "next/image";

const LoginButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Placeholder functions for styling
  const handleSignIn = async () => {
    console.log("Sign In button clicked");
  };

  const handleSignUp = async () => {
    console.log("Create Account button clicked");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDF8F2] relative">

      {/* Ikon Image Above Text */}
      <Image 
        src="/images/Kortreist.png" 
        alt="Logo" 
        width={120} 
        height={120} 
        className="mb-4"
      />
      
      {/* Title */}
      <h1 className="text-4xl font-semibold text-[#311687]">Kortreist</h1>

      {/* Buttons */}
      <div className="flex flex-col gap-4 mt-12">
        <Button
          onClick={handleSignIn}
          title={isLoading ? "Signing in..." : "Sign In"}
          className="border-violet-900 text-violet-900 bg-white hover:bg-violet-100 w-60"
        />
        <Button
          onClick={handleSignUp}
          title={isLoading ? "Creating Account..." : "Create Account"}
          className="border-violet-900 text-white bg-violet-900 hover:bg-violet-700 w-60"
        />
      </div>

      {/* Image fixed at the bottom */}
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
