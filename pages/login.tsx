import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../msalConfig";
import Button from "../components/buttons/Button";
import Image from "next/image";

const LoginButton: React.FC = () => {
  const { instance, inProgress } = useMsal();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await instance.loginRedirect({
        ...loginRequest,
        prompt: "login",
      });
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async () => {
    console.log("Create Account button clicked");
  };

  return (
    <div className="fixed inset-0 bg-customYellow2 overflow-hidden flex flex-col">
      {/* Content area, centered above the grass */}
      <div className="flex-1 flex flex-col items-center justify-center z-10">
        <Image
          src="/images/Logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="mb-4"
        />
        <h1 className="text-4xl font-semibold text-customViolet">Kortreist</h1>

        <div className="flex flex-col gap-4 mt-12">
          <Button
            onClick={handleSignIn}
            title="Logg Inn"
            className="border-customViolet text-customViolet bg-white w-60"
            disabled={isLoading || inProgress !== "none"}
          />
          <Button
            onClick={handleSignUp}
            title="Opprett Konto"
            className="border-customViolet text-white bg-customViolet w-60"
          />
        </div>
      </div>

      {/* Grass image at the bottom */}
      <div className="w-full z-0">
        <Image
          src="/images/Grass.png"
          alt="Scenery Illustration"
          width={850}
          height={303}
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default LoginButton;