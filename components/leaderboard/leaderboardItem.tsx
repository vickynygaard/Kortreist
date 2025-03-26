const LeaderboardItem = ({ nickName, score, rank, profilePicture }: { nickName: string, score: number, rank: number, profilePicture: string; }) => (
  <div className="flex items-center justify-between p-4 px-8 gap-4 border-b border-gray-500 bg-customYellow">
  <span className="font-bold w-6 text-center">{rank}</span>

  <div className="flex items-center gap-4 flex-grow">
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile-pictures/${profilePicture || "avatar1.png"}`}
      alt={nickName}
      className="w-10 h-10 rounded-full border-2 border-customViolet object-cover"
    />
    <span className="truncate w-32">{nickName}</span>
  </div>

  <span className="font-semibold text-customViolet">{score}</span>
</div>
  );
  
  export default LeaderboardItem;