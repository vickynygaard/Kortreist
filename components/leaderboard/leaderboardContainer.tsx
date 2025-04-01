import { useEffect, useState } from 'react';
import Podium from './podium';
import LeaderboardItem from './leaderboardItem';
import { useUserAuth } from '../userAuth';
import { useApi } from '@/hooks/useApi';
import CustomSpinner from '../dashboard/customSpinner';

interface User {
  rank: number;
  userId: number;
  nickName: string;
  totalScore: number;
  profilePicture: string;
}

const LeaderboardContainer = () => {
  const [topThree, setTopThree] = useState<User[]>([]);
  const [restOfBoard, setRestOfBoard] = useState<User[]>([]);
  const { userData, loading: authLoading } = useUserAuth();
  
  // Fetch all users for leaderboard
  const endpoint = userData?.accessToken ? '/api/users/all' : null;

  const { data, isLoading: apiLoading, error } = useApi<User[]>(
    endpoint,
    userData?.accessToken,
    { refreshInterval: 30000 }
  );
  

  // Process data when it's available.
  useEffect(() => {
    if (!data) return;
  
    const sorted = [...data].sort((a, b) => b.totalScore - a.totalScore);
    const ranked: (User & { rank: number })[] = [];
  
    let currentRank = 1;
    for (let i = 0; i < sorted.length; i++) {
      if (i > 0 && sorted[i].totalScore === sorted[i - 1].totalScore) {
        // Same score, same rank
        ranked.push({ ...sorted[i], rank: ranked[i - 1].rank });
      } else {
        // New score, new rank
        ranked.push({ ...sorted[i], rank: currentRank });
      }
      currentRank++;
    }
  
    setTopThree(ranked.slice(0, 3));
    setRestOfBoard(ranked.slice(3));
  }, [data]);
  
  const isLoading = authLoading || apiLoading || error;

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Her skjedde det noe galt, prøv å laste inn på nytt</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CustomSpinner />
      </div>
    );
  }

  const visualOrder = [2, 1, 3]; // left, center, right

  return (
    <div className="flex flex-col">
      {/* Podium for top three */}
      <div className="flex justify-center items-end gap-6 mt-10">
      {visualOrder.map((visualPos) => {
        const user = topThree[visualPos - 1];
        if (!user) return null;
        return (
          <Podium
            key={user.userId}
            rank={user.rank}
            nickName={user.nickName}
            score={user.totalScore}
            profilePicture={user.profilePicture}
            visualPosition={visualPos}
          />
        );
      })}
    </div>
      {/* Rest of leaderboard */}
      <div className="mt-4 w-full rounded-t-lg bg-customYellow2/50 backdrop-blur-md">
      {restOfBoard.map((user) => (
        <LeaderboardItem
          key={user.userId}
          rank={user.rank}
          nickName={user.nickName}
          score={user.totalScore}
          profilePicture={user.profilePicture}
        />
      ))}
      </div>
    </div>
  );
};

export default LeaderboardContainer;
