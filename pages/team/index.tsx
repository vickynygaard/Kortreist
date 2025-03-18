import { useState } from "react";
import TeamOptions from "../../components/teams/TeamOptions";
import CreateTeamForm from "../../components/teams/CreateTeamForm";
import JoinTeamForm from "../../components/teams/JoinTeamForm";
import TeamStats from "../../components/teams/TeamStats";
import TeamMembers from "../../components/teams/TeamMembers";

export default function Team() {
  const [hasTeam, setHasTeam] = useState(false);
  const [selectedPage, setSelectedPage] = useState("lagstatistikk");
  const [teamName, setTeamName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [step, setStep] = useState("");

  const existingTeams = ["Team Alpha", "Code Masters", "React Wizards"];

  const teamMembers = [
    { id: 1, name: "Ola Nordmann", image: "https://www.w3schools.com/w3images/avatar2.png", points: 100 },
    { id: 2, name: "Kari Hansen", image: "https://www.w3schools.com/howto/img_avatar.png", points: 75 },
    { id: 3, name: "Per Olsen", image: "https://www.w3schools.com/howto/img_avatar2.png", points: 50 },
    { id: 4, name: "Heidi Andresen", image: "https://www.w3schools.com/howto/img_avatar2.png", points: 90 },
    { id: 5, name: "Martin Finne", image: "https://www.w3schools.com/howto/img_avatar2.png", points: 60 },
  ];

  const topMembers = [...teamMembers]
    .sort((a, b) => b.points - a.points)
    .slice(0, 3);

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-[#FDF8F2]">
      {!hasTeam ? (
        <main className="w-full max-w-xs sm:max-w-lg flex flex-col gap-4 mt-24 text-center">
          <p className="text-lg sm:text-xl font-medium text-black">
            Du er ikke medlem av et lag:
          </p>
          {step === "" && (
            <TeamOptions 
              onCreate={() => setStep("create")}
              onJoin={() => setStep("join")}
            />
          )}
          {step === "create" && (
            <CreateTeamForm 
              teamName={teamName}
              setTeamName={setTeamName}
              onCreateTeam={() => setHasTeam(true)}
              onBack={() => setStep("")}
            />
          )}
          {step === "join" && (
            <JoinTeamForm 
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
              existingTeams={existingTeams}
              onJoinTeam={() => setHasTeam(true)}
              onBack={() => setStep("")}
            />
          )}
        </main>
      ) : (
        <div className="w-full max-w-xs sm:max-w-lg relative">
          {/* Sticky toggle bar */}
          <div className="sticky top-16 z-20 w-72 mx-auto bg-[#FDF8F2]">
            <div className="flex items-center border-4 border-[#1D3E75] rounded-full p-1">
              <button
                className={`w-[50%] px-4 py-3 text-center text-lg font-semibold rounded-full transition-all ${
                  selectedPage === "lagstatistikk" ? "bg-[#1D3E75] text-white" : "text-black"
                }`}
                onClick={() => setSelectedPage("lagstatistikk")}
              >
                Lagstatistikk
              </button>
              <button
                className={`w-[50%] px-4 py-3 text-center text-lg font-semibold rounded-full transition-all ${
                  selectedPage === "medlemmer" ? "bg-[#1D3E75] text-white" : "text-black"
                }`}
                onClick={() => setSelectedPage("medlemmer")}
              >
                Medlemmer
              </button>
            </div>
          </div>

          {selectedPage === "lagstatistikk" ? (
            <main className="mt-28 flex flex-col gap-6 pb-18">
              <div className="p-4 bg-[#FFF8DA] dark:bg-gray-800 rounded-lg text-center">
                <TeamStats teamMembers={teamMembers} />
              </div>
              <div className="mt-3 flex gap-4 overflow-x-auto px-4">
                {topMembers.map((member) => (
                  <div key={member.id} className="flex flex-col items-center bg-[#FFF8DA] p-4 rounded-lg w-32 flex-shrink-0 h-44">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-14 h-14 rounded-full object-cover border-4 border-[#1D3E75]"
                    />
                    <p className="text-md font-semibold text-black mt-2 text-center leading-tight h-10 flex items-center justify-center">
                      {member.name}
                    </p>
                    <div className="mt-auto">
                      <p className="text-lg font-bold text-[#1D3E75]">{member.points} poeng</p>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          ) : (
            // "Medlemmer" page: sticky header and scrollable member list
            <main className="mt-28 pb-18 px-4" style={{ height: "calc(100vh - 16rem)" }}>
              {/* Sticky header for Medlemmer */}
              <div className="sticky top-20 z-10">
                <div className="p-4 bg-[#FFF8DA] dark:bg-gray-800 rounded-lg text-center">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D3E75]">Lag 2</h2>
                  <p className="mt-2 text-lg">Dere er {teamMembers.length} medlemmer</p>
                </div>
              </div>
              {/* Scrollable members list */}
              <div className="mt-4 overflow-y-auto" style={{ maxHeight: "calc(100vh - 21rem)" }}>
                <TeamMembers teamMembers={teamMembers} />
              </div>
            </main>
          )}
        </div>
      )}
    </div>
  );
}
