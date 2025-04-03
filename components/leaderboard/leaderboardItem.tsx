interface LeaderboardItemProps {
  nickName: string;
  score: number;
  rank: number;
  profilePicture: string;
  type?: "user" | "team";
  isCurrentUser?: boolean;
}

const LeaderboardItem = ({
  nickName,
  score,
  rank,
  profilePicture,
  type = "user",
  isCurrentUser = false,
}: LeaderboardItemProps) => {
  const folder = type === "team" ? "team-pictures" : "profile-pictures";
  const fallback = type === "team" ? "teamAvatar1.png" : "avatar1.png";

  return (
    <div
      className={`flex items-center justify-between p-4 px-8 gap-4 border-b border-gray-500 last:border-b-0 h-[73px] ${
        isCurrentUser ? "bg-yellow-200/15" : ""
      }`}
    >
      <span className="font-bold w-6 text-center">{rank}</span>

      <div className="flex items-center gap-4 flex-grow">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/${folder}/${profilePicture || fallback}`}
          alt={nickName}
          className="w-10 h-10 rounded-full border-2 border-customViolet object-cover"
        />
        <p className="break-all max-w-[24rem] max-h-[3.5rem] overflow-hidden">
          {nickName}
        </p>
      </div>

      <span className="font-semibold text-customViolet">{score}</span>
    </div>
  );
};

export default LeaderboardItem;
