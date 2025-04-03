import { useEffect, useState } from 'react';
import Podium from './podium';
import LeaderboardItem from './leaderboardItem';
import { useUserAuth } from '../userAuth';
import { useApi } from '@/hooks/useApi';
import CustomSpinner from '../dashboard/customSpinner';
import { useDelayedLoading } from '@/services/useDelayedLoading';

interface User {
  rank: number;
  userId: number;
  nickName: string;
  totalScore: number;
  profilePicture: string;
  type?: "user" | "team";
}
interface IsUser {
  userId: number;
}

interface LeaderboardContainerProps {
  users?: User[];
  loadingOverride?: boolean;
}

  // Retrieve cached leaderboard data (if available)
  let fallbackLeaderboard: User[] | undefined;
  if (typeof window !== "undefined") {
    const cached = localStorage.getItem("leaderboardData");
    if (cached) {
      try {
        fallbackLeaderboard = JSON.parse(cached);
      } catch (error) {
        console.error("Failed to parse cached leaderboardData:", error);
      }
    }
  }

const LeaderboardContainer = ({ users, loadingOverride = false }: LeaderboardContainerProps) => {
  const [topThree, setTopThree] = useState<User[]>([]);
  const [restOfBoard, setRestOfBoard] = useState<User[]>([]);
  const { userData, loading: authLoading } = useUserAuth();

  const { data, isLoading: apiLoading, error } = useApi<User[]>(
    "/api/users/all",
    userData?.accessToken,
    { refreshInterval: 30000, enabled: !!userData?.accessToken, fallbackData: fallbackLeaderboard }
  );
  const { data: currentUserData, isLoading: userLoading, error: userError } = useApi<IsUser>(
    "/api/profile/getUser",
    userData?.accessToken,
    { refreshInterval: 0,
      revalidateOnFocus: false,
      revalidateOnMount: true,
      enabled: !!userData?.accessToken }
  );

  useEffect(() => {
    if (data && typeof window !== "undefined") {
      localStorage.setItem("leaderboardData", JSON.stringify(data));
    }
  }, [data]);

  const combinedData = users ?? data;

  useEffect(() => {
    if (!combinedData) return;

    const sorted = [...combinedData].sort((a, b) => b.totalScore - a.totalScore);
    const ranked: (User & { rank: number })[] = [];

    let currentRank = 1;
    for (let i = 0; i < sorted.length; i++) {
      if (i > 0 && sorted[i].totalScore === sorted[i - 1].totalScore) {
        ranked.push({ ...sorted[i], rank: ranked[i - 1].rank });
      } else {
        ranked.push({ ...sorted[i], rank: currentRank });
      }
      currentRank++;
    }

    setTopThree(ranked.slice(0, 3));
    setRestOfBoard(ranked.slice(3));
  }, [combinedData]);

  const showSpinner = useDelayedLoading();
  const isLoading = users ? loadingOverride : (authLoading || apiLoading || userLoading);
  
  if (error || userError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Her skjedde det noe galt, prøv å laste inn på nytt</p>
      </div>
    );
  }

  if (isLoading && showSpinner) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CustomSpinner />
      </div>
    );
  }

  // Define the visual order for podium placement.
  const visualOrder = [2, 1, 3];
  const currentUserId = currentUserData?.userId;

  return (
    <div className="flex flex-col">
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
              type={user.type ?? "user"}
            />
          );
        })}
      </div>

      <div className="mt-4 w-full rounded-t-lg bg-customYellow2/50 backdrop-blur-md">
        {restOfBoard.map((user) => (
          <LeaderboardItem
            key={user.userId}
            rank={user.rank}
            nickName={user.nickName}
            score={user.totalScore}
            profilePicture={user.profilePicture}
            type={user.type ?? "user"}
            isCurrentUser={user.userId === currentUserId} // highlight current user
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderboardContainer;
