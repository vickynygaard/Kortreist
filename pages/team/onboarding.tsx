import { useState } from "react";
import TeamOptions from "../../components/teams/TeamOptions";
import CreateTeamForm from "../../components/teams/CreateTeamForm";
import JoinTeamForm from "../../components/teams/JoinTeamForm";
import { useRouter } from "next/router";
import { useUserAuth } from "@/components/userAuth";
import { useApi } from "@/hooks/useApi";
import CustomSpinner from "@/components/dashboard/customSpinner";

type Team = { 
  name: string; 
  teamId: number; 
  memberCount: number;
};

export default function OnboardingPage() {
  const [step, setStep] = useState<"" | "create" | "join">("");
  const [teamName, setTeamName] = useState("");
  const router = useRouter();
  const { userData, loading, error } = useUserAuth();


    const { data: existingTeams, isLoading: teamsLoading, error: teamsError } = useApi<Team[]>(
      "/api/Team/company",
      userData?.accessToken,
      { refreshInterval: 30000, enabled: !!userData?.accessToken }
    );

  // Combine loading states
  if (loading || teamsLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CustomSpinner />
      </div>
    );
  }

  if (error || teamsError || !userData?.accessToken) {
      return (
        <div className="flex justify-center items-center h-screen">
          <p>Her skjedde det noe galt, prøv å laste inn på nytt</p>
        </div>
      );
  }

  const handleSuccess = () => {
    router.replace("/team/dashboard");
  };

  return (
    <main className="flex flex-col items-center px-4">
      <div className="w-full text-center text-2xl font-medium pb-4">
        <h1>Velg et Lag</h1>
      </div>

      <div className="w-full max-w-xs sm:max-w-md flex flex-col gap-4 mt-6 text-center">
        <p className="text-lg sm:text-xl font-medium text-black">
          Du er ikke medlem av et lag:
        </p>

        {step === "" && (
        <>
          {existingTeams?.length === 0 ? (
            <p>Det finnes ingen lag ennå. Du kan være den første til å lage ett!</p>
          ) : (
            <p>Velg et lag å bli med i, eller opprett ditt eget.</p>
          )}
          <TeamOptions onCreate={() => setStep("create")} />
        </>
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
            
        <JoinTeamForm
          existingTeams={existingTeams || []}
          accessToken={userData.accessToken}
          onJoinTeam={handleSuccess}
          onBack={() => setStep("")}
        />
      </div>
    </main>
  );
}
