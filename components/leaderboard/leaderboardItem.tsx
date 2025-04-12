import { useEffect } from "react";

interface LeaderboardItemProps {
  userId: number;
  nickName: string;
  score: number;
  rank: number;
  profilePicture: string;
  type?: "user" | "team";
  isCurrentUser?: boolean;
}

const LeaderboardItem = ({
  userId,
  nickName,
  score,
  rank,
  profilePicture,
  type = "user",
  isCurrentUser = false,
}: LeaderboardItemProps) => {
  const folder = type === "team" ? "team-pictures" : "avatars";
  const fallback = type === "team" ? "teamAvatar1.png" : "Avatar1.png";

  return (
    <div
      id={isCurrentUser ? `user-${userId}` : undefined}
      className={`flex items-center justify-between p-4 px-8 gap-4 border-b border-gray-500 last:border-b-0 h-[73px] ${
        isCurrentUser
          ? "bg-gradient-to-t from-yellow-100/40 to-yellow-200/40 "
          : ""
      }`}
>
      <span className="font-bold w-6 text-center">{rank}</span>

      <div className="flex items-center gap-4 flex-grow min-w-0">
      <div className="relative">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/${folder}/${profilePicture || fallback}`}
          alt={nickName}
          className={`w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full border-2 object-cover flex-shrink-0 ${
            isCurrentUser ? "border-customRed" : "border-customViolet"
          }`}
        />
          {isCurrentUser && (
            <span className="absolute -top-1 -left-2 bg-customOrange text-customViolet text-[0.6rem] rounded-full w-4 h-4 flex items-center justify-center">
              Du
            </span>
          )}
        </div>
        
        <div className="h-full w-[24rem] flex items-center">
        <p  className={
            !isCurrentUser
              ? "break-all max-w-[24rem] max-h-[3.4rem] overflow-hidden"
              : "break-all max-w-[24rem] max-h-[3.4rem] overflow-hidden font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-600"
          }
        >
          {nickName}
        </p>
        </div>
      </div>

      <span className="font-semibold text-customViolet">{score.toLocaleString("no-NO")}</span>
    </div>
  );
};

export default LeaderboardItem;
