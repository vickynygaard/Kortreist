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
  const [errorMsg, setErrorMsg] = useState("");

  const handleCreate = async () => {
    setIsLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch(
        "https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/team/upsert",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            name: teamName,
            companyId: 1, // Replace with real companyId if needed
          }),
        }
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Noe gikk galt under oppretting av lag.");
      }

      onCreateTeam();
    } catch (error: any) {
      console.error("Create team error:", error);
      setErrorMsg(error.message || "Ukjent feil");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Skriv inn lagnavn..."
        className="p-2 border border-gray-400 rounded-md"
      />
      <button
        onClick={handleCreate}
        disabled={!teamName.trim() || isLoading}
        className={`py-3 rounded-md text-white font-medium ${
          teamName.trim() && !isLoading ? "bg-customViolet" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {isLoading ? "Oppretter..." : "Opprett lag"}
      </button>
      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
      <button onClick={onBack} className="text-gray-600 hover:text-black">
        Tilbake
      </button>
    </div>
  );
}
