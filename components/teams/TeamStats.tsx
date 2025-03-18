import React from "react";

interface TeamStatsProps {
  teamPoints: number;
}

export default function TeamStats({ teamPoints }: TeamStatsProps) {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D3E75]">Lag 2</h2>
      <br />
      <p className="text-xl text-black font-semibold dark:text-gray-300">
        Gratulerer, ditt lag har opptjent
      </p>
      <p className="text-3xl font-bold text-[#1D3E75] mt-2">
        {teamPoints} poeng
      </p>
    </>
  );
}
