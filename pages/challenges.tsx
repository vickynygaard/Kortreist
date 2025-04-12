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
  const [showChallengeInfo, setShowChallengeInfo] = useState<boolean>(false);

  // State to track which custom challenge needs confirmation
  const [confirmChallengeId, setConfirmChallengeId] = useState<number | null>(null);

  const handleCustomChallengeCompletion = async (challengeId: number) => {
    setLoadingChallengeId(challengeId);
    const response = await fetch(
      "https://kortreistapi-h7e9d7gsb3bcgwhd.norwayeast-01.azurewebsites.net/api/challenge/custom/complete",
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
      <div className="flex justify-center w-full font-bold text-3xl text-violet-950 pb-6">
        Ukens utfordringer
      </div>

      {challenges?.map((challenge) => (
        <div key={challenge.challengeId} className="w-full">
          <Challenge
            title={challenge.description}
            type={challenge.method}
            current={Math.min(
              challenge.userProgress,
              challenge.type === "Distance"
                ? challenge.requiredDistanceKm!
                : challenge.requiredCount!
            )}
            total={
              challenge.type === "Distance"
                ? challenge.requiredDistanceKm!
                : challenge.requiredCount!
            }
            challengeType={challenge.type}
            challengePoints={challenge.points}
            isCustom={challenge.method === "custom"}
            isCompleted={
              challenge.type === "Distance"
                ? challenge.userProgress >= challenge.requiredDistanceKm!
                : challenge.userProgress >= challenge.requiredCount!
            }
            isLoading={loadingChallengeId === challenge.challengeId}
            onComplete={() => setConfirmChallengeId(challenge.challengeId)}
          />
        </div>
      ))}

    <button 
  className="w-32 h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-lg transition-colors flex items-center justify-center"
  onClick={() => setShowChallengeInfo(prev => !prev)}
    >
      <span>Se detaljer</span>
      <span className="ml-2">{showChallengeInfo ? "▲" : "▼"}</span>
    </button>    
    {showChallengeInfo && (
  <div className="bg-customYellow2 opacity-90 text-customViolet text-base md:text-lg p-3 rounded-lg border border-customViolet w-full text-left">
    <p className="mb-1 font-semibold">Hva betyr fargene?</p>
    <ul className="text-sm list-disc list-inside space-y-1">
      <li>
        <span className="text-orange-500 font-medium">Oransje ramme</span>: Spesialutfordring - må fullføres manuelt.
      </li>
      <li>
        <span className="text-blue-700 font-medium">Blå ramme</span>: Standardutfordring - spores automatisk.
      </li>
      <li>
        <span className="text-green-500 font-medium">Grønn ramme</span>: Avstandsutfordring - spores automatisk basert på kilometer.
      </li>
    </ul>
  </div>
)}

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
