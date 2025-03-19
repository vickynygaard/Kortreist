const Podium= ({image, name, score, rank}: {image:string, name:string, score:number, rank:number} ) => {
    const heights = ['h-24', 'h-32', 'h-20'];
    
    return (
        <div className="flex flex-col items-center justify-end w-24">
            {/*Ikon & navn*/}
            <img src={image} alt={name} className='w-16 h-16 rounded-full border-2 border-white -mb-4 z-10' />
            <span className="mb-2 text-lg font-medium">{name}</span>
            
            {/*Podium-kolonner*/}
            <div className={`${heights[rank - 1]} w-full flex flex-col items-center bg-violet-900 text-white rounded-t-2xl p-2`}>
                <span className="text-xl font-bold">{rank}</span>
                <span className="text-base">{score}</span>
            </div>
        </div>
    );
  };

  export default Podium;