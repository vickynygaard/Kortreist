import DashboardButton from '@/components/buttons/dashboardButton';
import DashboardHeader from '@/components/dashboard/dashboardHeader';
import Footer from '@/components/footer';
import { useUserAuth } from '@/components/userAuth';
import CustomSpinner from '@/components/dashboard/customSpinner';
import { useApi } from '@/hooks/useApi';

interface User {
  userId: number;
  name: string;
  email: string;
  totalScore: number;
  companyId: number;
  nickName: string;
}

const Dashboard = () => {
  const { userData } = useUserAuth();
  
  const endpoint = userData?.accessToken ? "/api/Profile/getUser" : null;
  
  const { data: user, isLoading, error } = useApi<User>(
    endpoint,
    userData?.accessToken,
    { refreshInterval: 30000 }
  );

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
    <div className="flex flex-col w-full justify-between">
      <main className="flex flex-col w-full gap-4 p-4">
        <DashboardHeader 
          profilePic={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Ikon.png`}
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
      <Footer />
    </div>
  );
};

export default Dashboard;
