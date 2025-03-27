import React from "react";
import TeamButton from "../buttons/TeamButton"; 
import { PlusCircle, LogIn } from "lucide-react";

interface TeamOptionsProps {
  onCreate: () => void;
}

export default function TeamOptions({ onCreate }: TeamOptionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto">
      <TeamButton onClick={onCreate} variant="primary" className="flex-1">
        <PlusCircle size={20} />
        Opprett et lag
      </TeamButton>
    </div>
  );
}
