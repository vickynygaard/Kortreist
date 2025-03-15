import React, { useEffect, useState } from "react";
import Page from "@/components/page";
import Section from "@/components/section";
import { useUserAuth } from "@/components/userAuth";

interface Member {
	userId: number;
	name: string;
	email: string;
  }
  
  interface Team {
	teamId: number;
	name: string;
	companyId: number;
	members: Member[]; 
  }

interface User {
	userId: number;
	name: string;
	email: string;
	totalScore: number;
	companyId: number;
	teamId: number;
  }

const TeamComponent: React.FC = () => {
  const { userData, loading, error } = useUserAuth();
  const [teams, setTeams] = useState<Team[]>([]);
  const [newTeamName, setNewTeamName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [fullUser, setFullUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  // Fetch teams for the user's company
  const fetchTeams = async () => {
    if (!userData?.accessToken) return;
    try {
      const response = await fetch("http://localhost:5279/api/team/company", {
        headers: {
          Authorization: `Bearer ${userData.accessToken}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setTeams(data);
      } else {
        setMessage("Error fetching teams.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error fetching teams.");
    }
  };

  // Create a new team
  const createTeam = async () => {
    if (!userData?.accessToken) return;
    if (!newTeamName) {
      setMessage("Team name is required.");
      return;
    }

    const payload = {
      name: newTeamName,
      companyId: fullUser?.companyId, 
    };

	try {
		const response = await fetch("http://localhost:5279/api/Team/upsert", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${userData.accessToken}`,
		  },
		  body: JSON.stringify(payload),
		});
		if (response.ok) {
		  setMessage("Team created successfully.");
		  setNewTeamName("");
		  fetchTeams(); // Refresh the list
		} else {
		  setMessage("Error creating team: " );
		}
	  } catch (err) {
		console.error("Fetch error:", err);
		setMessage("Error creating team.");
	  }
	  
  };

  const fetchFullUser = async () => {
	if (!userData?.accessToken) return;
	
	try {
	  const response = await fetch("http://localhost:5279/api/Profile/getUser", {
		headers: {
		  Authorization: `Bearer ${userData.accessToken}`,
		},
	  });
  
	  if (!response.ok) {
		throw new Error(`Error fetching user profile: ${response.statusText}`);
	  }
  
	  const data = await response.json();
	  setFullUser(data);  
	} catch (err) {
	  console.error("Failed to fetch user profile:", err);
	} finally {
	  setLoadingUser(false); 
	}
  };
  
  
  // Call fetchFullUser when component loads
  useEffect(() => {
	fetchFullUser();
  }, [userData?.accessToken]);
  

  const joinTeam = async (teamId: number) => {
	if (!userData?.accessToken) return;
	try {
	  const response = await fetch("http://localhost:5279/api/team/join", {
		method: "PUT",
		headers: {
		  "Content-Type": "application/json",
		  Authorization: `Bearer ${userData.accessToken}`,
		},
		body: JSON.stringify({
		  email: userData.email,
		  teamId: teamId,
		}),
	  });
  
	  if (response.ok) {
		setMessage("Joined team successfully.");
		await fetchFullUser(); 
		await fetchMyTeam();
	  } else {
		setMessage("Error joining team.");
	  }
	} catch (err) {
	  console.error(err);
	  setMessage("Error joining team.");
	}
  };
  
  

  const fetchMyTeam = async () => {
	if (!userData?.accessToken) return;
	try {
	  const response = await fetch("http://localhost:5279/api/team/myteam", {
		headers: {
		  Authorization: `Bearer ${userData.accessToken}`,
		},
	  });
  
	  if (!response.ok) {
		setMessage("Error fetching your team.");
		return;
	  }
  
	  const data = await response.json();
	
	  setTeams([{
		teamId: data.teamId,
		name: data.name,
		companyId: fullUser?.companyId ?? 0, 
		members: data.members || []  
	  }]);
  
	} catch (err) {
	  console.error(err);
	  setMessage("Error fetching your team.");
	}
  };
  

  useEffect(() => {
	if (!userData?.accessToken) return;
  
	const fetchData = async () => {
	  await fetchFullUser();  
  
	  if (fullUser?.teamId) {
		await fetchMyTeam();  
	  } else {
		await fetchTeams();
	  }
	};
  
	fetchData();
  }, [userData, fullUser?.teamId]); 
  

  
  const leaveTeam = async () => {
	if (!userData?.accessToken) return;
	try {
	  const response = await fetch("http://localhost:5279/api/team/leave", {
		method: "PUT",
		headers: {
		  "Content-Type": "application/json",
		  Authorization: `Bearer ${userData.accessToken}`,
		},
	  });
  
	  if (response.ok) {
		setMessage("Left the team successfully.");
		await fetchFullUser();  
		await fetchTeams();      
	  } else {
		setMessage("Error leaving team.");
	  }
	} catch (err) {
	  console.error(err);
	  setMessage("Error leaving team.");
	}
  };
  
  

  
  

  return (
	<Page>
	  <Section>
		{loadingUser ? (
		  
		  <p>Loading your team...</p>
		) : fullUser?.teamId ? (
		  
		  <div>
			<h3>Your Team: <strong>{teams[0]?.name || "Unknown"}</strong></h3>
  
			<h4>Team Members:</h4>
			<ul>
			  {teams[0]?.members?.map(member => (
				<li key={member.userId}>{member.name} ({member.email})</li>
			  ))}
			</ul>
  
			<button className="bg-red-500 text-white px-4 py-2 rounded" onClick={leaveTeam}>
			  Leave Team
			</button>
		  </div>
		) : (
		  
		  <div>
			<h3>Available Teams in Your Company</h3>
			{teams.length > 0 ? (
			  <ul>
				{teams.map((team) => (
				  <li key={team.teamId} className="mb-2">
					{team.name}{" "}
					<button
					  className="ml-4 bg-blue-500 text-white px-2 py-1 rounded"
					  onClick={() => joinTeam(team.teamId)}
					>
					  Join
					</button>
				  </li>
				))}
			  </ul>
			) : (
			  <p>No teams available.</p>
			)}
  
			<h3 className="mt-6">Create a New Team</h3>
			<input
			  type="text"
			  value={newTeamName}
			  onChange={(e) => setNewTeamName(e.target.value)}
			  placeholder="Enter team name"
			  className="border p-2 rounded"
			/>
			<button className="ml-2 bg-green-500 text-white px-4 py-2 rounded" onClick={createTeam}>
			  Create Team
			</button>
		  </div>
		)}
	  </Section>
	</Page>
  );
  
};

export default TeamComponent;
