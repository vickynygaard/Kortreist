import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, Users, Trophy, User, Coins, Leaf, ArrowLeft, Bus, Bike, Car, Crown, Flame, Globe, Clock, Settings, X } from "lucide-react";
import { useUserAuth } from "@/components/userAuth";

interface User {
  userId: number;
  name: string;
  email: string;
  nickName: string;
  address: string;
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
    money: { value: 1200, unit: "kr", label: "Penger spart" },
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
    <div className="fixed inset-0 overflow-y-auto bg-customYellow2 flex flex-col items-center">
      
<div className="w-full px-4 pt-8 p-4 flex items-center justify-between"> 
  
  <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold">Min Profil</h1>

  {/* Settings Ikon */}
  <Link href="/settings" className="text-black">
    <Settings size={28} strokeWidth={2}/>
  </Link>
</div>


        {/* Profile info boks */}
        <div className="w-full px-4">
  <div className="w-full bg-customYellow p-4 rounded-lg flex flex-col shadow-md">
          {/* Profilbilde og navn */}
          <div className="flex items-center gap-4">
            <img 
              src="https://www.w3schools.com/w3images/avatar2.png" 
              alt="Default Profile" 
              className="w-16 h-16 rounded-full object-cover border-2 border-customViolet"
            />
            <h2 className="text-lg font-semibold">Ola Nordmann</h2>
          </div>

          {/* Stats boks */}
          <div className="flex justify-between w-full bg-customOrange rounded-lg p-3 mt-4 text-gray-600 text-sm">
            <div className="flex-1 text-center">
              <p className="text-lg font-semibold text-black">10 532</p>
              <p>Poeng</p>
            </div>
            <div className="flex-1 text-center border-l border-customYellow">
              <p className="text-lg font-semibold text-black">10</p>
              <p>Utfordringer</p>
            </div>
            <div className="flex-1 text-center border-l border-customYellow">
              <p className="text-lg font-semibold text-black">{totalTravels}</p>
              <p>Reiser</p>
            </div>
          </div>
        </div>
        </div>

      {/* CO₂ & penger spart */}
      <div className="w-full flex flex-col items-center mt-10 flex-1 justify-center">
        <div className="relative flex items-center justify-center w-36 h-36">
          <div className="w-full h-full rounded-full border-8 border-customViolet"></div>
          <div className="absolute flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">{stats[selectedStat].value} {stats[selectedStat].unit}</p>
            <p className="text-gray-600 text-sm">{stats[selectedStat].label}</p>
          </div>
        </div>

        {/* Velg mellom - CO₂ & penger */}
        <div className="flex w-[75%] max-w-xs justify-between bg-customYellow rounded-lg mt-4 p-2">
          <button 
            className={`flex-1 py-2 rounded-md flex items-center justify-center ${selectedStat === "co2" ? "bg-customOrange text-white" : "text-gray-700"}`} 
            onClick={() => setSelectedStat("co2")}
          >
            <Leaf size={24} className="block" />
          </button>

          <button 
            className={`flex-1 py-2 rounded-md flex items-center justify-center ${selectedStat === "money" ? "bg-customOrange text-white" : "text-gray-700"}`} 
            onClick={() => setSelectedStat("money")}
          >
            <Coins size={24} className="block" />
          </button>
        </div>
      </div>

      {/* Badges */}
      <div className="w-full px-4 mt-6 mb-20">
        <h2 className="text-lg font-semibold mb-3">Badges</h2>

        {/* Badge layout */}
        <div className="grid grid-cols-5 gap-3">
        {badges.map((badge) => (
          <button
           key={badge.id}
             className={`w-14 h-14 flex items-center justify-center rounded-lg cursor-pointer ${
              badge.progress >= badge.total ? "bg-customViolet text-white" : "bg-gray-300 text-gray-600"
              }`}
               onClick={() => setSelectedBadge(badge)}
              >
          {badge.icon}
          </button>
         ))}

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
