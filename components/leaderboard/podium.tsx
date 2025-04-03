import { Crown } from "lucide-react";
import { motion } from "framer-motion";

const Podium = ({
  nickName,
  score,
  rank,
  profilePicture,
  visualPosition,
  type = "user",
}: {
  nickName: string;
  score: number;
  rank: number;
  profilePicture: string;
  visualPosition: number;
  type?: "user" | "team";
}) => {
  const getHeightForRank = (rank: number) => {
    if (rank === 1) return "h-32";
    if (rank === 2) return "h-24";
    if (rank === 3) return "h-20";
    return "h-16";
  };

  const medalColors: Record<number, string> = {
    1: "border-yellow-400",
    2: "border-gray-300",
    3: "border-amber-600",
  };

  const folder = type === "team" ? "team-pictures" : "profile-pictures";
  const fallback = type === "team" ? "teamAvatar1.png" : "avatar1.png";

  return (
    <motion.div
      className="flex flex-col items-center justify-end w-24 relative"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: visualPosition * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      }}
    >
      {/* Crown + Avatar */}
      <div className="relative -mb-6 z-10">
        {rank <= 3 && (
          <Crown
            size={20}
            className={`absolute -top-4 left-1/2 -translate-x-1/2 ${
              rank === 1
                ? "text-yellow-500"
                : rank === 2
                ? "text-gray-300"
                : "text-amber-600"
            } drop-shadow`}
          />
        )}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/${folder}/${profilePicture || fallback}`}
          alt={nickName}
          className={`w-16 h-16 rounded-full border-4 ${
            medalColors[rank] || "border-gray-200"
          } object-cover bg-white`}
        />
      </div>

      {/* Podium block */}
      <div
        className={`w-full flex flex-col items-center justify-end ${getHeightForRank(
          rank
        )} bg-violet-900 text-white rounded-t-2xl pt-8 pb-2`}
      >
        <span className="text-xl font-bold">{rank}</span>
        <span className="text-base">{score}</span>
      </div>

      {/* Nickname */}
      <div className="mt-2 h-8 w-full px-1 text-center">
        <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-600 line-clamp-2 leading-tight break-words">
          {nickName}
        </span>
      </div>
    </motion.div>
  );
};

export default Podium;
