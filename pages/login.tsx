import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest, signupRequest } from "../msalConfig";
import Button from "../components/buttons/Button";
import Image from "next/image";
import router, { useRouter } from "next/router";
import { useUserAuth } from "@/components/userAuth";

const LoginButton: React.FC = () => {
  const { userData, loading } = useUserAuth();
  const { instance, accounts, inProgress } = useMsal(); 
  const [isLoading, setIsLoading] = useState(false);       // Login loading
const [upserting, setUpserting] = useState(false);       // Post-login user setup
const [error, setError] = useState<string | null>(null);



  const router = useRouter();

  useEffect(() => {
    const tryUpsertAndRedirect = async () => {
      if (!userData?.accessToken || inProgress !== "none" || upserting) return;
  
      setUpserting(true);
      try {
        const response = await fetch(
          `https://kortreistapi-h7e9d7gsb3bcgwhd.norwayeast-01.azurewebsites.net/api/Users/upsert`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${userData.accessToken}`,
            },
          }
        );
  
        if (!response.ok) throw new Error(`Serverfeil: ${response.statusText}`);
  
        const result = await response.json();
        console.log("User upserted:", result);
  
        router.push(result.isProfileComplete ? "/" : "/onboarding");
      } catch (err) {
        console.error("Upsert error:", err);
        setError("Her skjedde det noe galt, prøv å laste inn på nytt");
      } finally {
        setUpserting(false);
      }
    };
  
    tryUpsertAndRedirect();
  }, [userData?.accessToken, inProgress]);


  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await instance.loginRedirect(loginRequest); 
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      await instance.loginRedirect(signupRequest); 
    } catch (error) {
      console.error("Signup error:", error);
      setError("Kunne ikke opprette konto akkurat nå.");
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-customRed text-lg">{error}</p>
      </div>
    );
  }
  

  let loadingFull = loading || isLoading || upserting;

  if (loadingFull) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-customViolet"></div>
          <p className="text-customViolet text-lg">Logger inn...</p>
        </div>
      </div>
    );
  }

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