import React from "react";

interface CreateTeamFormProps {
  teamName: string;
  setTeamName: (value: string) => void;
  onCreateTeam: () => void;
  onBack: () => void;
}

export default function CreateTeamForm({
  teamName,
  setTeamName,
  onCreateTeam,
  onBack,
}: CreateTeamFormProps) {
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
        onClick={onCreateTeam}
        disabled={!teamName.trim()}
        className={`py-3 rounded-md text-white font-medium ${
          teamName.trim() ? "bg-customViolet" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Opprett lag
      </button>
      <button onClick={onBack} className="text-gray-600 hover:text-black">
        Tilbake
      </button>
    </div>
  );
}
