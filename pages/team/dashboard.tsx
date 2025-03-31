import { useEffect, useState } from "react";
import TeamStats from "../../components/teams/TeamStats";
import TeamMembers from "../../components/teams/TeamMembers";
import { useUserAuth } from "@/components/userAuth";
import Footer from "@/components/footer";
import router from "next/router";
import { useApi } from "@/hooks/useApi";
import CustomSpinner from "@/components/dashboard/customSpinner";

interface Team {
  teamId: number;
  name: string;
  teamTotalScore: number;
  members: {
    userId: number;
    nickName: string;
    profilePicture: string;
    totalScore: number;
  }[];
}

export default function DashboardPage() {
  const [selectedPage, setSelectedPage] = useState("lagstatistikk");
  const { userData, loading: authLoading } = useUserAuth();

  const { data: team, isLoading: apiLoading, error } = useApi<Team>(
    userData?.accessToken ? "/api/team/myteam" : null,
    userData?.accessToken,
    { refreshInterval: 30000 }
  );

  // Combine loading states
  const isLoading = authLoading || apiLoading || !team;

  // Redirect to onboarding if team not found 
  useEffect(() => {
    if (error && error.message.includes("404")) {
      router.replace("/team/onboarding");
    }
  }, [error]);

  // Map backend members for display
  const mappedMembers =
    team?.members.map((m) => ({
      id: m.userId,
      NickName: m.nickName,
      points: m.totalScore,
      profilePicture: m.profilePicture,
    })) || [];
  const topMembers = [...mappedMembers]
    .sort((a, b) => b.points - a.points)
    .slice(0, 3);


    if (isLoading) {
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
  // Otherwise, show an error message.
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Her skjedde det noe galt, prøv å laste inn på nytt</p>
      </div>
    );
}


  const handleLeaveTeam = async () => {
    if (!window.confirm("Er du sikker på at du vil forlate laget?")) return;
    if (!userData?.accessToken) return;
    try {
      const response = await fetch(
        "https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/team/leave",
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
        return (
          <div className="flex justify-center items-center h-screen">
            <p>Her skjedde det noe galt, prøv å laste inn på nytt</p>
          </div>
        );
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
          <main className="mt-28 flex flex-col gap-6">
            <div className="p-4 bg-customYellow2 border-2 border-violet-900 rounded-2xl text-center">
              <TeamStats teamName={team.name} totalScore={team.teamTotalScore} />
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
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile-pictures/${
                      member.profilePicture || "avatar1.png"
                    }`}
                    alt={member.NickName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-customViolet"
                  />
                  <p className="text-md font-semibold text-black mt-2 text-center leading-tight h-10 flex items-center justify-center">
                    {member.NickName}
                  </p>
                  <div className="mt-auto">
                    <p>Poeng: </p>
                    <p className="text-lg font-bold text-customViolet">
                      {member.points}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        ) : (
          <main className="mt-28 w-full">
            <div className="relative z-10 flex justify-between items-center bg-customYellow2 px-4 py-3 border-2 border-violet-900 rounded-2xl shadow-md">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-customViolet">
                  {team.name}
                </h2>
                <p className="mt-1 text-sm sm:text-base text-black">
                  Dere er {mappedMembers.length} medlemmer
                </p>
              </div>
              <button
                onClick={handleLeaveTeam}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-200 transition"
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
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile-pictures/${
                          member.profilePicture || "avatar1.png"
                        }`}
                        alt={member.NickName}
                        className="w-12 h-12 rounded-full object-cover border-2 border-customViolet"
                      />
                      <p className="text-lg font-medium text-black">
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
      <Footer />
    </div>
  );
}
