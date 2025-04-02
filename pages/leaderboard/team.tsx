import { useApi } from '@/hooks/useApi';
import LeaderboardContainer from '@/components/leaderboard/leaderboardContainer';
import { useUserAuth } from '@/components/userAuth';
import LeaderboardMenu from '@/components/leaderboard/leaderboardMenu';

interface Team {
  teamId: number;
  name: string;
  teamTotalScore: number;
}

const TeamLeaderboardPage = () => {
  const { userData } = useUserAuth();
  const { data, isLoading, error } = useApi<Team[]>(
    '/api/Team/allTeams',
    userData?.accessToken
  );

  const transformed = data?.map((team, index) => ({
    userId: team.teamId,
    nickName: team.name,
    totalScore: team.teamTotalScore,
    profilePicture: `/avatar1.png`, // Placeholder avatar for teams
    rank: index + 1
  }));

  return (
    <div className='flex flex-col  w-full'>
      
    {/*Overskrift*/}
    <div className='w-full text-center'>
    <div className="font-bold text-3xl text-violet-950 pb-6">Ledertavle</div>
    </div>
    <LeaderboardMenu />

  <LeaderboardContainer users={transformed} loadingOverride={isLoading} />
  </div>
  );
};

export default TeamLeaderboardPage;
