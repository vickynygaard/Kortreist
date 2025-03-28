import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../msalConfig";
import Button from "../components/buttons/Button";
import Image from "next/image";
import router, { useRouter } from "next/router";
import { useUserAuth } from "@/components/userAuth";

const LoginButton: React.FC = () => {
  const { userData } = useUserAuth();
  const { instance, accounts, inProgress } = useMsal(); 
  const [isLoading, setIsLoading] = useState(false);       // Login loading
const [upserting, setUpserting] = useState(false);       // Post-login user setup


  const router = useRouter();

  useEffect(() => {
    const tryUpsertAndRedirect = async () => {
      if (!userData?.accessToken || inProgress !== "none" || upserting) return;
  
      setUpserting(true);
      try {
        const response = await fetch(
          `https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Users/upsert`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userData.accessToken}`,
            },
            body: JSON.stringify({}),
          }
        );
  
        if (!response.ok) throw new Error(`Serverfeil: ${response.statusText}`);
  
        const result = await response.json();
        console.log("User upserted:", result);
  
        router.push(result.isProfileComplete ? "/" : "/onboarding");
      } catch (err) {
        console.error("❌ Feil ved oppdatering:", err);
      } finally {
        setUpserting(false);
      }
    };
  
    tryUpsertAndRedirect();
  }, [userData?.accessToken, inProgress]);


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
<div className="flex-1 flex flex-col items-center justify-start z-10 pt-20">
      {/* Content area, centered above the grass */}
      <div className="flex-1 flex flex-col items-center justify-center z-10">
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Logo.png`}
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
          disabled={isLoading || inProgress !== "none" || upserting}
        />
          <Button
            onClick={handleSignUp}
            title="Opprett Konto"
            className="border-customViolet text-white bg-customViolet w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginButton;