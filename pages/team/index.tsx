import { useState } from "react";
import { PlusCircle, LogIn } from "lucide-react";

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

          {step === "" && (
            <div className="flex gap-4">
              <button 
                onClick={() => setStep("create")} 
                className="flex-1 py-3 bg-blue-500 text-white rounded-md flex items-center justify-center gap-2 hover:bg-blue-600"
              >
                <PlusCircle size={20} />
                Opprett et lag
              </button>

              <button 
                onClick={() => setStep("join")} 
                className="flex-1 py-3 bg-green-500 text-white rounded-md flex items-center justify-center gap-2 hover:bg-green-600"
              >
                <LogIn size={20} />
                Bli med i et lag
              </button>
            </div>
          )}

          {step === "create" && (
            <div className="flex flex-col gap-4 mt-4">
              <input 
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Skriv inn lagnavn..."
                className="p-2 border border-gray-400 rounded-md"
              />
              <button 
                onClick={() => setHasTeam(true)}
                disabled={!teamName.trim()}
                className={`py-3 rounded-md text-white font-medium ${
                  teamName.trim() ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Opprett lag
              </button>
              <button 
                onClick={() => setStep("")}
                className="text-gray-600 hover:text-black"
              >
                Tilbake
              </button>
            </div>
          )}

          {step === "join" && (
            <div className="flex flex-col gap-4 mt-4">
              <select 
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="p-2 border border-gray-400 rounded-md"
              >
                <option value="">Velg et lag...</option>
                {existingTeams.map((team) => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
              <button 
                onClick={() => setHasTeam(true)}
                disabled={!selectedTeam}
                className={`py-3 rounded-md text-white font-medium ${
                  selectedTeam ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Bli med i laget
              </button>
              <button 
                onClick={() => setStep("")}
                className="text-gray-600 hover:text-black"
              >
                Tilbake
              </button>
            </div>
          )}
        </main>
      ) : (
        <main className="w-full max-w-xs sm:max-w-lg flex flex-col gap-6 mt-20 pb-18"> 
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

          <div className="mt-20 p-4 bg-[#FFF8DA] dark:bg-gray-800 rounded-lg text-center">
            {selectedPage === "lagstatistikk" ? (
              <>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D3E75]">Lag 2</h2>
                <br/>
                <p className="text-xl text-black font-semibold dark:text-gray-300">
                  Gratulerer, ditt lag har opptjent
                </p>

                <p className="text-3xl font-bold text-[#1D3E75] mt-2">
                  {teamPoints} poeng
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D3E75]">Medlemmer</h2>
                <br/>
                <div className="flex flex-col gap-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex items-center gap-4 p-3 bg-white rounded-md shadow-md">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <p className="text-lg font-medium text-black">{member.name}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {selectedPage === "lagstatistikk" && (
            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold text-black">Ukens beste lagspillere</h3>
              <div className="mt-3 flex gap-4 overflow-x-auto px-4">
                {topMembers.map((member) => (
                  <div key={member.id} className="flex flex-col items-center bg-[#FFF8DA] p-4 rounded-lg shadow-md w-32 flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-14 h-14 rounded-full object-cover border-4 border-[#1D3E75]"
                    />
                    <p className="text-md font-semibold text-black mt-2">{member.name}</p>
                    <p className="text-lg font-bold text-[#1D3E75]">{member.points} poeng</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      )}
    </div>
  );
}
