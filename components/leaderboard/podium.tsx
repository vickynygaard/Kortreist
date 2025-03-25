const Podium= ({ name, score, rank}: { name:string, score:number, rank:number} ) => {
    const heights: Record<number, string> = {
        1: 'h-32', // gold
        2: 'h-24', // silver
        3: 'h-20', // bronze
      };
    
    return (
        <div className="flex flex-col items-center justify-end w-24">
            {/*Ikon & navn*/}
            
            <span className="mb-2 text-lg font-medium">{name}</span>
            
            {/*Podium-kolonner*/}
            <div className={`${heights[rank]} w-full flex flex-col items-center bg-violet-900 text-white rounded-t-2xl p-2`}>
                <span className="text-xl font-bold">{rank}</span>
                <span className="text-base">{score}</span>
            </div>
        </div>
    );
  };

  export default Podium;