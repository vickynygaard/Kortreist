const LeaderboardItem = ({ name, score, rank }: { name: string, score: number, rank: number }) => (
    <div className="flex items-center justify-between p-4 px-8 gap-8 border-b border-gray-500">
      <span className="font-bold">{rank}</span>
      <div className="flex items-center gap-4 flex-grow">
        
        <span className="truncate w-32 overflow-hidden whitespace-nowrap">{name}</span>
      </div>
      <span className="">{score}</span>
    </div>
  );
  
  export default LeaderboardItem;