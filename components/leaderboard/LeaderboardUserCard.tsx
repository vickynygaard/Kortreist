import React from "react";

interface LeaderboardUserCardProps {
  userId: number;
  nickName: string;
  score: number;
  rank: number;
  profilePicture: string;
  type?: "user" | "team";
}

const LeaderboardUserCard: React.FC<LeaderboardUserCardProps> = ({
  userId,
  nickName,
  score,
  rank,
  profilePicture,
  type = "user",
}) => {
  const folder = type === "team" ? "team-pictures" : "avatars";
  const fallback = type === "team" ? "teamAvatar1.png" : "Avatar1.png";

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-customViolet font-bold text-sm ml-4 mb-1">Din plassering</h1>
      
      <div className="rounded-lg bg-violet-100 backdrop-blur-sm p-1 shadow-sm border border-gray-300">
        <div className="flex items-center justify-between h-[60px] px-4 gap-4">
          {/* Rank */}
          <span className="text-sm font-bold text-customViolet w-5 text-center">{rank}</span>

          {/* Avatar + Name */}
          <div className="flex items-center gap-3 flex-grow min-w-0">
            <div className="relative flex-shrink-0">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/${folder}/${profilePicture || fallback}`}
                alt={nickName}
                className="w-9 h-9 min-w-[2.25rem] rounded-full border-2 border-customViolet object-cover"
              />
            </div>

            <p className="line-clamp-2 break-all leading-tight text-sm font-medium text-customViolet max-w-[9rem]">
              {nickName}
            </p>
          </div>

          {/* Score */}
          <span className="text-sm font-semibold text-customViolet">{score.toLocaleString("no-NO")}</span>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardUserCard;
