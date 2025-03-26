const Podium= ({ nickName, score, rank, profilePicture}: { nickName:string, score:number, rank:number, profilePicture:string} ) => {
    const heights: Record<number, string> = {
        1: 'h-32', // gold
        2: 'h-24', // silver
        3: 'h-20', // bronze
      };

      const medalColors: Record<number, string> = {
        1: "border-yellow-400",
        2: "border-gray-300",
        3: "border-amber-600",
      };
    
    return (
    <div className="flex flex-col items-center justify-end w-24 relative">
      {/* Avatar (floating effect) */}
      <div className="relative -mb-6 z-10">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile-pictures/${profilePicture || "avatar1.png"}`}
          alt={nickName}
          className={`w-16 h-16 rounded-full border-4 ${medalColors[rank]} object-cover bg-white`}
        />
      </div>

      {/* Podium block */}
      <div
        className={`w-full flex flex-col items-center justify-end ${heights[rank]} bg-violet-900 text-white rounded-t-2xl pt-8 pb-2`}
      >
        <span className="text-xl font-bold">{rank}</span>
        <span className="text-base">{score}</span>
      </div>

      {/* Name below or above depending on spacing */}
      <span className="mt-2 text-center text-sm font-medium">{nickName}</span>
    </div>
  );
};

  export default Podium;