import { useEffect, useState } from "react";
import TeamStats from "../../components/teams/TeamStats";
import TeamMembers from "../../components/teams/TeamMembers";
import { useUserAuth } from "@/components/userAuth";

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

  // Map backend members 
  const mappedMembers =
    team?.members.map((m) => ({
      id: m.userId,
      NickName: m.nickName,
      points: m.totalScore,
      profilePicture: m.profilePicture,
    })) || [];

  const topMembers = [...mappedMembers].sort((a, b) => b.points - a.points).slice(0, 3);

  if (loading || !team) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Laster lagdata...</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-customYellow2 flex flex-col items-center px-4 pt-4 pb-24">
      <div className="w-full max-w-xs sm:max-w-md relative pt-12">
        {/* Toggle bar */}
        <div className="sticky top-4 z-20 w-full bg-customYellow2">
          <div className="flex items-center border-4 border-customViolet rounded-full p-1">
            <button
              className={`w-[50%] px-4 py-3 text-center text-lg font-semibold rounded-full transition-all ${
                selectedPage === "lagstatistikk" ? "bg-customViolet text-white" : "text-black"
              }`}
              onClick={() => setSelectedPage("lagstatistikk")}
            >
              Lagstatistikk
            </button>
            <button
              className={`w-[50%] px-4 py-3 text-center text-lg font-semibold rounded-full transition-all ${
                selectedPage === "medlemmer" ? "bg-customViolet text-white" : "text-black"
              }`}
              onClick={() => setSelectedPage("medlemmer")}
            >
              Medlemmer
            </button>
          </div>
        </div>

        {selectedPage === "lagstatistikk" ? (
          <main className="mt-8 flex flex-col gap-6">
            <div className="p-4 bg-customYellow rounded-lg text-center">
            <TeamStats teamName={team.name} totalScore={team.teamTotalScore} />
            </div>
            <p className="text-2xl font-semibold text-customViolet text-center mt-4">
              Ukens bærekraftshelter
            </p>
            <div className="mt-0 flex gap-4 overflow-x-auto px-4">
              {topMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center bg-customYellow p-4 rounded-lg w-32 flex-shrink-0 h-44"
                >
                  <img
                    src={`/images/profile-pictures/${member.profilePicture || "avatar1.png"}`}
                    alt={member.NickName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-customViolet"
                  />
                  <p className="text-md font-semibold text-black mt-2 text-center leading-tight h-10 flex items-center justify-center">
                    {member.NickName}
                  </p>
                  <div className="mt-auto">
                    <p>Poeng: </p>
                    <p className="text-lg font-bold text-customViolet">{member.points}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        ) : (
            <main className="mt-8 w-full">
            <div className="p-4 bg-customYellow rounded-lg text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold text-customViolet">
                {team.name}
              </h2>
              <p className="mt-2 text-xl text-black font-semibold">
                Dere er {mappedMembers.length} medlemmer
              </p>
            </div>
            <div
              className="mt-4 overflow-y-auto pb-8"
              style={{ maxHeight: "calc(100vh - 20rem)" }}
            >
                <div className="flex flex-col gap-4">
                {mappedMembers.map((member) => (
                <div
                key={member.id}
                className="flex items-center justify-between p-3 bg-customYellow rounded-md"
                >
                <div className="flex items-center gap-4">
                    <img
                    src={`/images/profile-pictures/${member.profilePicture || "avatar1.png"}`}
                    alt={member.NickName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-customViolet"
                    />
                    <p className="text-lg font-medium text-black">
                    {member.NickName}
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-600">Poeng</p>
                    <p className="text-lg font-bold text-customViolet">{member.points}</p>
                </div>
                </div>
                ))}
                </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
