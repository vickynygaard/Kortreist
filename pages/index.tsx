import DashboardButton from '@/components/buttons/dashboardButton';
import DashboardHeader from '@/components/dashboard/dashboardHeader';
import { useUserAuth } from '@/components/userAuth';
import CustomSpinner from '@/components/dashboard/customSpinner';
import { useApi } from '@/hooks/useApi';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { mutate } from 'swr';
import { fetcher } from '@/services/api';
import { usePrefetchMainRoutes } from '@/services/preFetch';
import { useDelayedLoading } from '@/services/useDelayedLoading';
import { motion, AnimatePresence } from 'framer-motion';

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

  const [earnedPoints, setEarnedPoints] = useState<number | null>(null);

  useEffect(() => {
    if (user && typeof window !== 'undefined') {
      localStorage.setItem("indexData", JSON.stringify(user));
  
      const storedPoints = sessionStorage.getItem("pointsEarned");
      if (storedPoints) {
        setEarnedPoints(Number(storedPoints));
        sessionStorage.removeItem("pointsEarned");
  
        // Auto hide after 4 seconds
        setTimeout(() => setEarnedPoints(null), 4000);
      }
    }
  }, [user]);
  
  return (
    <div className="flex flex-col w-full justify-between">
      <AnimatePresence>
        {earnedPoints !== null && (
          <motion.div
          className="absolute top-4 left-0 right-0 mx-auto w-fit z-50 bg-yellow-100 border border-yellow-500 text-yellow-900 
          px-6 py-3 rounded-xl shadow-md text-base font-semibold flex items-center gap-2 pointer-events-none pt-safe"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          🎉 <span className="text-black">+{earnedPoints} poeng!</span>
        </motion.div>
        )}
      </AnimatePresence>
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
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/TeamIcon.png`}
            title="Ditt lag"
            description="Se en oversikt over lagstatistikk og medlemmer"
          />
          <DashboardButton
            href="challenges"
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/ChallengeIcon.png`}
            title="Ukens utfordringer"
            description="Fullfør utfordringer for å samle poeng"
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
