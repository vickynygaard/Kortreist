import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { useMsal } from "@azure/msal-react";
import { useUserAuth } from "@/components/userAuth";
import AddressAutocomplete from "@/components/addressAutocomplete";


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
  const { instance } = useMsal();
  const { userData } = useUserAuth();

  // Profile data states
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [nickName, setNickName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  // Additional states
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showPointsInfo, setShowPointsInfo] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  // Saving states
  const [initialProfileData, setInitialProfileData] = useState<{
    profilePicture: string | null;
    nickName: string;
    address: string;
  } | null>(null);

  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  // 1. Fetch user profile on mount
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
        console.log("Fetched user profile:", data);

        // Populate state
        setNickName(data.nickName || "");
        setProfilePicture(data.profilePicture || "");
        setAddress(data.address ?? "");

        // Store the “original” data to compare later
        setInitialProfileData({
          nickName: data.nickName || "",
          profilePicture: data.profilePicture || "",
          address: data.address ?? "",
        });
      } catch (error) {
        console.error("Feil ved henting av brukerdata:", error);
      }
    };
    GetUser();
  }, [userData?.accessToken]);

  // 2. Compare current vs. initial data to enable/disable the Save button
  const isDirty = useMemo(() => {
    if (!initialProfileData) return false; // not fetched yet
    return (
      nickName !== initialProfileData.nickName ||
      profilePicture !== initialProfileData.profilePicture ||
      address !== initialProfileData.address
    );
  }, [nickName, profilePicture, address, initialProfileData]);

  // 3. Single “Save Profile” function
  const handleSaveProfile = async () => {
    if (!userData?.accessToken) return;

    setIsSaving(true);
    setSaveMessage("");

    try {
      const response = await fetch(
        `https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Users/updateProfile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.accessToken}`,
          },
          body: JSON.stringify({
            nickName,
            profilePicture,
            address,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Serverfeil: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Profile updated:", result);
      router.push("/profile");

      // Update the initial data to the new values (so button will disable again)
      setInitialProfileData({
        nickName,
        profilePicture,
        address,
      });

      setSaveMessage("Profil oppdatert!");
    } catch (err) {
      console.error("❌ Feil ved oppdatering:", err);
      setSaveMessage("Klarte ikke å oppdatere profil. Prøv igjen senere.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userUpserted");
    instance.logoutRedirect();
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-md flex flex-col mx-auto px-4">
        {/* Back button + title */}
        <div className="relative flex items-center justify-center mb-6">
          <button onClick={() => router.push("/profile")} className="absolute left-0 text-black">
            <ArrowLeft size={28} strokeWidth={2} />
          </button>
          <h1 className="text-2xl font-semibold text-black">Innstillinger</h1>
        </div>

        {/* Profile Picture */}
        <div className="flex flex-col items-center justify-center mt-4">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile-pictures/${
              profilePicture || "avatar1.png"
            }`}
            alt="Profile"
            onClick={() => setShowAvatarModal(true)}
            className="w-24 h-24 rounded-full object-cover border-2 border-customViolet cursor-pointer hover:opacity-80 transition"
          />
          <p className="text-sm text-gray-500 mt-1">Trykk for å endre bilde</p>
        </div>

        {/* Nickname */}
        <div className="mt-6 w-full max-w-md">
          <label className="block text-gray-700 text-sm font-semibold mb-1">Endre Kallenavn:</label>
          <input
            type="text"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            className="w-full max-w-md flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
          />
        </div>

        {/* Address */}
        <div className="mt-6 w-full max-w-md">
          <AddressAutocomplete selectedAddress={address} setSelectedAddress={setAddress} />
        </div>

        {/* Notifications */}
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

        {/* Points Info */}
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
              Tjen poeng for hvert bærekraftige reisevalg:
              <br />
              - 100 poeng for å gå
              <br />
              - 80 poeng for å sykle
              <br />
              - 60 poeng for å ta buss
              <br />
              - 50 poeng for å samkjøre
              <br />
              - 10 poeng for å kjøre bil
              <br />
              <br />
              Lengere distanse gir flere poeng:
              <br />
              - 0 - 2 km = 20 poeng
              <br />
              - 2 - 5 km = 50 poeng
              <br />
              - 5 - 10 km = 80 poeng
              <br />
              - 10 - 15 km = 100 poeng
              <br />
              - 15 - 25 km = 150 poeng
              <br />
              - 25 km + = 200 poeng
              <br />
              <br />
              Fullfør utfordringer og opptjen "badges" for å samle enda flere poeng!
            </div>
          )}
        </div>

        {/* Save + Message */}
        <div className="mt-4 flex flex-col gap-2">
          {saveMessage && <p className="text-sm text-gray-600">{saveMessage}</p>}
          <button
            onClick={handleSaveProfile}
            disabled={!isDirty || isSaving}
            className={`px-4 py-2 rounded-md text-white text-sm font-medium transition ${
              isDirty && !isSaving ? "bg-customViolet" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {isSaving ? "Lagrer..." : "Lagre profil"}
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full max-w-md py-3 bg-customRed text-white font-semibold rounded-lg shadow-md transition self-center"
        >
          Logg ut
        </button>
      </div>

      {showAvatarModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center px-2 py-4 justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowAvatarModal(false);
            }
          }}
        >
          <div className="bg-white no-scrollbar overflow-y-auto overscroll-contain rounded-lg p-6 max-w-md max-h-[70vh] w-full shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-center">Velg et profilbilde</h2>
            <div className="grid grid-cols-4 gap-4">
              {availableAvatars.map((avatar) => (
                <img
                  key={avatar}
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile-pictures/${
                    avatar || "avatar1.png"
                  }`}
                  alt={avatar}
                  onClick={() => {
                    setProfilePicture(avatar);
                    setShowAvatarModal(false);
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
