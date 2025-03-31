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

    const podiumWithRank: (User & { rank: number })[] = [];

    const sorted = [...data].sort((a, b) => b.totalScore - a.totalScore);
    let currentRank = 1;

    for (let i = 0; i < sorted.length && podiumWithRank.length < 3; i++) {
      if (i > 0 && sorted[i].totalScore === sorted[i - 1].totalScore) {
        // If the score is the same as the previous user, share the rank
        podiumWithRank.push({ ...sorted[i], rank: podiumWithRank[podiumWithRank.length - 1].rank });
      } else {
        // Otherwise, increment the rank
        podiumWithRank.push({ ...sorted[i], rank: currentRank });
      }
      currentRank++;
    }

    setTopThree(podiumWithRank);
    setRestOfBoard(sorted.slice(podiumWithRank.length));
  }, [data]);

  const renderPodium = (rank: number) => {
    const user = topThree.find((u) => u.rank === rank);
    if (!user) return null;
  
    return (
      <Podium {...user} score={user.totalScore} profilePicture={user.profilePicture} />
    );
  };

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

  return (
    <div className="flex flex-col">
      {/* Podium for top three */}
      <div className="flex justify-center items-end gap-6 mt-10">
        {renderPodium(2)}
        {renderPodium(1)}
        {renderPodium(3)}
      </div>

      {/* Rest of leaderboard */}
      <div className="mt-4 w-full rounded-t-lg bg-customYellow2/50 backdrop-blur-md">
        {restOfBoard.map((user, index) => (
          <LeaderboardItem
            key={user.userId}
            rank={index + topThree.length + 1} // start after podium
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
