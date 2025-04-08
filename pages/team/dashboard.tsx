import { useEffect, useState } from "react";
import TeamStats from "../../components/teams/TeamStats";
import TeamMembers from "../../components/teams/TeamMembers";
import { useUserAuth } from "@/components/userAuth";
import router from "next/router";
import { useApi } from "@/hooks/useApi";
import CustomSpinner from "@/components/dashboard/customSpinner";
import ConfirmationModal from "@/components/modalConfirm";
import { useDelayedLoading } from "@/services/useDelayedLoading";

interface Team {
  teamId: number;
  name: string;
  teamTotalScore: number;
  teamProfilePicture: string;
  members: {
    userId: number;
    nickName: string;
    profilePicture: string;
    totalScore: number;
  }[];
}

export default function DashboardPage() {
  const [selectedPage, setSelectedPage] = useState("lagstatistikk");
  const [showConfirm, setShowConfirm] = useState(false);
  const { userData, loading: authLoading } = useUserAuth();

    // Retrieve cached team data if available
    let fallbackTeam: Team | undefined;
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem("teamData");
      if (cached) {
        try {
          fallbackTeam = JSON.parse(cached);
        } catch (error) {
          console.error("Failed to parse cached team data:", error);
        }
      }
    }

  const { data: team, isLoading: apiLoading, error } = useApi<Team>(
    "/api/team/myteam",
    userData?.accessToken,
    { refreshInterval: 30000, revalidateOnMount: true, fallbackData: fallbackTeam, enabled: !!userData?.accessToken }
  );

    // Update cache when new team data is fetched
    useEffect(() => {
      if (team && typeof window !== "undefined") {
        localStorage.setItem("teamData", JSON.stringify(team));
      }
    }, [team]);
  
  const isLoading = authLoading || apiLoading || !team;

    // Redirect to onboarding if team not found 
    useEffect(() => {
      if (!isLoading && !team && !error) {
        router.replace("/team/onboarding");
      }
    }, [isLoading, team, error]); 

  const showSpinner = useDelayedLoading();
  
  if (isLoading && showSpinner) {
    return (
      <div className="flex justify-center items-center h-screen">
            <CustomSpinner />
          </div>
        );
      }  
      
      if (error) {
        if (error.message.includes("404")) {
          return null;
        }
        return (
          <div className="flex justify-center items-center h-screen">
        <p>Her skjedde det noe galt, prøv å laste inn på nytt</p>
      </div>
    );
  } 
  
  if (!team) return null; // So typeScript doesn't complain

  const mappedMembers =
  team.members.map((m) => ({
    id: m.userId,
    NickName: m.nickName,
    points: m.totalScore,
    profilePicture: m.profilePicture,
  })) || [];
  const topMembers = [...mappedMembers]
  .sort((a, b) => b.points - a.points)
  .slice(0, 3);

  const confirmLeaveTeam = async () => {
    setShowConfirm(false);
    if (!userData?.accessToken) return;
    try {
      const response = await fetch(
        "https://kortreistapi-h7e9d7gsb3bcgwhd.norwayeast-01.azurewebsites.net/api/team/leave",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Klarte ikke forlate laget");
      }
      router.replace("/team");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center px-4">
      <div className="w-full max-w-xs sm:max-w-md relative">
        <div className="fixed top-0 left-0 w-full bg-customYellow2 z-30 h-18 overflow-hidden">
          <div className="w-full max-w-xs sm:max-w-md mx-auto">
            <div className="flex items-center border-4 border-customViolet rounded-full mt-4 p-1">
              <button
                className={`w-[50%] px-4 py-3 text-center text-lg font-semibold rounded-full transition-all ${
                  selectedPage === "lagstatistikk"
                    ? "bg-customViolet text-white"
                    : "text-black"
                }`}
                onClick={() => setSelectedPage("lagstatistikk")}
              >
                Lagstatistikk
              </button>
              <button
                className={`w-[50%] px-4 py-3 text-center text-lg font-semibold rounded-full transition-all ${
                  selectedPage === "medlemmer"
                    ? "bg-customViolet text-white"
                    : "text-black"
                }`}
                onClick={() => setSelectedPage("medlemmer")}
              >
                Medlemmer
              </button>
            </div>
          </div>
        </div>

        {selectedPage === "lagstatistikk" ? (
          <main className="mt-20 flex flex-col gap-6">
            <div className="p-4 bg-customYellow2 text-center">
            <TeamStats
              teamName={team.name}
              totalScore={team.teamTotalScore}
              teamProfilePicture={team.teamProfilePicture}
              accessToken={userData?.accessToken}
              teamId={team.teamId}
            />
            </div>
            <p className="text-2xl font-semibold text-customViolet text-center mt-4">
              Ukens bærekraftshelter
            </p>
            <div className="mt-0 flex gap-4 overflow-x-auto px-4">
              {topMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col bg-customYellow2 items-center border-2 border-violet-900 rounded-2xl p-4 w-32 flex-shrink-0 h-44"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatars/${
                      member.profilePicture || "Avatar1.png"
                    }`}
                    alt={member.NickName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-customViolet"
                  />
                  <div className="h-12 flex items-center justify-center">
                    <p className="text-md max-w-24 line-clamp-2 break-all font-semibold text-black text-center leading-tight">
                      {member.NickName}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-col items-center">
                  <p className="text-sm text-gray-700">Poeng</p>
                  <p className="text-lg font-bold text-customViolet">{member.points}</p>
                </div>
                </div>
              ))}
            </div>
          </main>
        ) : (
          <main className="mt-28 w-full">
            <div className="relative z-10 flex justify-between items-center bg-customYellow2 px-4 py-3 border-2 border-violet-900 rounded-2xl shadow-md">
              <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-customViolet line-clamp-1 break-words max-w-[10rem] sm:max-w-[16rem]">
                {team.name}
              </h2>
                <p className="mt-1 text-sm sm:text-base text-black">
                  Dere er {mappedMembers.length} medlemmer
                </p>
              </div>
              <button
                onClick={() => setShowConfirm(true)}
                className="bg-customRed text-white px-4 py-2 rounded-full hover:bg-red-200 transition"
              >
                Forlat Lag
              </button>
            </div>
            <div className="relative mt-4 pt-4 z-10 pb-8">
              <div className="flex flex-col gap-4">
                {mappedMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-3 bg-customYellow2 border-2 border-violet-900 rounded-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatars/${
                          member.profilePicture || "Avatar1.png"
                        }`}
                        alt={member.NickName}
                        className="w-12 h-12 rounded-full object-cover border-2 border-customViolet"
                      />
                      <p className="text-base font-medium text-black break-all line-clamp-1 max-w-[18rem]">
                        {member.NickName}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Poeng</p>
                      <p className="text-lg font-bold text-customViolet">
                        {member.points}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}
      </div>

      {/* Confirm leave team */}
      {showConfirm && (
      <ConfirmationModal
        message="Er du sikker på at du vil forlate laget?"
        onConfirm={confirmLeaveTeam}
        onCancel={() => setShowConfirm(false)}
        confirmColor="red"
      />
    )}
    </div>
  );
}
