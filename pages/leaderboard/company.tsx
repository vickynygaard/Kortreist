import { useApi } from '@/hooks/useApi';
import { useUserAuth } from '@/components/userAuth';
import LeaderboardMenu from '@/components/leaderboard/leaderboardMenu';
import CustomSpinner from '@/components/dashboard/customSpinner';

interface CompanyScore {
  companyId: number;
  name: string;
  totalPoints: number;
}

const CompanyBarChart = () => {
  const { userData } = useUserAuth();
  const { data, isLoading, error } = useApi<CompanyScore[]>(
    '/api/team/companyScores',
    userData?.accessToken
  );

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

  if (!data || data.length === 0) return;
  const sorted = [...data].sort((a, b) => b.totalPoints - a.totalPoints).slice(0, 2);
  const maxScore = sorted[0]?.totalPoints || 1;

  const maxBarHeight = 300;


  const barColors = ['bg-gradient-to-t from-yellow-300 to-yellow-500', 'bg-gradient-to-t from-purple-400 to-purple-700'];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Title */}
      <div className="font-bold text-3xl text-violet-950 pb-6">Ledertavle</div>

      <LeaderboardMenu />

      {/* Bar container */}
    <div className="flex justify-center items-end gap-10 mt-10 h-[400px] max-w-sm w-full mx-auto">
        {sorted.map((company, index) => {
        const heightPx = (company.totalPoints / maxScore) * maxBarHeight;
        return (
            <div key={company.companyId} className="flex flex-col items-center w-24">
            {index === 0 && <div className="text-xl mb-1">🏆</div>}
            <div
                className={`w-full rounded-t-xl shadow-md transition-all duration-700 ${barColors[index]}`}
                style={{
                height: `${heightPx}px`,
                minHeight: '3rem',
                }}
            />
            <div className="text-center mt-2">
                <p className="font-semibold text-sm text-violet-900">{company.name}</p>
                <p className="text-xs text-gray-600">{company.totalPoints.toLocaleString()} poeng</p>
            </div>
            </div>
        );
        })}
        </div>
    </div>
  );
};

export default CompanyBarChart;
