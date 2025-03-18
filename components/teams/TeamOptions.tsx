import React from "react";
import Button from "../buttons/Button";
import { PlusCircle, LogIn } from "lucide-react";

interface TeamOptionsProps {
  onCreate: () => void;
  onJoin: () => void;
}

export default function TeamOptions({ onCreate, onJoin }: TeamOptionsProps) {
  return (
    <div className="flex gap-4 justify-center">
      <Button onClick={onCreate} variant="primary" className="min-w-[150px]">
        <PlusCircle size={20} />
        Opprett et lag
      </Button>
      <Button onClick={onJoin} variant="secondary" className="min-w-[150px]">
        <LogIn size={20} />
        Bli med i et lag
      </Button>
    </div>
  );
}
