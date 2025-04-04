import React, { useEffect } from "react";

interface Member {
  id: number;
  name: string;
  profilePicture: string;
  points: number;
}

interface TeamMembersProps {
  teamMembers: Member[];
}

export default function TeamMembers({ teamMembers }: TeamMembersProps) {
  return (
    <div className="flex flex-col gap-4">
      {teamMembers.map((member) => (
        <div key={member.id} className="flex items-center gap-4 p-3 bg-customYellow rounded-md">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile-pictures/${member.profilePicture || "avatar1.png"}`}
            alt={member.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-customViolet"
          />
          <p className="text-lg font-medium text-black">{member.name}</p>
        </div>
      ))}
    </div>
  );
}
