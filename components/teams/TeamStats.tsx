import React from "react";

interface Member {
  id: number;
  name: string;
  image: string;
  points: number;
}

interface TeamStatsProps {
  teamMembers: Member[];
}

export default function TeamStats({ teamMembers }: TeamStatsProps) {
  // Calculate total points from the team members.
  const totalPoints = teamMembers.reduce((total, member) => total + member.points, 0);

  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D3E75] mb-2">Lagnavn</h2>
      <p className="text-xl text-black font-semibold dark:text-gray-300">
        Gratulerer, ditt lag har opptjent
      </p>
      <p className="text-3xl font-bold text-[#1D3E75] mt-2">
        {totalPoints} poeng
      </p>
    </>
  );
}
