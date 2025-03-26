import React from "react";

interface TeamStatsProps {
  teamName: string;
  totalScore: number;
}

export default function TeamStats({ teamName, totalScore }: TeamStatsProps) {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-semibold text-customViolet mb-2">{teamName}</h2>
      <p className="text-xl text-black font-semibold">
        Gratulerer, ditt lag har opptjent
      </p>
      <p className="text-3xl font-bold text-customViolet mt-2">
        {totalScore} poeng
      </p>
    </>
  );
}
