import { useApi } from '@/hooks/useApi';
import { useUserAuth } from '@/components/userAuth';
import LeaderboardMenu from '@/components/leaderboard/leaderboardMenu';
import CustomSpinner from '@/components/dashboard/customSpinner';
import { Crown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from 'react';

interface CompanyScore {
  companyId: number;
  name: string;
  totalPoints: number;
}

const CompanyBarChart = () => {
  const { userData } = useUserAuth();

    // Retrieve cached company data from localStorage 
    let fallbackCompanyData: CompanyScore[] | undefined;
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem("companyBarChartData");
      if (cached) {
        try {
          fallbackCompanyData = JSON.parse(cached);
        } catch (error) {
          console.error("Error parsing cached CompanyBarChartData:", error);
        }
      }
    }

    const { data, isLoading, error } = useApi<CompanyScore[]>(
      "/api/team/companyScores",
      userData?.accessToken,
      {
        fallbackData: fallbackCompanyData,
        refreshInterval: 30000,
        revalidateOnMount: true,
        enabled: !!userData?.accessToken,
      }
    );

  // Update cache when fresh data is fetched
  useEffect(() => {
    if (data && typeof window !== "undefined") {
      localStorage.setItem("companyBarChartData", JSON.stringify(data));
    }
  }, [data]);

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

  if (!data || data.length === 0) return null;

  // Sort & slice top 2
  const sorted = [...data]
    .sort((a, b) => b.totalPoints - a.totalPoints)
    .slice(0, 2);

  const maxScore = sorted[0]?.totalPoints || 1;
  const maxBarHeight = 300; // Max px height of the tallest bar

  const barColors = [
    'bg-gradient-to-t from-yellow-300 to-yellow-500',
    'bg-gradient-to-t from-purple-400 to-purple-700'
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Title */}
      <div className="font-bold text-3xl text-violet-950 pb-6">
        Toppliste
      </div>

      <LeaderboardMenu />

      {/* Fixed-height container for the bar chart */}
      <div className="relative mt-14 w-full max-w-sm h-[400px] mx-auto">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-20 items-end">
          {sorted.map((company, index) => {
            const heightPx = (company.totalPoints / maxScore) * maxBarHeight;

            const companyLogos: Record<string, string> = {
              "Hennig-Olsen Is": "companyA.png",
              "Glencore Nikkelverk AS": "companyB.png",
            };

            const logoTweaks: Record<string, string> = {
              "Hennig-Olsen Is": "scale-[1.5] translate-y-[-0.4rem]",
              "Glencore Nikkelverk AS": "scale-[3]",
            };

            const crownTweaks: Record<string, string> = {
              "Hennig-Olsen Is": "-top-11",
              "Glencore Nikkelverk AS": "-top-6",
            };

            const logoSrc = `${process.env.NEXT_PUBLIC_BASE_PATH}/images/company-pictures/${
              companyLogos[company.name] || "default.png"
            }`;

            return (
              <div key={company.companyId} className="flex flex-col items-center">
                {/* Logo */}
                <div className="relative mb-2 flex items-center justify-center">
                  {index === 0 && (
                    <Crown
                      size={25}
                      className={`absolute z-50 left-1/2 -translate-x-1/2 text-yellow-500 drop-shadow ${
                        crownTweaks[company.name] ?? ""
                      }`}
                    />
                  )}
                  <img
                    src={logoSrc}
                    alt={`${company.name} logo`}
                    className={`w-10 h-10 object-contain ${
                      logoTweaks[company.name] ?? ""
                    }`}
                  />
                </div>

                {/* Animated Bar */}
                <motion.div
                  className={`rounded-t-xl w-24 shadow-md transition-all duration-700 ${barColors[index]}`}
                  initial={{ height: 0 }}
                  animate={{ height: heightPx }}
                  transition={{ duration: 0.05, ease: "easeOut" }}
                  style={{ minHeight: "3rem" }}
                />

                {/* Label */}
                <div className="text-center mt-2">
                  <p className="font-semibold text-sm text-violet-900">
                    {company.name}
                  </p>
                  <p className="text-xs text-gray-600">
                    {company.totalPoints.toLocaleString("no-NO")} poeng
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompanyBarChart;
