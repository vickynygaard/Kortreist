import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { useMsal } from "@azure/msal-react";
import { useUserAuth } from "@/components/userAuth";

const availableAvatars = [
  "avatar1.png",
  "avatar2.png",
  "avatar3.png",
  "avatar4.png",
  "avatar5.png",
  "avatar6.png",
  "avatar7.png",
  "avatar8.png",
  "avatar9.png",
  "avatar10.png",
  "avatar11.png",
  "avatar12.png",
  "avatar13.png",
  "avatar14.png",
  "avatar15.png",
  "avatar16.png",
];


export default function Settings() {
  const router = useRouter();
  const {instance} = useMsal();
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [nickName, setNickName] = useState<string>("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showPointsInfo, setShowPointsInfo] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const {userData, loading, error } = useUserAuth();


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
      
      setNickName(data.nickName || "");
      setProfilePicture(data.profilePicture || "");
      
    } catch (error) {
      console.error("Feil ved henting av brukerdata:", error);
    }
  };  
  GetUser();
}, [userData?.accessToken]);


const handleSaveNickname = async () => {
  if (!userData?.accessToken) return;

  try {
    const response = await fetch(`https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Users/updateProfile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.accessToken}`,
      },
      body: JSON.stringify({
        nickName: nickName,
        profilePicture: profilePicture, 
      }),      
    });

    if (!response.ok) {
      throw new Error(`Serverfeil: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("✅ Nickname updated:", result);
    alert("Kallenavn oppdatert!");
  } catch (err) {
    console.error("❌ Feil ved oppdatering:", err);
    alert("Klarte ikke å oppdatere kallenavn. Prøv igjen senere.");
  }
};

const handleLogout = () => {
  sessionStorage.removeItem("userUpserted");
  instance.logoutRedirect();
};


  return (
<div className="min-h-screen bg-customYellow2 flex justify-center overflow-y-auto">

<div className="w-full max-w-md flex flex-col">
      
      {/* Tilbakeknapp og tittel */}
      <div className="relative flex items-center justify-center mb-6">
  <button
    onClick={() => router.push("/profile")}
    className="absolute left-0 text-black"
  >
    <ArrowLeft size={28} strokeWidth={2}/>
  </button>

  <h1 className="text-2xl font-semibold text-black">Innstillinger</h1>
</div>


      {/* Profilbilde */}
      <div className="flex flex-col items-center justify-center mt-4">
      <img
        src={`/images/profile-pictures/${profilePicture || "avatar1.png"}`}
        alt="Profile"
        onClick={() => setShowAvatarModal(true)}
        className="w-24 h-24 rounded-full object-cover border-2 border-customViolet cursor-pointer hover:opacity-80 transition"
      />
      <p className="text-sm text-gray-500 mt-1">Trykk for å endre bilde</p>
    </div>

      {/* Endre navn */}
      <div className="mt-6 w-full max-w-md">
        <label className="block text-gray-700 text-sm font-semibold mb-1">
          Endre Kallenavn:
        </label>
        <input
          type="text"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
          className="w-full max-w-md flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
        />
        <button
        onClick={handleSaveNickname}
        className="mt-2 px-4 py-2 bg-customViolet text-white rounded-md text-sm font-medium"
      >
        Lagre kallenavn
      </button>
      </div>
       
      <div className="mt-6 w-full max-w-md flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
      <span className="text-gray-900 text-sm font-semibold">Laginstillinger</span>
      </div>

      {/* Varslinger */}
      <div className="mt-6 w-full max-w-md flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
        <span className="text-gray-900 text-sm font-semibold">Varslinger</span>
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
          className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-md"
        >
          <span className="text-gray-900 text-sm font-semibold">Poengsystem Forklaring</span>
          <span className="text-gray-500">{showPointsInfo ? "▲" : "▼"}</span>
        </button>

        {showPointsInfo && (
           <div className="p-4 bg-gray-50 rounded-lg mt-2 text-sm text-gray-600">
              Tjen poeng for hvert bærekraftige reisevalg:<br />
               - 100 poeng for å gå<br />
               - 80 poeng for å sykle<br />
               - 60 poeng for å ta buss<br />
               - 50 poeng for å samkjøre<br />
               - 10 poeng for å kjøre bil<br />
               <br />
               Lengere distanse gir flere poeng:<br />
               - 0 - 2 km = 20 poeng<br />
               - 2 - 5 km = 50 poeng<br />
               - 5 - 10 km = 80 poeng<br />
               - 10 - 15 km = 100 poeng<br />
               - 15 - 25 km = 150 poeng<br />
               - 25 km + = 200 poeng<br />
               <br />
               Fullfør utfordringer og opptjen "badges" for å samle enda flere poeng!
            </div>
        )}
        </div>
            <button
              onClick={handleLogout}
                  className="mt-6 w-full max-w-md py-3 bg-customRed text-white font-semibold rounded-lg shadow-md transition self-center"
               >
            Logg ut
          </button>
          </div>

          {showAvatarModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center px-2 py-4 justify-center"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowAvatarModal(false); // Close when clicking backdrop
          }
        }}
      >
    <div className="bg-white no-scrollbar overflow-y-auto overscroll-contain rounded-lg p-6 max-w-md max-h-[70vh] w-full shadow-lg">
      <h2 className="text-lg font-semibold mb-4 text-center">Velg et profilbilde</h2>
      <div className="grid grid-cols-4 gap-4">
        {availableAvatars.map((avatar) => (
          <img
            key={avatar}
            src={`/images/profile-pictures/${avatar}`}
            alt={avatar}
            onClick={() => {
              setProfilePicture(avatar);
              setShowAvatarModal(false); // Close modal
            }}
            className={`w-16 h-16 rounded-full cursor-pointer transition border-4 ${
              profilePicture === avatar
                ? "border-customViolet scale-110"
                : "border-transparent hover:border-gray-400 hover:scale-105"
            }`}
          />
        ))}
      </div>
      <button
        onClick={() => setShowAvatarModal(false)}
        className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded"
      >
        Lukk
      </button>
    </div>
  </div>
)}

    </div>
    
  );
}
