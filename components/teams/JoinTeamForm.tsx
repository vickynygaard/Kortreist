import React, { useState } from "react";

interface JoinTeamFormProps {
  selectedTeam: string;
  setSelectedTeam: (value: string) => void;
  existingTeams: { name: string; teamId: number }[];
  accessToken: string;
  onJoinTeam: () => void;
  onBack: () => void;
}


export default function JoinTeamForm({
  selectedTeam,
  setSelectedTeam,
  existingTeams,
  accessToken,
  onJoinTeam,
  onBack,
}: JoinTeamFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleJoin = async () => {
    setIsLoading(true);
    setErrorMsg("");
  
    try {
      const teamId = parseInt(selectedTeam);
      const matchedTeam = existingTeams.find((team) => team.teamId === teamId);
      if (!matchedTeam) throw new Error("Fant ikke valgt lag.");
  
      const response = await fetch(
        "https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/team/join",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ teamId }),
        }
      );
  
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Kunne ikke bli med i laget.");
      }
  
      onJoinTeam();
    } catch (error: any) {
      console.error("Join team error:", error);
      setErrorMsg(error.message || "Ukjent feil");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col gap-4 mt-4">
      <select
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
        className="p-2 border border-gray-400 rounded-md"
      >
        <option value="">Velg et lag...</option>
        {existingTeams.map((team) => (
          <option key={team.teamId} value={team.teamId}>
            {team.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleJoin}
        disabled={!selectedTeam || isLoading}
        className={`py-3 rounded-md text-white font-medium ${
          selectedTeam && !isLoading ? "bg-customGreen" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {isLoading ? "Bli med..." : "Bli med i laget"}
      </button>
      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
      <button onClick={onBack} className="text-gray-600 hover:text-black">
        Tilbake
      </button>
    </div>
  );
}
