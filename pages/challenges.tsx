import React, { useEffect, useState } from "react";
import Page from '@/components/page'
import Section from '@/components/section'
import { useUserAuth } from "@/components/userAuth";
import ProgressBar from "@/components/progressBar";

interface Challenge {
	challengeId: number;
	description: string;
	points: number;
	maxAttempts: number;
  }
  
interface UserChallenge {
  challengeId: number;
  attemptCount: number;
}

const Challenges: React.FC = () => {
	const { userData } = useUserAuth();
	const [challenges, setChallenges] = useState<Challenge[]>([]);
	const [userChallenges, setUserChallenges] = useState<UserChallenge[]>([]);
	const [message, setMessage] = useState<string>("");

	const [testDateIndex, setTestDateIndex] = useState<number>(0);
	
	// Dates for testing only
	const testDates = [
		
			"2025-03-13T00:00:00.000Z", // Week 1
			"2025-03-20T00:00:00.000Z", // Week 2
			"2025-03-28T00:00:00.000Z", // Week 3
			"2025-04-03T00:00:00.000Z", // Week 4
			"2025-04-10T00:00:00.000Z", // Week 5
			"2025-04-17T00:00:00.000Z", // Week 6
			"2025-04-24T00:00:00.000Z", // Week 7
			"2025-05-01T00:00:00.000Z", // Week 8
			"2025-05-08T00:00:00.000Z", // Week 9
			"2025-05-15T00:00:00.000Z",  // Week 10
			"2025-05-25T00:00:00.000Z"  // Week 10
		  
	];
  
	const fetchUserChallenges = async () => {
		if (!userData?.accessToken) return;
  
	  const response = await fetch("http://localhost:5279/api/challenge/user", {
		headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Error fetching user profile: ${response.statusText}`);
        }
        const data = await response.json();
	  setUserChallenges(data);
	};
  
	const fetchChallenges = async () => {
	if (!userData?.accessToken) return;

	const testDate = testDates[testDateIndex];
    const response = await fetch(`http://localhost:5279/api/challenge/current?testDate=${testDate}`, {
		headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        });
		if (!response.ok) {
			throw new Error(`Error fetching user challenges: ${response.statusText}`);
		  }
	  const data = await response.json();
	  setChallenges(data);
	};
  
	useEffect(() => {
	  fetchChallenges();
	  fetchUserChallenges();
	}, [userData?.accessToken]);

	const handleCompleteChallenge = async (challenge: Challenge) => {
		if (!userData?.accessToken) return;
	  
		const response = await fetch("http://localhost:5279/api/challenge/complete", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${userData.accessToken}`,
		  },
		  body: JSON.stringify({ Email: userData.email, ChallengeId: challenge.challengeId }),
		});
	  
		if (response.ok) {
		  const data = await response.json();
		  if (data.message === "Challenge fully completed! Points awarded.") {
			setMessage("Congratulations, you've completed the challenge and earned points!");
		  } else {
			setMessage("Your attempt has been recorded. Keep trying to complete the challenge!");
		  }		  await fetchUserChallenges(); 
		} else {
		  const errorData = await response.json();
		  setMessage(errorData.message || "Error completing challenge.");
		}
	  };
	  

  const getAttemptCount = (challengeId: number): number => {
    const record = userChallenges.find((uc) => uc.challengeId === challengeId);
    return record ? record.attemptCount : 0;
  };

  const handleNextTestDate = () => {
    setTestDateIndex((prevIndex) => (prevIndex + 1) % testDates.length);
	fetchChallenges();
  };

  return (
	<Page>
		<Section>
    <div>
	<button onClick={handleNextTestDate} className="mb-4 bg-green-500 text-white px-4 py-2 rounded">
            Next Test Date (Current: {testDates[testDateIndex]})
          </button>
      <h2>Available Challenges</h2>
      {challenges.map((challenge) => {
        const attempts = getAttemptCount(challenge.challengeId);
        const isCompleted = attempts >= challenge.maxAttempts;
		const progressValue = (attempts / challenge.maxAttempts) * 100;
        return (
			<div key={challenge.challengeId} className="challenge-card">
			  <p>{challenge.description}</p>
			  <p>
				id: {challenge.challengeId} | Points: {challenge.points} | Attempts: {attempts}/{challenge.maxAttempts}
			  </p>
			  <ProgressBar
				progress={progressValue}
				progressText={`${attempts} / ${challenge.maxAttempts} attempts`}
			  />
			  <button disabled={isCompleted} onClick={() => handleCompleteChallenge(challenge)}>
				{isCompleted ? "Max attempts reached" : "Complete Challenge"}
			  </button>
			</div>
		  );
      })}
      {message && <p>{message}</p>}
    </div>
	</Section>
	</Page>
  );
};

export default Challenges;
