import React, { useState } from "react";
import { useRouter } from "next/router";
import { useUserAuth } from "@/components/userAuth";
import ReturnButton from "@/components/buttons/returnButton";
import Challenge from "@/components/dashboard/challenge";
import CustomSpinner from "@/components/dashboard/customSpinner";
import { useApi } from "@/hooks/useApi";
import ConfirmationModal from "@/components/modalConfirm";

interface UserChallenge {
  challengeId: number;
  description: string;
  requiredCount?: number; // For attempt-based or custom challenges
  requiredDistanceKm?: number; // For distance-based challenges
  method: "cycling" | "walking" | "bus" | "car" | "custom";
  type: "Standard" | "Distance" | "Custom";
  points: number;
  userProgress: number; 
}

const ChallengePage: React.FC = () => {
  const router = useRouter();
  const { userData } = useUserAuth();

    const { data: challenges, isLoading, error, mutate } = useApi<UserChallenge[]>(
      "/api/challenge/current/user",
      userData?.accessToken,
      { refreshInterval: 30000, enabled: !!userData?.accessToken }
    );

  const [loadingChallengeId, setLoadingChallengeId] = useState<number | null>(null);

  // State to track which custom challenge needs confirmation
  const [confirmChallengeId, setConfirmChallengeId] = useState<number | null>(null);

  const handleCustomChallengeCompletion = async (challengeId: number) => {
    setLoadingChallengeId(challengeId);
    const response = await fetch(
      "https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/challenge/custom/complete",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ challengeId }),
      }
    );

    if (!response.ok) {
      console.log("Error completing custom challenge:", response);
  };

    if (response.ok) {
      // Refresh challenge data using mutate
      await mutate();
    } else {
        return (
          <div className="flex justify-center items-center h-screen">
            <p>Her skjedde det noe galt, prøv å laste inn på nytt</p>
          </div>
        );
    }
    setLoadingChallengeId(null);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CustomSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Her skjedde det noe galt, prøv å laste inn på nytt</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <header className="self-start">
        <ReturnButton onClick={() => router.back()} />
      </header>
      <div className="flex justify-center w-full font-bold font-mono text-3xl text-violet-950 pb-6">
        Ukens utfordringer
      </div>

      {challenges?.map((challenge) => (
        <div key={challenge.challengeId} className="w-full">
          <Challenge
            title={challenge.description}
            type={challenge.method}
            current={
              Math.min(
                challenge.userProgress,
                challenge.type === "Distance"
                  ? challenge.requiredDistanceKm!
                  : challenge.requiredCount!
              )
            }
            total={
              challenge.type === "Distance"
                ? challenge.requiredDistanceKm!
                : challenge.requiredCount!
            }
            challengeType={challenge.type}
            challengePoints={challenge.points}
          />
          {challenge.method === "custom" &&
            challenge.requiredCount !== undefined &&
            challenge.userProgress < challenge.requiredCount && (
              <button
                disabled={loadingChallengeId === challenge.challengeId}
                className="mt-2 px-4 py-2 rounded bg-violet-700 text-white hover:bg-violet-800"
                onClick={() => setConfirmChallengeId(challenge.challengeId)}
              >
                {loadingChallengeId === challenge.challengeId
                  ? "Registrerer..."
                  : "Fullfør aktivitet"}
              </button>
            )}
        </div>
      ))}

      {/* Confirm complete */}
      {confirmChallengeId !== null && (
        <ConfirmationModal
          message="Er du sikker på at du vil fullføre denne aktiviteten?"
          onConfirm={() => {
            handleCustomChallengeCompletion(confirmChallengeId);
            setConfirmChallengeId(null);
          }}
          onCancel={() => setConfirmChallengeId(null)}
          confirmColor="green"
        />
      )}
    </div>
  );
};

export default ChallengePage;
