import { useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";

export default function Settings() {
  const router = useRouter();
  const [name, setName] = useState("Ola Nordmann");
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showPointsInfo, setShowPointsInfo] = useState(false);

  // Håndterer Profilbilde opplastning 
  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8 flex flex-col pb-24"> 
      
      {/* Back Arrow & Titel */}
      <div className="flex items-center gap-4 mb-6">
        {/* Gå tilbake */}
        <button onClick={() => router.push("/profile")} className="text-black dark:text-white hover:opacity-75">
          <ArrowLeft size={28} />
        </button>
        <h1 className="text-2xl font-bold text-black dark:text-white">Innstillinger</h1>
      </div>

      {/* Profilbilde opplastning */}
      <div className="flex flex-col items-center gap-3 mt-4">
        <img
          src={profilePicture || "https://www.w3schools.com/w3images/avatar2.png"} 
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 dark:border-gray-700"
        />

        <label className="cursor-pointer bg-[#5573CE] text-white px-4 py-2 rounded-md text-sm hover:bg-violet-600 transition">
          Endre Profilbilde
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Endre navn */}
      <div className="mt-6 w-full max-w-md">
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1">
          Endre Navn:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-md flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        />
      </div>

      {/* Varslinger */}
      <div className="mt-6 w-full max-w-md flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <span className="text-gray-900 dark:text-white text-sm font-semibold">Varslinger</span>
        <button
          onClick={() => setNotificationsEnabled(!notificationsEnabled)}
          className={`w-12 h-6 flex items-center rounded-full transition ${
            notificationsEnabled ? "bg-green-500" : "bg-gray-400"
          }`}
        >
          <span
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
              notificationsEnabled ? "translate-x-6" : "translate-x-0"
            }`}
          ></span>
        </button>
      </div>

      {/* Poengsystem Info */}
      <div className="mt-6 w-full max-w-md">
        <button
          onClick={() => setShowPointsInfo(!showPointsInfo)}
          className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        >
          <span className="text-gray-900 dark:text-white text-sm font-semibold">Poengsystem Forklaring</span>
          <span className="text-gray-500 dark:text-gray-400">{showPointsInfo ? "▲" : "▼"}</span>
        </button>

        {showPointsInfo && (
           <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg mt-2 text-sm text-gray-600 dark:text-gray-300">
              Tjen poeng for hvert bærekraftige reisevalg:<br />
              <br />
               - 100 poeng for å gå<br />
               - 80 poeng for å sykle<br />
               - 60 poeng for å ta buss<br />
               - 50 poeng for å samkjøre<br />
               - 10 poeng for å kjøre bil<br />
               <br />
               Lengere distanse gir flere poeng:<br />
               0 - 2 km = 20 poeng<br />
               2 - 5 km = 50 poeng<br />
               5 - 10 km = 80 poeng<br />
               10 - 15 km = 100 poeng<br />
               15 - 25 km = 150 poeng<br />
               25 km + = 200 poeng<br />
               <br />
               Fullfør utfordringer og opptjen "badges" for å samle enda flere poeng!
            </div>
        )}
      </div>
    </div>
  );
}
