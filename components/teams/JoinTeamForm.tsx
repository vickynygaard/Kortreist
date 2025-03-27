import React, { useState } from "react";

interface Team {
  name: string;
  teamId: number;
  memberCount: number; 
}

interface JoinTeamFormProps {
  existingTeams: Team[];
  accessToken: string;
  onJoinTeam: () => void;
  onBack: () => void;
}

export default function JoinTeamForm({
  existingTeams,
  accessToken,
  onJoinTeam,
  onBack,
}: JoinTeamFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleJoin = async (teamId: number) => {
    setIsLoading(true);
    setErrorMsg("");

    try {
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
    <div className="flex flex-col gap-8 mt-4">
      {existingTeams.map((team) => (
        <div
          key={team.teamId}
          className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl font-bold mb-2">{team.name}</h2>
            <p className="text-gray-600">Medlemmer: {team.memberCount} / 5</p>
          </div>
          <button
            onClick={() => handleJoin(team.teamId)}
            disabled={isLoading}
            className={`w-full py-2 mt-4 rounded-md text-white font-medium ${
              !isLoading
                ? "bg-customGreen hover:bg-green-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {isLoading ? "Bli med..." : "Bli med i laget"}
          </button>
        </div>
      ))}
      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
    </div>
  );
}
