import React from "react";

interface JoinTeamFormProps {
  selectedTeam: string;
  setSelectedTeam: (value: string) => void;
  existingTeams: string[];
  onJoinTeam: () => void;
  onBack: () => void;
}

export default function JoinTeamForm({
  selectedTeam,
  setSelectedTeam,
  existingTeams,
  onJoinTeam,
  onBack,
}: JoinTeamFormProps) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <select
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
        className="p-2 border border-gray-400 rounded-md"
      >
        <option value="">Velg et lag...</option>
        {existingTeams.map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>
      <button
        onClick={onJoinTeam}
        disabled={!selectedTeam}
        className={`py-3 rounded-md text-white font-medium ${
          selectedTeam ? "bg-customGreen" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Bli med i laget
      </button>
      <button onClick={onBack} className="text-gray-600 hover:text-black">
        Tilbake
      </button>
    </div>
  );
}
