import { useApi } from '@/hooks/useApi';
import LeaderboardContainer from '@/components/leaderboard/leaderboardContainer';
import { useUserAuth } from '@/components/userAuth';
import LeaderboardMenu from '@/components/leaderboard/leaderboardMenu';
import { useEffect } from 'react';

interface Team {
  teamId: number;
  name: string;
  teamTotalScore: number;
  teamProfilePicture: string;
}

const TeamLeaderboardPage = () => {
  const { userData } = useUserAuth();

    // Retrieve cached team leaderboard data from localStorage
    let fallbackTeams: Team[] | undefined;
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem("teamLeaderboardData");
      if (cached) {
        try {
          fallbackTeams = JSON.parse(cached);
        } catch (err) {
          console.error("Error parsing cached team leaderboard data:", err);
        }
      }
    }

  const { data, isLoading, error } = useApi<Team[]>(
    "/api/Team/allTeams",
    userData?.accessToken,
    { 
      fallbackData: fallbackTeams,
      refreshInterval: 30000, 
      revalidateOnMount: true,
      enabled: !!userData?.accessToken 
    }
  );

    // When fresh data is available, update the cache
    useEffect(() => {
      if (data && typeof window !== "undefined") {
        localStorage.setItem("teamLeaderboardData", JSON.stringify(data));
      }
    }, [data]);

  const transformed = data?.map((team, index) => ({
    userId: team.teamId,
    nickName: team.name,
    totalScore: team.teamTotalScore,
    profilePicture: team.teamProfilePicture ?? "teamAvatar1.png",
    rank: index + 1,
    type: "team" as const
  }));
  

  return (
    <div className='flex flex-col  w-full'>
      
    {/*Overskrift*/}
    <div className='w-full text-center'>
    <div className="font-bold text-3xl text-violet-950 pb-6">Toppliste</div>
    </div>
    <LeaderboardMenu />

    <LeaderboardContainer users={transformed} loadingOverride={isLoading} />
  </div>
  );
};

export default TeamLeaderboardPage;
