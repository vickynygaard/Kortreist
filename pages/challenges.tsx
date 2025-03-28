import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUserAuth } from "@/components/userAuth";
import ReturnButton from "@/components/buttons/returnButton";
import Challenge from "../components/dashboard/challenge";
import { useUserProfile } from "@/components/UserProfileContext";

interface UserChallenge {
    challengeId: number;
    description: string;
    requiredCount?: number; // For attempt-based or custom challenges
    requiredDistanceKm?: number; // For distance-based challenges
    method: "cycling" | "walking" | "bus" | "car" | "custom";
    type: "Standard" | "Distance" | "Custom";
    points: number;
    userProgress: number; // Could represent either count or km
  }
  

const ChallengePage: React.FC = () => {
  const router = useRouter();
  const { userData } = useUserAuth();
  const { profile, loading, error } = useUserProfile();

  const [challenges, setChallenges] = useState<UserChallenge[]>([]);
  const [loadingChallengeId, setLoadingChallengeId] = useState<number | null>(null);

  const fetchUserChallenges = async () => {
    if (!userData?.accessToken) return;

    const response = await fetch(
      "https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/challenge/current/user",
      { headers: { Authorization: `Bearer ${userData.accessToken}` } }
    );

    if (response.ok) {
      const data: UserChallenge[] = await response.json();
      console.log("Fetched challenges:", data);
      setChallenges(data);
    } else {
      console.error("Failed to fetch challenges:", response.status);
    }
  };

  useEffect(() => {
    fetchUserChallenges();
  }, [userData?.accessToken]);

  const handleCustomChallengeCompletion = async (challengeId: number) => {
    setLoadingChallengeId(challengeId);
    const response = await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/challenge/custom/complete", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userData?.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ challengeId }),
    });

    if (response.ok) {
      await fetchUserChallenges(); // refresh progress
    } else {
      console.error("Could not submit custom challenge:", await response.text());
    }
    setLoadingChallengeId(null);
  };

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <header className="self-start">
        <ReturnButton onClick={() => router.back()} />
      </header>
      <div className="flex justify-center w-full font-bold font-mono text-3xl text-violet-950 pb-6">
        Ukens utfordringer
      </div>

      {challenges.map((challenge) => (
        <div key={challenge.challengeId} className="w-full">
            <Challenge
                title={challenge.description}
                type={challenge.method}
                current={Math.min(challenge.userProgress, challenge.type === "Distance" ? challenge.requiredDistanceKm! : challenge.requiredCount!)}
                total={challenge.type === "Distance" ? challenge.requiredDistanceKm! : challenge.requiredCount!}
                challengeType={challenge.type}
            />
          {challenge.method === "custom" &&
            challenge.requiredCount !== undefined &&
            challenge.userProgress < challenge.requiredCount && (
              <button
                disabled={loadingChallengeId === challenge.challengeId}
                className="mt-2 px-4 py-2 rounded bg-violet-700 text-white hover:bg-violet-800"
                onClick={() => handleCustomChallengeCompletion(challenge.challengeId)}
              >
                {loadingChallengeId === challenge.challengeId ? "Registrerer..." : "Fullfør aktivitet"}
              </button>
            )}
        </div>
      ))}
    </div>
  );
};

export default ChallengePage;
