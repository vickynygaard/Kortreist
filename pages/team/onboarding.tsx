import { useEffect, useState } from "react";
import TeamOptions from "../../components/teams/TeamOptions";
import CreateTeamForm from "../../components/teams/CreateTeamForm";
import JoinTeamForm from "../../components/teams/JoinTeamForm";
import { useRouter } from "next/router";
import { useUserAuth } from "@/components/userAuth";

type Team = { name: string; teamId: number };

export default function OnboardingPage() {
  const [step, setStep] = useState<"" | "create" | "join">("");
  const [teamName, setTeamName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [existingTeams, setExistingTeams] = useState<Team[]>([]);
  const [loadingTeams, setLoadingTeams] = useState(true);
  const router = useRouter();

  const { userData, loading, error } = useUserAuth();

  useEffect(() => {
    if (!userData?.accessToken) return;

    const fetchTeams = async () => {
      try {
        const response = await fetch(
          `https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Team/company`,
          {
            headers: {
              Authorization: `Bearer ${userData.accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Feil ved henting av lag: ${response.statusText}`);
        }

        const teams = await response.json(); // full team list
        setExistingTeams(teams); // no mapping to strings
    } catch (error) {
        console.error("Feil ved henting av lag:", error);
      } finally {
        setLoadingTeams(false);
      }
    };

    fetchTeams();
  }, [userData?.accessToken]);

  const handleSuccess = () => {
    router.replace("/team/dashboard");
  };

  if (loading || loadingTeams) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Laster inn...</p>
      </div>
    );
  }

  if (error || !userData?.accessToken) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Kunne ikke laste inn. Vennligst logg inn på nytt.</p>
      </div>
    );
  }

  return (
    <main className="fixed inset-0 bg-customYellow2 flex flex-col items-center px-4">
      <div className="w-full max-w-xs sm:max-w-md flex flex-col gap-4 mt-16 text-center">
        <p className="text-lg sm:text-xl font-medium text-black">
          Du er ikke medlem av et lag:
        </p>

        {step === "" && (
          <TeamOptions onCreate={() => setStep("create")} onJoin={() => setStep("join")} />
        )}

        {step === "create" && (
          <CreateTeamForm
            teamName={teamName}
            setTeamName={setTeamName}
            accessToken={userData.accessToken}
            onCreateTeam={handleSuccess}
            onBack={() => setStep("")}
          />
        )}

        {step === "join" && (
          <JoinTeamForm
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            existingTeams={existingTeams}
            accessToken={userData.accessToken}
            onJoinTeam={handleSuccess}
            onBack={() => setStep("")}
          />
        )}
      </div>
    </main>
  );
}
