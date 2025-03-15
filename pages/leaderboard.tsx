import React, { useEffect, useState } from "react";
import Page from "@/components/page";
import Section from "@/components/section";
import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";
import { useUserAuth } from "@/components/userAuth";

interface User {
  userId: number;
  name: string;
  email: string;
  totalScore: number;
}

// Helper to add the correct ordinal suffix
const ordinalSuffix = (n: number): string => {
  const j = n % 10;
  const k = n % 100;
  if (j === 1 && k !== 11) return n + "st";
  if (j === 2 && k !== 12) return n + "nd";
  if (j === 3 && k !== 13) return n + "rd";
  return n + "th";
};

// Returns the ordinal rank for the user at the given index in the sorted array,
// taking into account ties (users with equal score share the same rank)
const getOrdinal = (index: number, sortedUsers: User[]): string => {
  if (index === 0) return ordinalSuffix(1);
  // If the current user has the same score as the previous one,
  // they share the same ordinal ranking.
  if (sortedUsers[index].totalScore === sortedUsers[index - 1].totalScore) {
    return getOrdinal(index - 1, sortedUsers);
  } else {
    // Otherwise, the rank is simply the current index + 1.
    return ordinalSuffix(index + 1);
  }
};

// Style the top three differently (podium styling)
const getBackgroundColor = (index: number) => {
  switch (index) {
    case 0:
      return "bg-yellow-300"; // Gold
    case 1:
      return "bg-gray-300"; // Silver
    case 2:
      return "bg-orange-300"; // Bronze
    default:
      return "bg-gray-800"; // Everyone else
  }
};

const Leaderboard: React.FC = () => {
  const { instance } = useMsal();
  const { userData, loading, error } = useUserAuth();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (!userData?.accessToken) return;

    const fetchUsers = async () => {
      try {
        const response = await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/api/users/all", {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Error fetching users: ${response.statusText}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    };

    fetchUsers();
  }, [userData?.accessToken]);

  // Sort users by totalScore in descending order
  const sortedUsers = [...users].sort((a, b) => b.totalScore - a.totalScore);

  return (
    <Page>
      <Section>
      <AuthenticatedTemplate>
        {loading && <p>Loading user data...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        <div className="mb-6">
          {userData ? (
            <>
              
            </>
          ) : (
            <p>No user authenticated.</p>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Ledertavle</h2>
          {sortedUsers.length > 0 ? (
            <div className="space-y-2">
              {sortedUsers.map((user, index) => (
                <div
                  key={user.userId}
                  className={`flex items-center justify-between p-4 rounded shadow ${getBackgroundColor(
                    index
                  )}`}
                >
                  <span className="font-bold">
                    {getOrdinal(index, sortedUsers)} — {user.name}
                  </span>
                  <span className="font-semibold">{user.totalScore} pts</span>
                </div>
              ))}
            </div>
          ) : (
            <p>No leaderboard data available.</p>
          )}
        </div>
        </AuthenticatedTemplate>
      </Section>
    </Page>
  );
};

export default Leaderboard;
