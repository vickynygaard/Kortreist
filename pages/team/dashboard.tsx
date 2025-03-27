import { useEffect, useState } from "react";
import TeamStats from "../../components/teams/TeamStats";
import { useUserAuth } from "@/components/userAuth";
import Footer from "@/components/footer";

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
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(true);
  const { userData } = useUserAuth();

  useEffect(() => {
    if (!userData?.accessToken) return;

    const fetchMyTeam = async () => {
      try {
        const response = await fetch(
          "https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/team/myteam",
          {
            headers: {
              Authorization: `Bearer ${userData.accessToken}`,
            },
          }
        );

        if (!response.ok) throw new Error("Klarte ikke hente lagdata");
        const data = await response.json();
        setTeam(data);
      } catch (err) {
        console.error("❌ Feil ved henting av lag:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyTeam();
  }, [userData?.accessToken]);

  if (loading || !team) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Laster lagdata...</p>
      </div>
    );
  }

  // Map backend members
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

  return (
    <div className="relative">

      <div className="fixed top-0 left-0 w-full bg-customYellow2 z-30 flex justify-center">
        <div className="w-full max-w-xs sm:max-w-md px-4">
          <div className="flex flex-col h-56">
            {/* Toggle Bar */}
            <div className="flex-none mt-4 border-4 border-customViolet rounded-full p-1">
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

            {/* Shared header block */}
          <div className="flex-none p-4 border-2 border-violet-900 rounded-2xl text-center mt-4">
            {selectedPage === "medlemmer" ? (
              <>
                <h2 className="text-2xl sm:text-3xl font-semibold text-customViolet">
                  {team.name}
                </h2>
                <p className="mt-2 text-xl text-black font-semibold">
                  Dere er {mappedMembers.length} medlemmer
                </p>
              </>
            ) : (
              <>
                <TeamStats
                  teamName={team.name}
                  totalScore={team.teamTotalScore}
                />
              </>
            )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-56 w-full max-w-xs sm:max-w-md mx-auto px-4">
        {selectedPage === "lagstatistikk" ? (
          <main className="flex flex-col gap-6">
            <p className="text-2xl font-semibold text-customViolet pt-16 text-center">
              Ukens bærekraftshelter
            </p>
            <div className="flex gap-4 overflow-x-auto px-4">
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
                    <p>Poeng:</p>
                    <p className="text-lg font-bold text-customViolet">
                      {member.points}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        ) : (
          <main>
            <div className="flex flex-col gap-4 mt-4">
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
          </main>
        )}
      </div>
    </div>
  );
}
