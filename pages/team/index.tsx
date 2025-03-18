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

  const teamPoints = teamMembers.reduce((total, member) => total + member.points, 0);

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

          {/* Show initial team options */}
          {step === "" && (
            <TeamOptions 
              onCreate={() => setStep("create")}
              onJoin={() => setStep("join")}
            />
          )}

          {/* Show create team form */}
          {step === "create" && (
            <CreateTeamForm 
              teamName={teamName}
              setTeamName={setTeamName}
              onCreateTeam={() => setHasTeam(true)}
              onBack={() => setStep("")}
            />
          )}

          {/* Show join team form */}
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
        <main className="w-full max-w-xs sm:max-w-lg flex flex-col gap-6 mt-20 pb-18">
          {/* Navigation for team view */}
          <div className="fixed top-16 left-1/2 transform -translate-x-1/2 flex items-center border-4 border-[#1D3E75] rounded-full p-1 w-72 mx-auto">
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

          {/* Team info display */}
          <div className="mt-20 p-4 bg-[#FFF8DA] dark:bg-gray-800 rounded-lg text-center">
            {selectedPage === "lagstatistikk" ? (
              <TeamStats teamPoints={teamPoints} />
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D3E75]">Lag 2</h2>
                <br />
                <TeamMembers teamMembers={teamMembers} />
              </>
            )}
          </div>

          {/* Top members list for lagstatistikk page */}
          {selectedPage === "lagstatistikk" && (
            <div className="mt-3 flex gap-4 overflow-x-auto px-4">
              {topMembers.map((member) => (
                <div key={member.id} className="flex flex-col items-center bg-[#FFF8DA] p-4 rounded-lg shadow-md w-32 flex-shrink-0 h-44">
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
          )}
        </main>
      )}
    </div>
  );
}
