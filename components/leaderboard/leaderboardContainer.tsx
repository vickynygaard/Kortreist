import { useEffect, useState } from 'react';
import Podium from './podium';
import LeaderboardItem from './leaderboardItem';
import { useUserAuth } from '../userAuth';

interface User {
  rank: number;
  userId: number;
  nickName: string;
  totalScore: number;
  profilePicture: string;
}

const LeaderboardContainer = () => {
  const [topThree, setTopThree] = useState<User[]>([]);
  const [restOfBoard, setRestOfBoard] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const { userData, loading, error } = useUserAuth();  

  useEffect(() => {
    if (!userData?.accessToken) return;

    const fetchUsers = async () => {
      const podiumWithRank: (User & { rank: number })[] = [];
      try {
        const response = await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/users/all", {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Error fetching users: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        const sorted = [...data].sort((a, b) => b.totalScore - a.totalScore);
        
        let currentRank = 1;

        for (let i = 0; i < sorted.length && podiumWithRank.length < 3; i++) {
          if (
            i > 0 &&
            sorted[i].totalScore === sorted[i - 1].totalScore
          ) {
            // same rank as previous
            podiumWithRank.push({ ...sorted[i], rank: podiumWithRank[podiumWithRank.length - 1].rank });
          } else {
            // new unique rank
            podiumWithRank.push({ ...sorted[i], rank: currentRank });
          }
          currentRank++;
        }

        setTopThree(podiumWithRank);
        setRestOfBoard(sorted.slice(podiumWithRank.length));
        
        setUsers(data);
        console.log(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    };

    fetchUsers();
  }, [userData?.accessToken]);

  const renderPodium = (rank: number) => {
    const user = topThree.find((u) => u.rank === rank);
    if (!user) return null;
  
    return (
      <Podium {...user} score={user.totalScore} profilePicture={user.profilePicture} />
    );
  };

  return (
    <div className="flex flex-col">
        {/*Pall: 1., 2., 3. plass*/}
        <div className="flex justify-center items-end gap-6 mt-10">
          {/* Silver - left */}
          {renderPodium(2)}

          {/* Gold - middle */}
          {renderPodium(1)}

          {/* Bronze - right */}
          {renderPodium(3)}
        </div>


          {/*Resten av ledertavlen*/}
          <div className="mt-4 w-full rounded-t-lg bg-customYellow2/50 backdrop-blur-md">
          {restOfBoard.map((user, index) => (
          <LeaderboardItem
            key={user.userId}
            rank={index + topThree.length + 1} // start after podium
            nickName={user.nickName}
            score={user.totalScore}
            profilePicture={user.profilePicture}
          />
        ))}
          
          </div>
    </div>
  );
};

export default LeaderboardContainer;
