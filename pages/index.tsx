import DashboardButton from '@/components/buttons/dashboardButton'
import DashboardHeader from '@/components/dashboard/dashboardHeader'
import { UserData, useUserAuth } from '@/components/userAuth';
import Image from 'next/image'
import { useState, useEffect } from 'react';

interface User {
	userId: number;
	name: string;
	email: string;
	totalScore: number;
	companyId: number;
	nickName: string;
  }

const Dashboard = () => {
	const [user, setUser] = useState<User | null>(null);
	const { userData } = useUserAuth();

	useEffect(() => {
		const fetchUser = async () => {
		  if (!userData?.accessToken) return;
	
		  try {
			const response = await fetch(
			  `https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Profile/getUser`,
			  {
				headers: {
				  Authorization: `Bearer ${userData.accessToken}`,
				},
			  }
			);
	
			if (!response.ok) {
			  throw new Error(`Serverfeil: ${response.statusText}`);
			}
	
			const data = await response.json();
			console.log("✅ Brukerdata hentet:", data);
			setUser(data);
		  } catch (error) {
			console.error("❌ Feil ved henting av brukerdata:", error);
		  }
		};
	
		fetchUser();
	  }, [userData?.accessToken]);
	
	  if (!user) return <div>Laster brukerdata...</div>;
	
	return (
		<div className='flex flex-col w-full justify-center'>
			   
			<main className='flex flex-col w-full gap-4 p-4'>
				{/*Profil ----Ersatt med å hente fra API-----*/}
					<DashboardHeader 
						profilePic="/images/Ikon.png"
						name={user.name ?? "Bruker"}
						points={user.totalScore?.toString() ?? "0"}
						/>

				{/*Tre hovedknapper*/}
				<div className='flex flex-col gap-4 pt-4'>
					<DashboardButton
						href="travelForm"
						image="images/RegistrerReise.svg"
						title="Registrer reise"
						description="Samle poeng for å reise bærekraftig til jobb"
					/>

					<DashboardButton
						href="/team"
						image="images/RegistrerReise.svg"
						title="Ditt lag"
						description="Se lagstatistikk, medlemmer..."
					/>

					<DashboardButton
						href="travelForm.tsx"
						image="images/RegistrerReise.svg"
						title="Ukens utfordringer"
						description="Fullfør utfordringer for å samle poeng"
					/>
				</div>
			</main>
			{/*Bakgrunnsbilde*/}
			<footer className="absolute bottom-14 w-full h-40 md:h-80">
				<Image
				src="/images/scenery.png"
				alt="Illustrasjon av landskap med fabrikk og bygninger i bakgrunnen."
				fill
				className="absolute inset-0 -z-10 sm:object-scale-down md:object-cover"
				/>
			</footer>

		</div>
	);
}

export default Dashboard;
