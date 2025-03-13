import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Home, Users, Trophy, User, Coins, Leaf, ArrowLeft } from "lucide-react";

export default function Profile() {
  const [selectedStat, setSelectedStat] = useState<"co2" | "money">("co2");
 // Default: CO₂ saved

  // Dummy data (replace with actual database values)
  const stats = {
    co2: { value: 45, unit: "kg", label: "CO₂ spart" },
    money: { value: 1200, unit: "kr", label: "Penger spart" },
  };

  return (
    <div className="min-h-screen bg-custom flex flex-col items-center">
      
      {/* Top Section */}
      <div className="w-full px-4 mt-16">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Min Profil</h1>

        {/* Profile Info Box */}
        <div className="mt-4 w-full bg-[#FFF8DA] dark:bg-gray-800 p-4 rounded-lg flex flex-col">
          
          {/* Top Row: Profile Picture & Name */}
          <div className="flex items-center gap-4">
            {/* Profile Picture */}
            <img 
              src="https://www.w3schools.com/w3images/avatar2.png" 
              alt="Default Profile" 
              className="w-16 h-16 rounded-full object-cover"
            />
            
            {/* Name */}
            <h2 className="text-lg font-semibold">Ola Nordmann</h2>
          </div>

          {/* Stats Box (Poeng, Utfordringer, Reiser) */}
          <div className="flex justify-between w-full bg-[#FFC089] dark:bg-gray-700 rounded-lg p-3 mt-4 text-gray-600 dark:text-gray-300 text-sm">
            <div className="flex-1 text-center">
              <p className="text-lg font-semibold">10 532</p>
              <p>Poeng</p>
            </div>
            <div className="flex-1 text-center border-l border-[#FFF8DA]">
              <p className="text-lg font-semibold">10</p>
              <p>Utfordringer</p>
            </div>
            <div className="flex-1 text-center border-l border-[#FFF8DA]">
              <p className="text-lg font-semibold">9</p>
              <p>Reiser</p>
            </div>
          </div>
        </div>
      </div>

      {/* CO₂ & Money Saved Section (Centered in the Page) */}
      <div className="w-full flex flex-col items-center mt-10">
        {/* Circular Progress Display */}
        <div className="relative flex items-center justify-center w-36 h-36">
          {/* Circle Background */}
          <div className="w-full h-full rounded-full border-8 border-gray-300"></div>
          
          {/* Dynamic Value Inside */}
          <div className="absolute flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">{stats[selectedStat].value} {stats[selectedStat].unit}</p>
            <p className="text-gray-600 text-sm">{stats[selectedStat].label}</p>
          </div>
        </div>

        {/* Toggle Bar */}
        <div className="flex w-[75%] max-w-xs justify-between bg-[#FFF8DA] dark:bg-gray-700 rounded-lg mt-4 p-2">
        <button 
         className={`flex-1 py-2 rounded-md flex items-center justify-center ${selectedStat === "co2" ? "bg-[#FFC089] text-white" : "text-gray-700 dark:text-gray-300"}`} 
          onClick={() => setSelectedStat("co2")}
            >
           <Leaf size={24} className="block" /> {/* Ensure proper alignment */}
       </button>

       <button 
         className={`flex-1 py-2 rounded-md flex items-center justify-center ${selectedStat === "money" ? "bg-[#FFC089] text-white" : "text-gray-700 dark:text-gray-300"}`} 
          onClick={() => setSelectedStat("money")}
         >
        <Coins size={24} className="block" /> {/* Ensure proper alignment */}
      </button>

        </div>
      </div>

      {/* Navbar (Fixed at Bottom) */}
      <Navbar />
    </div>
  );
}

// Navbar Component
const NavItem = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} className="relative flex flex-col items-center justify-center transition-colors">
      {/* Active Background Circle */}
      {isActive && <span className="absolute w-10 h-10 bg-violet-400/40 rounded-full -z-10"></span>} 
      
      <span className={`${isActive ? "text-violet-950" : "text-gray-500"} hover:text-white transition-colors`}>
        {icon}
      </span>
    </Link>
  );
};


const Navbar = () => (
  <nav className="bg-purple-200 fixed bottom-0 left-0 w-full h-14 p-4 flex justify-around rounded-t-lg">
    <NavItem href="/" icon={<Home size={24} className="text-icon" />} />
    <NavItem href="/team" icon={<Users size={24} className="text-icon" />} />
    <NavItem href="/leaderboard" icon={<Trophy size={24} className="text-icon" />} />
    <NavItem href="/profile" icon={<User size={24} className="text-icon" />} />
  </nav>
);
