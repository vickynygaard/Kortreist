import DashboardButton from '@/components/buttons/dashboardButton';
import DashboardHeader from '@/components/dashboard/dashboardHeader';
import { useUserAuth } from '@/components/userAuth';
import CustomSpinner from '@/components/dashboard/customSpinner';
import { useApi } from '@/hooks/useApi';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { mutate } from 'swr';
import { fetcher } from '@/services/api';
import { usePrefetchMainRoutes } from '@/services/preFetch';
import { useDelayedLoading } from '@/services/useDelayedLoading';

interface User {
  userId: number;
  name: string;
  email: string;
  totalScore: number;
  companyId: number;
  nickName: string;
  profilePicture: string;
}

const Dashboard = () => {
  const { userData } = useUserAuth();
  
  usePrefetchMainRoutes();

  const endpoint = userData?.accessToken ? "/api/Profile/getUser" : null;
  const { data: user, isLoading, error } = useApi<User>(
    endpoint,
    userData?.accessToken,
    { refreshInterval: 30000 }
  );

  const showSpinner = useDelayedLoading();

  if (isLoading && showSpinner) {
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
    <div className="flex flex-col w-full justify-between">
      <main className="flex flex-col w-full gap-4 p-4">
        <DashboardHeader 
          profilePic={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile-pictures/${user?.profilePicture || "avatar1.png"}`}
          name={user?.name ?? "Bruker"}
          points={user?.totalScore?.toString() ?? "0"}
        />
        <div className="flex flex-col gap-4 pt-4">
          <DashboardButton
            href="travelForm"
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/RegistrerReise.svg`}
            title="Registrer reise"
            description="Samle poeng for å reise bærekraftig til jobb"
          />
          <DashboardButton
            href="/team"
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/RegistrerReise.svg`}
            title="Ditt lag"
            description="Se lagstatistikk, medlemmer..."
          />
          <DashboardButton
            href="challenges"
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/RegistrerReise.svg`}
            title="Ukens utfordringer"
            description="Fullfør utfordringer for å samle poeng"
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
