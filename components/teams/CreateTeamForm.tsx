import { validateName } from "@/services/validateName";
import router from "next/router";
import React, { useState } from "react";

interface CreateTeamFormProps {
  teamName: string;
  setTeamName: (value: string) => void;
  accessToken: string;
  onCreateTeam: () => void;
  onBack: () => void;
}

export default function CreateTeamForm({
  teamName,
  setTeamName,
  accessToken,
  onCreateTeam,
  onBack,
}: CreateTeamFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTeamName(value);
    setNameError(validateName(value, { maxLength: 8, label: "Lagnavn" }));
  };

  const handleCreate = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/team/upsert",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ name: teamName }),
        }
      );

      if (!response.ok) {
        if (response.status === 428) {
          router.push("/onboarding");
          return;
        }
        const text = await response.text();
        throw new Error(text || "Noe gikk galt under oppretting av lag.");
      }

      onCreateTeam();
    } catch (error: any) {
      return (
        <div className="flex justify-center items-center h-screen">
          <p>Her skjedde det noe galt, prøv å laste inn på nytt</p>
        </div>
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <input
        type="text"
        value={teamName}
        onChange={handleInputChange}
        placeholder="Skriv inn lagnavn..."
        className="p-2 border border-gray-400 rounded-md"
      />
      {nameError && <p className="text-red-600 text-sm">{nameError}</p>}

      <button
        onClick={handleCreate}
        disabled={!teamName.trim() || isLoading || Boolean(nameError)}
        className={`py-3 rounded-md text-white font-medium ${
          teamName.trim() && !isLoading && !nameError
            ? "bg-customViolet"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {isLoading ? "Oppretter..." : "Opprett lag"}
      </button>

      <button onClick={onBack} className="text-gray-600 hover:text-black">
        Tilbake
      </button>
    </div>
  );
}
