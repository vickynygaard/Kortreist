const LeaderboardItem = ({ image, name, score, rank }: { image:string, name: string, score: number, rank: number }) => (
    <div className="flex items-center justify-between p-4 px-8 gap-8 border-b border-gray-500">
      <span className="font-bold">{rank}</span>
      <div className="flex items-center gap-4 flex-grow">
        <img src={image} alt={name} className='w-8 h-8 rounded-full border-2 border-white' />
        <span className="truncate w-32 overflow-hidden whitespace-nowrap">{name}</span>
      </div>
      <span className="">{score}</span>
    </div>
  );
  
  export default LeaderboardItem;