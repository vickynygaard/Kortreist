import { useEffect, useState } from 'react';
import Podium from './podium';
import LeaderboardItem from './leaderboardItem';

const LeaderboardContainer = () => {
  const [topThree, setTopThree] = useState<{ image: string; name: string; score: number }[]>([]);
  const [restOfBoard, setRestOfBoard] = useState<{ image: string; name: string; score: number}[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        const sortedData = data.sort((a: any, b: any) => b.score - a.score);
        
        //Sorter topp tre og resten av ledertavlen
        setTopThree(sortedData.slice(0, 3));
        setRestOfBoard(sortedData.slice(3));
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
        {/*Pall: 1., 2., 3. plass*/}
        <div className="flex justify-center items-end gap-6 mt-10">
            <div className="order-2">
                {topThree[1] && <Podium rank={2} {...topThree[1]} />}
            </div>
            <div className="order-1">
                {topThree[0] && <Podium rank={1} {...topThree[0]} />}
            </div>
            <div className="order-3">
                {topThree[2] && <Podium rank={3} {...topThree[2]} />}
            </div>
        </div>
        
          {/*Resten av ledertavlen*/}
          <div className="w-full max-h-[400px] overflow-y-auto bg-customYellow rounded-t-lg">
            {restOfBoard.map((name, index) => (
            <LeaderboardItem key={index} rank={index + 4} {...name} />
            ))}
          </div>
    </div>
  );
};

export default LeaderboardContainer;
