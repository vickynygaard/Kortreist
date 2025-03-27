import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, Users, Trophy, User, Coins, Leaf, ArrowLeft, Bus, Bike, Car, Crown, Flame, Globe, Clock, Settings, X } from "lucide-react";
import { useUserAuth } from "@/components/userAuth";
import Section from "@/components/section";
import Page from "@/components/page";

interface User {
  userId: number;
  name: string;
  email: string;
  nickName: string;
  address: string;
  profilePicture: string;
  totalScore: number;
  companyId: number;
}

export default function Profile() {
  const [selectedStat, setSelectedStat] = useState<"co2" | "money">("co2");
  const [selectedBadge, setSelectedBadge] = useState<{ id: number; name: string; description: string; progress: number; total: number } | null>(null);

  const {userData, loading, error } = useUserAuth();
  const [fullUser, setFullUser] = useState<User | null>(null);
  const [totalCo2Savings, setTotalCo2Savings] = useState<number | null>(null);
  const [totalTravels, setTotalTravels] = useState<number | null>(null);
  const [totalMoney, setTotalMoney] = useState<number | null>(null);

  useEffect(() => {
    if (!userData?.accessToken) return;
  const GetUser = async () => {  
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
        throw new Error(`Feil ved henting av brukerdata: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("✅ Fetched user profile:", data);
      setFullUser(data);
      
    } catch (error) {
      console.error("Feil ved henting av brukerdata:", error);
    }
  };  
  GetUser();
}, [userData?.accessToken]);

  useEffect(() => {
    if (!userData?.accessToken) return;
    const fetchCo2Savings = async () => {
      try {
        const response = await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Profile/totalCo2", {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Error fetching CO₂ savings: " + response.statusText);
        }
        const data = await response.json();
        setTotalCo2Savings(data.totalCo2Savings);
      } catch (err) {
        console.error("Failed to fetch CO₂ savings:", err);
        console.log(userData)
      }
    };
    fetchCo2Savings();
  }, [userData?.accessToken]);
  useEffect(() => {
    if (!userData?.accessToken) return;
    const fetchTotalMoney = async () => {
      try {
        const response = await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Profile/totalMoney", {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Error fetching CO₂ savings: " + response.statusText);
        }
        const data = await response.json();
        setTotalMoney(data.totalMoneySaved);
      } catch (err) {
        console.error("Failed to fetch CO₂ savings:", err);
        console.log(userData)
      }
    };
    fetchTotalMoney();
  }, [userData?.accessToken]);

  useEffect(() => {
    if (!userData?.accessToken) return;
    const fetchTravels = async () => {
      try {
        const response = await fetch("https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Profile/totalTravels", {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Error fetching CO₂ savings: " + response.statusText);
        }
        const data = await response.json();
        setTotalTravels(data.totalTravels);
      } catch (err) {
        console.error("Failed to fetch CO₂ savings:", err);
        console.log(userData)
      }
    };
    fetchTravels();
  }, [userData?.accessToken]);

  const stats = {
    co2: { value: totalCo2Savings, unit: "kg", label: "CO₂ spart" },
    money: { value: totalMoney !== null ? Math.floor(totalMoney) : 0, unit: "kr", label: "Penger spart" },
  };  

  const badges = [
    { id: 1, icon: <Leaf size={24} />, bg: "bg-green-200", name: "Eco Warrior", description: "Use public transport or bike for 10 days.", progress: 7, total: 10 },
    { id: 2, icon: <Globe size={24} />, bg: "bg-yellow-200", name: "Step Master", description: "Walk 10,000 steps a day for a week.", progress: 4, total: 7 },
    { id: 3, icon: <Bus size={24} />, bg: "bg-gray-300", name: "Bus Rider", description: "Take the bus 20 times.", progress: 20, total: 20 },
    { id: 4, icon: <Bike size={24} />, bg: "bg-gray-300", name: "Cyclist", description: "Bike at least 100km in a month.", progress: 50, total: 100 },
    { id: 5, icon: <Car size={24} />, bg: "bg-blue-200", name: "Carpool Hero", description: "Carpool with friends 5 times.", progress: 3, total: 5 },
    { id: 6, icon: <Clock size={24} />, bg: "bg-gray-300", name: "15 Rides", description: "Use any transport 15 times.", progress: 10, total: 15 },
    { id: 7, icon: <Users size={24} />, bg: "bg-gray-300", name: "Community Star", description: "Help organize a community transport event.", progress: 1, total: 1 },
    { id: 8, icon: <Crown size={24} />, bg: "bg-purple-200", name: "Champion", description: "Complete all challenges in a month.", progress: 8, total: 10 },
    { id: 9, icon: <Flame size={24} />, bg: "bg-gray-300", name: "Streak Master", description: "Use eco-friendly transport every day for 30 days.", progress: 22, total: 30 },
    { id: 10, icon: <Trophy size={24} />, bg: "bg-gray-300", name: "Achievement Hunter", description: "Complete 5 challenges.", progress: 5, total: 5 },
  ];

  return (
    <div className="flex flex-col items-center">
            
       {/* Settings Ikon og Min Profil */}     
      <div className="w-full px-4 flex text-center items-center justify-between"> 
        <h1 className="text-2xl font-medium pb-4 text-center">Min Profil</h1>
        {/* Settings Ikon */}
        <Link href="/settings" className="text-black">
          <Settings size={28} strokeWidth={2}/>
        </Link>
      </div>


        {/* Profile info boks */}
        <div className="w-full px-4">
        <div className="w-full bg-customYellow2 p-4 rounded-2xl flex flex-col border-2 border-violet-900">
          {/* Profilbilde og navn */}
          <div className="flex items-center gap-4">
            <img 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile-pictures/${fullUser?.profilePicture || "avatar1.png"}`}
              alt="Default Profile" 
              className="w-16 h-16 rounded-full object-cover border-2 border-customViolet"
            />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">{fullUser?.nickName ?? "Bruker"}</p>
              <span className="text-sm text-gray-600">{fullUser?.name ?? ""}</span>
            </div>

          </div>

          {/* Stats boks */}
          <div className="flex justify-between w-full bg-customViolet rounded-2xl p-3 mt-4 text-gray-600 text-sm">
            <div className="flex-1 text-center text-white">
            <p className="text-lg font-semibold">{fullUser?.totalScore ?? 0}</p>
              <p>Poeng</p>
            </div>
            <div className="flex-1 text-center text-white border-l border-customYellow2">
              <p className="text-lg font-semibold">10</p>
              <p>Utfordringer</p>
            </div>
            <div className="flex-1 text-center border-l text-white border-customYellow2">
              <p className="text-lg font-semibold">{totalTravels}</p>
              <p>Reiser</p>
            </div>
          </div>
        </div>
        </div>

      {/* CO₂ & penger spart */}
      <div className="w-full flex flex-col items-center mt-10 justify-center">
        <div className="relative flex items-center justify-center w-36 h-36">
          <div className="w-full h-full rounded-full border-8 border-customViolet"></div>
          <div className="absolute flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">{stats[selectedStat].value} {stats[selectedStat].unit}</p>
            <p className="text-gray-600 text-sm">{stats[selectedStat].label}</p>
          </div>
        </div>

        {/* Velg mellom - CO₂ & penger */}
        <div className="flex w-[75%] max-w-xs justify-between bg-customYellow2 rounded-2xl mt-4 p-2 border-2 border-violet-900">
          <button 
            className={`flex-1 py-2 rounded-2xl flex items-center justify-center ${selectedStat === "co2" ? "bg-customViolet text-white" : "text-gray-700"}`} 
            onClick={() => setSelectedStat("co2")}
          >
            <Leaf size={24} className="block" />
          </button>

          <button 
            className={`flex-1 py-2 rounded-2xl flex items-center justify-center ${selectedStat === "money" ? "bg-customViolet text-white" : "text-gray-700"}`} 
            onClick={() => setSelectedStat("money")}
          >
            <Coins size={24} className="block" />
          </button>
        </div>
      </div>

      {/* Badges */}
      <div className="w-full px-4 mt-10">
  <div className="bg-customYellow2 p-4 rounded-2xl border-2 border-violet-900">
    <h2 className="text-lg font-semibold mb-3">Badges</h2>

    <div className="grid grid-cols-5 gap-3 place-items-center sm:grid-cols-5">
      {badges.map((badge) => (
        <button
          key={badge.id}
          className={`w-14 h-14 flex items-center justify-center border rounded-lg cursor-pointer ${
            badge.progress >= badge.total
              ? "bg-customViolet text-white"
              : "bg-white/50 text-gray-700"
          }`}
          onClick={() => setSelectedBadge(badge)}
        >
          <span className="flex items-center justify-center w-full h-full">
            {badge.icon}
          </span>
        </button>
      ))}
    </div>
  </div>
</div>


    

      {/* Badge info */}
      {selectedBadge && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80 relative">
            <button className="absolute top-4 right-4 text-gray-600" onClick={() => setSelectedBadge(null)}>
              <X size={24} />
            </button>
            <h3 className="font-semibold text-lg">{selectedBadge.name}</h3>
            <p className="text-gray-600">{selectedBadge.description}</p>
            <div className="w-full bg-gray-300 h-3 rounded-full mt-3">
              <div className="bg-customViolet h-3 rounded-full" style={{ width: `${((selectedBadge.progress / selectedBadge.total) * 100)}%` }}></div>
            </div>
            <p className="text-sm text-gray-700 mt-1">{selectedBadge.progress}/{selectedBadge.total} completed</p>
          </div>
        </div>
      )}
    </div>
  );
}
