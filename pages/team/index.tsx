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
    <div className="fixed inset-0 bg-customYellow2 flex flex-col items-center px-4 pt-4 pb-24">
      {!hasTeam ? (
        <main className="w-full max-w-xs sm:max-w-md flex flex-col gap-4 mt-16 text-center">
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
        <div className="w-full max-w-xs sm:max-w-md relative pt-12">
          {/* Bar mellom medlemmer og stats */}
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
                <TeamStats teamMembers={teamMembers} />
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
                      src={member.image}
                      alt={member.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-customViolet"
                    />
                    <p className="text-md font-semibold text-black mt-2 text-center leading-tight h-10 flex items-center justify-center">
                      {member.name}
                    </p>
                    <div className="mt-auto">
                      <p className="text-lg font-bold text-customViolet">
                        {member.points} poeng
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          ) : (
            <main className="mt-8 w-full">
              <div className="p-4 bg-customYellow rounded-lg text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-customViolet">
                  Lagnavn
                </h2>
                <p className="mt-2 text-xl text-black font-semibold">
                  Dere er {teamMembers.length} medlemmer
                </p>
              </div>

              {/* Liste medlemmer */}
              <div className="mt-4 overflow-y-auto pb-8" style={{ maxHeight: "calc(100vh - 20rem)" }}>
                <TeamMembers teamMembers={teamMembers} />
              </div>
            </main>
          )}
        </div>
      )}
    </div>
  );
}
