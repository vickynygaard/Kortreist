import React from "react";

interface Member {
  id: number;
  name: string;
  image: string;
  points: number;
}

interface TeamMembersProps {
  teamMembers: Member[];
}

export default function TeamMembers({ teamMembers }: TeamMembersProps) {
  return (
    <div className="flex flex-col gap-4">
      {teamMembers.map((member) => (
        <div key={member.id} className="flex items-center gap-4 p-3 bg-[#FFF8DA] rounded-md">
          <img
            src={member.image}
            alt={member.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <p className="text-lg font-medium text-black">{member.name}</p>
        </div>
      ))}
    </div>
  );
}
