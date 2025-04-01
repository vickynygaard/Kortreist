const Podium = ({
  nickName,
  score,
  rank,
  profilePicture,
  visualPosition,
}: {
  nickName: string;
  score: number;
  rank: number;
  profilePicture: string;
  visualPosition: number;
}) => {
  const getHeightForRank = (rank: number) => {
    if (rank === 1) return 'h-32';
    if (rank === 2) return 'h-24';
    if (rank === 3) return 'h-20';
    return 'h-16'; // fallback (not used here)
  };  

  const medalColors: Record<number, string> = {
    1: "border-yellow-400",
    2: "border-gray-300",
    3: "border-amber-600",
  };

  return (
    <div className="flex flex-col items-center justify-end w-24 relative">
      <div className="relative -mb-6 z-10">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile-pictures/${profilePicture || "avatar1.png"}`}
          alt={nickName}
          className={`w-16 h-16 rounded-full border-4 ${medalColors[rank] || 'border-gray-200'} object-cover bg-white`}
          />
      </div>

      <div
      className={`w-full flex flex-col items-center justify-end ${getHeightForRank(rank)} bg-violet-900 text-white rounded-t-2xl pt-8 pb-2`}
      >
        <span className="text-xl font-bold">{rank}</span>
        <span className="text-base">{score}</span>
      </div>

      <div className="mt-2 h-8 w-full px-1 text-center">
        <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-600 line-clamp-2 leading-tight break-words">
          {nickName}
        </span>
      </div>
    </div>
  );
};


export default Podium;