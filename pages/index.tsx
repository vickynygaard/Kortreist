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

  // Get cached index data from localStorage if available
  let fallbackUser: User | undefined;
  if (typeof window !== 'undefined') {
    const cached = localStorage.getItem("indexData");
    if (cached) {
      try {
        fallbackUser = JSON.parse(cached);
      } catch (error) {
        console.error("Failed to parse cached index data:", error);
      }
    }
  }

  const { data: user, isLoading: isLoading, error } = useApi<User>(
    "/api/Profile/getUser",
    userData?.accessToken,
    { fallbackData: fallbackUser, refreshInterval: 30000, enabled: !!userData?.accessToken }
  );

  // Save fresh data to localStorage when available
  useEffect(() => {
    if (user && typeof window !== 'undefined') {
      localStorage.setItem("indexData", JSON.stringify(user));
    }
  }, [user]);
  
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
          profilePic={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatars/${user?.profilePicture || "Avatar1.png"}`}
          name={user?.name ?? "Bruker"}
          points={user?.totalScore?.toString() ?? "0"}
        />
        <div className="flex flex-col gap-4 pt-4">
          <DashboardButton
            href="travelForm"
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/RegistrerReise.svg`}
            title="Registrer reise"
            description="Samle poeng for å reise bærekraftig til og fra jobb"
          />
          <DashboardButton
            href="/team"
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/RegistrerReise.svg`}
            title="Ditt lag"
            description="Se en oversikt over lagstatistikk og medlemmer"
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
