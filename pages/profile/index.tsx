import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, Footprints, Goal, Users, Trophy, User, Coins, Leaf, Bus, Bike, Car, Crown, Globe, Settings, X, UnlockIcon, Star, Flag, MapPin } from "lucide-react";
import { useUserAuth } from "@/components/userAuth";
import Section from "@/components/section";
import Page from "@/components/page";
import { useApi } from "@/hooks/useApi";
import CustomSpinner from "@/components/dashboard/customSpinner";
import { useDelayedLoading } from "@/services/useDelayedLoading";
import { usePrefetchMainRoutes } from "@/services/preFetch";

interface User {
  name: string;
  nickName: string;
  profilePicture: string;
  totalScore: number;
}

interface UserAchievement {
  achievementId: number;
  name: string;
  description: string;
  total: number;
  progress: number;
  earnedAt: string | null;
  tier: number;
}

interface ProfileOverview {
  user: User;
  totalCo2Savings: number;
  totalTravels: number;
  totalMoneySaved: number;
  completedChallenges: number;
  achievements: UserAchievement[];
}

export default function Profile() {
  const [selectedStat, setSelectedStat] = useState<"co2" | "money">("co2");
  const [selectedBadge, setSelectedBadge] = useState<{ id: number; name: string; description: string; progress: number; total: number; } | null>(null);

  const { userData, loading: authLoading } = useUserAuth();

  usePrefetchMainRoutes();
  
  const endpoint = userData?.accessToken ? "/api/Profile/overview" : null;
  const { data: overview, isLoading: overviewLoading, error: overviewError } = useApi<ProfileOverview>(
    endpoint,
    userData?.accessToken,
    { revalidateOnFocus: false,    // Refetch when user switches back to the tab or navigates back to the page
    revalidateOnMount: true,      // Fetch fresh data when component first mounts
    revalidateIfStale: false,     // Don't aggressively refetch in the background
    refreshInterval: 0            // No polling; this is not a dashboard
    }
  );

  const showSpinner = useDelayedLoading();
  const isLoading = authLoading || overviewLoading || !overview;

  if (overviewError) {
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

  const stats = {
    co2: { value: (overview?.totalCo2Savings ?? 0).toFixed(4), unit: "kg", label: "CO₂ spart" },
    money: { value: Math.floor(overview?.totalMoneySaved ?? 0), unit: "kr", label: "Penger spart" },
  };  

  function getTierStyles(tier: number): string {
    switch (tier) {
      case 1: return "border-[#BD824A] border-2 bg-[linear-gradient(135deg,_#F0C59D_0%,_#F0C59D_35%,_#E6AE7D_35%,_#E6AE7D_100%)] text-yellow-900"; //Bronze
      case 2: return "border-[#92A7BA] border-2 bg-[linear-gradient(135deg,_#E4F1FA_0%,_#E4F1FA_35%,_#D6E4EF_35%,_#D6E4EF_100%)] text-slate-900"; //Silveßr
      case 3: return "border-[#FA9702] border-2 bg-[linear-gradient(135deg,_#FEE332_0%,_#FEE332_35%,_#FED602_35%,_#FED602_100%)] text-yellow-800"; //Gold
      default: return "border-gray-300 bg-white/50"; //Unknown/Unlocked
    }
  }
  

  function getBaseIcon(name: string): JSX.Element {
    const base = name.split(" ")[0]; //Extract "Turgåer" from "Turgåer I"
  
    const iconMap: Record<string, JSX.Element> = {
      "Turgåer": <Footprints size={24} />,
      "Syklist": <Bike size={24} />,
      "Bussreisende": <Bus size={24} />,
      "Samkjører": <Car size={24} />,
      "Utforsker": <Globe size={24} />,
      "Joker": <Crown size={24} />, 
      "Poengjeger": <Goal size={24} />,
      "CO₂-sparer": <Leaf size={24} />,
      "Pengebesparer": <Coins size={24} />,
      "Opplåser": <UnlockIcon size={24} />, 
      default: <Trophy size={24} />,
    };
  
    return iconMap[base] || iconMap.default;
  }

  return (
    <div className="flex flex-col items-center">
            
       {/* Settings Ikon og Min Profil */}     
      <div className="w-full px-4 flex text-center items-center justify-between"> 
        <h1 className="font-bold text-3xl text-violet-950 pb-6">Min Profil</h1>
        {/* Settings Ikon */}
        <Link href="/profile/settings" className="text-black">
          <Settings size={28} strokeWidth={2}/>
        </Link>
      </div>


        {/* Profile info boks */}
        <div className="w-full">
        <div className="w-full bg-customYellow2 p-4 rounded-2xl flex flex-col">
          {/* Profilbilde og navn */}
          <div className="flex items-center gap-4">
            <img 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile-pictures/${overview?.user.profilePicture || "avatar1.png"}`}
              alt="Default Profile" 
              className="w-16 h-16 rounded-full object-cover border-2 border-customViolet"
            />
            <div className="flex flex-col">
              <p className="text-lg font-semibold break-all line-clamp-1 max-w-[20rem]">{overview?.user.nickName ?? "Bruker"}</p>
              <span className="text-sm text-gray-600 break-all line-clamp-1 max-w-[14rem]">{overview?.user.name ?? ""}</span>
            </div>

          </div>
        {/* Stats boks */}
        <div className="grid grid-cols-3 gap-2 bg-customYellow2 border-2 border-customViolet rounded-2xl mt-4 py-3 shadow-sm">
            {[
              {
                icon: <Star size={20} className="text-yellow-500 mb-2" />,
                value: overview?.user.totalScore ?? 0,
                label: "Poeng",
              },
              {
                icon: <Flag size={20} className="text-pink-400 mb-2" />,
                value: overview?.completedChallenges ?? 0,
                label: "Utfordringer",
              },
              {
                icon: <MapPin size={20} className="text-customGreen mb-2" />,
                value: overview?.totalTravels ?? 0,
                label: "Reiser",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center px-2 ${
                  index !== 0 ? "border-l border-customViolet" : ""
                }`}
              >
                {stat.icon}
                <p className="text-lg font-bold text-black-100 leading-none">{stat.value}</p>
                <p className="text-xs text-gray-600 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
      </div>
      </div>

      {/* CO₂ & penger spart */}
      <div className="w-full flex flex-col items-center mt-8 justify-center">
      <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-customYellow2 to-gray-100 shadow-inner flex items-center justify-center">
      <div className={`absolute w-full h-full rounded-full animate-pulse
        ${selectedStat === "co2" ? "shadow-[0_0_25px_#1D8800]" : "shadow-[0_0_25px_#ffb508]"}`}>
      </div>
        <div className="z-10 flex flex-col items-center">
          <p className="text-xl font-bold text-gray-800">
            {stats[selectedStat].value} {stats[selectedStat].unit}
          </p>
          <p className="text-sm text-gray-500">{stats[selectedStat].label}</p>
        </div>
      </div>

        {/* Velg mellom - CO₂ & penger */}
        <div className="flex w-[75%] max-w-xs items-center justify-center space-x-2 bg-customYellow2 rounded-2xl mt-8 p-2 border-2 border-violet-900 shadow-sm">
        {["co2", "money"].map((stat) => (
          <button
            key={stat}
            className={`flex-1 py-2 rounded-xl flex items-center justify-center transition-all duration-200 ease-in-out 
              ${selectedStat === stat ? 
                stat === "co2" ? "bg-customGreen text-white shadow-md" : "bg-yellow-500 text-white shadow-md"
              : "bg-gray-100 text-gray-600"}`}
            onClick={() => setSelectedStat(stat as "co2" | "money")}
          >
            {stat === "co2" ? <Leaf size={24} /> : <Coins size={24} />}
          </button>
        ))}
      </div>
      </div>

      {/* Badges */}
      <div className="w-full px-4 mt-10">
  <div className="bg-customYellow2 p-4 rounded-2xl border-2 border-violet-900">
    <h2 className="text-lg font-semibold mb-3">Merker</h2>

    <div className="grid grid-cols-5 gap-3 place-items-center sm:grid-cols-5">
    {overview?.achievements.map((badge) => (
      <button
        key={badge.achievementId}
        className={`w-14 h-14 flex items-center justify-center rounded-xl shadow-sm transition-all duration-200 text-gray-700
          ${getTierStyles(badge.tier)} }`}
        onClick={() =>
          setSelectedBadge({
            id: badge.achievementId,
            name: badge.name,
            description: badge.description,
            progress: badge.progress,
            total: badge.total,
          })
        }
      >
        {getBaseIcon(badge.name)}
      </button>
      ))}
    </div>
  </div>
</div>

  {selectedBadge && (() => {
    const clampedProgress = Math.min(selectedBadge.progress, selectedBadge.total);
    const progressPercent = (clampedProgress / selectedBadge.total) * 100;

    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={() => setSelectedBadge(null)} //Close if clicked outside modal
      >
        <div
          className="bg-white p-6 rounded-lg shadow-lg text-center w-80 relative"
          onClick={(e) => e.stopPropagation()} //Prevent closing if clicked inside modal
        >
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setSelectedBadge(null)}
          >
            <X size={24} />
          </button>
          <h3 className="font-semibold text-lg">{selectedBadge.name}</h3>
          <p className="text-gray-600">{selectedBadge.description}</p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-300 h-3 rounded-full mt-3">
            <div
              className="bg-customViolet h-3 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          {/* Text showing progress */}
          <p className="text-sm text-gray-700 mt-1">
            {clampedProgress}/{selectedBadge.total}{" "}
            {clampedProgress >= selectedBadge.total ? "fullført" : "pågår"}
          </p>
        </div>
      </div>
    );
  })()}

    </div>
  );
}
