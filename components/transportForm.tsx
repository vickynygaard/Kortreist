// TransportForm.tsx
import React, { useEffect, useState } from "react";
import Menu from "./dropMenu";
import { useMsal } from "@azure/msal-react";
import { AccountInfo, InteractionRequiredAuthError } from "@azure/msal-browser";
import { loginRequest } from "@/msalConfig";
import { useUserAuth } from "@/components/userAuth";

interface TokenClaims {
  emails?: string[];
  email?: string;
  preferred_username?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  sub: string; 
}

const DrivingForm: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  const { userData } = useUserAuth();

  // Map each driving method to a specific point value.
  const drivingPoints: { [key: string]: number } = {
    car: 100,
    bus: 200,
    cycling: 300,
    walking: 400,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (!selectedMethod) {
        setError("Please select a driving method.");
        setLoading(false);
        return;
    }

    if (!userData || !userData.email) {
        setError("User is not authenticated.");
        setLoading(false);
        return;
    }

    try {
        const payload = {
            email: userData.email, // Send email to lookup UserId in backend
            method: selectedMethod,
            points: drivingPoints[selectedMethod]
        };

        console.log("Sending payload:", JSON.stringify(payload)); // Debugging log

        // Call the API endpoint
        const response = await fetch("http://localhost:5279/api/TransportEntry/upsert", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userData.accessToken}` // Ensure authentication
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Response received:", result);

        setSuccessMessage("Driving method submitted successfully!");
    } catch (err: any) {
        console.error("Error submitting data:", err);
        setError(err.message || "Something went wrong");
    } finally {
        setLoading(false);
    }
};


  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
      <Menu selectedMethod={selectedMethod} onSelectMethod={setSelectedMethod} />

      <button
        type="submit"
        disabled={!selectedMethod || loading}
        className="mt-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {error && <p className="mt-2 text-red-500">{error}</p>}
      {successMessage && <p className="mt-2 text-green-500">{successMessage}</p>}
    </form>
  );
};

export default DrivingForm;
