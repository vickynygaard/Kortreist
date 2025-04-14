import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { useMsal } from "@azure/msal-react";
import { useUserAuth } from "@/components/userAuth";
import AddressAutocomplete from "@/components/addressAutocomplete";
import { useApi } from "@/hooks/useApi";
import CustomSpinner from "@/components/dashboard/customSpinner";
import toast from "react-hot-toast";
import { validateName } from "@/services/validateName";
import { mutate } from "swr";
import ReturnButton from "@/components/buttons/returnButton";
import ConfirmationModal from "@/components/modalConfirm";

const availableAvatars = [
  "Avatar1.png", "Avatar2.png", "Avatar3.png", "Avatar4.png",
  "Avatar5.png", "Avatar6.png", "Avatar7.png", "Avatar8.png",
  "Avatar9.png", "Avatar10.png", "Avatar11.png", "Avatar12.png",
  "Avatar13.png", "Avatar14.png", "Avatar15.png", "Avatar16.png",
];

interface UserProfile {
  nickName: string;
  profilePicture: string | null;
  address: string;
}

export default function Settings() {
  const router = useRouter();
  const { instance } = useMsal();
  const { userData } = useUserAuth();;

  const { data: fetchedProfile, isLoading: isLoading, error } = useApi<UserProfile>(
    "/api/Profile/getUser",
    userData?.accessToken,
    { refreshInterval: 30000,   revalidateOnMount: true, enabled: !!userData?.accessToken }
  );

  const [showConfirm, setShowConfirm] = useState(false);

const confirmLogout = () => {
  sessionStorage.removeItem("userUpserted");
  instance.logoutRedirect();
};

  // Profile data states
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [nickName, setNickName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const [nickNameError, setNickNameError] = useState<string | null>(null);

  // Additional states
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showPointsInfo, setShowPointsInfo] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  // Saving states
  useEffect(() => {
    if (fetchedProfile) {
      setNickName(fetchedProfile.nickName);
      setProfilePicture(fetchedProfile.profilePicture);
      setAddress(fetchedProfile.address);
    }
  }, [fetchedProfile]);

  // Track the initial data to determine if changes were made
  const [initialProfileData, setInitialProfileData] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (fetchedProfile) {
      setNickName(fetchedProfile.nickName);
      setProfilePicture(fetchedProfile.profilePicture);
      setAddress(fetchedProfile.address);
      setNickNameError(validateName(fetchedProfile.nickName));
  
      setInitialProfileData({
        nickName: fetchedProfile.nickName,
        profilePicture: fetchedProfile.profilePicture,
        address: fetchedProfile.address,
      });
    }
  }, [fetchedProfile]);  

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickName(value);
    setNickNameError(validateName(value));
  };

  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  // Compare current vs. initial data to enable/disable the Save button
  const isDirty = useMemo(() => {
    if (!initialProfileData) return false;
    return (
      nickName !== initialProfileData.nickName ||
      profilePicture !== initialProfileData.profilePicture ||
      address !== initialProfileData.address
    );
  }, [nickName, profilePicture, address, initialProfileData]);

  const handleSaveProfile = async () => {
    if (!userData?.accessToken) return;

    if (nickNameError) {
      toast.error("Kallenavnet er ugyldig.");
      return;
    }
    
    setIsSaving(true);
    setSaveMessage("");

    try {
      const response = await fetch(
        `https://kortreistapi-h7e9d7gsb3bcgwhd.norwayeast-01.azurewebsites.net/api/Users/updateProfile`,
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

      mutate(["/api/Profile/overview", userData.accessToken]);
      
      // Show success toast
      toast.success("Profil oppdatert!");
      router.push("/profile");

      // Update the initial data to the new values (so button will disable again)
      setInitialProfileData({
        nickName,
        profilePicture,
        address,
      });

      setSaveMessage("Profil oppdatert!");
    } catch (err) {
        return (
          <div className="flex justify-center items-center h-screen">
            <p>Her skjedde det noe galt, prøv å laste inn på nytt</p>
          </div>
        );
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userUpserted");
    instance.logoutRedirect();
  };

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
    <div className="flex justify-center w-full">
    <div className="w-full max-w-md flex flex-col mx-auto px-4">
      <div className="flex flex-col items-center">
      <header className="self-start">
        <ReturnButton onClick={() => router.back()} />
      </header>
      <div className="font-bold text-3xl text-violet-950 pb-6">Innstillinger</div></div>


        {/* Profile Picture */}
        <div className="flex flex-col items-center justify-center mt-4">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatars/${profilePicture || "Avatar1.png"}`}
            alt="Profile"
            onClick={() => setShowAvatarModal(true)}
            className="w-24 h-24 rounded-full object-cover border-2 border-customViolet cursor-pointer hover:opacity-80 transition"
          />
          <p className="text-sm text-gray-500 mt-2">Trykk for å endre profilbilde</p>
        </div>

        {/* Nickname */}
        <div className="mt-6 w-full max-w-md">
          <label className="block text-gray-500 text-sm mb-2">Endre kallenavn:</label>
          <input
            type="text"
            value={nickName}
            onChange={handleNickNameChange}
            className={`w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-customViolet focus:ring-1 focus:ring-customViolet`}
            />
          {nickNameError && (
            <p className="text-customRed text-sm mt-1">{nickNameError}</p>
          )}
        </div>

        {/* Address */}
        <div className="mt-6 w-full max-w-md">
        <label className="block text-gray-500 text-sm mb-2">Endre Adresse:</label>
          <AddressAutocomplete selectedAddress={address} setSelectedAddress={setAddress} />
        </div>

        {/* Points Info */}
        <div className="mt-4 w-full max-w-md">
          <button
            onClick={() => setShowPointsInfo(!showPointsInfo)}
            className="w-full flex justify-between items-center p-3 bg-white rounded border border-gray-300"
          >
            <span className="text-black text-base">Forklaring</span>
            <span className="text-gray-500">{showPointsInfo ? "▲" : "▼"}</span>
          </button>
          {showPointsInfo && (
            <div className="p-3 bg-white rounded mt-2 text-sm text-gray-500 border border-gray-300">
              Velkommen til Kortreist!
              <br />
              <br />
              Appens formål er å oppmuntre ansatte til å reise mer bærekraftig til og fra jobb. Registrer reisemåten din for å tjene 
              poeng, fullfør ukentlige utfordringer, og konkurrer sammen med kollegaer.
              <br />
              <br />
              Tjen poeng for hvert bærekraftige reisevalg:
              <br />
              - ca. 120 poeng pr km for å gå. Maks 500 poeng.
              <br />
              - ca. 120 poeng pr km for å sykkle. Maks 500 poeng.
              <br />
              - ca. 50 poeng pr km for å ta buss. Maks 300 poeng.
              <br />
              - ca. 60 poeng pr km for å samkjøre. Maks 200 poeng.
              <br />
              <br />
              Fullfør utfordringer og tjen merker for å samle enda flere poeng!
              <br />
              <br />
              Lykke til!
            </div>
          )}
        </div>

        {/* Save + Message */}
        <div className="mt-4 flex flex-col gap-2">
          {saveMessage && <p className="text-sm text-gray-600">{saveMessage}</p>}
          <button
            onClick={handleSaveProfile}
            disabled={!isDirty || isSaving || Boolean(nickNameError)}
            className={`px-4 py-2 rounded-md text-white text-sm font-medium transition ${
              isDirty && !isSaving && !nickNameError
                ? "bg-customViolet"
                : "bg-gray-400 cursor-not-allowed"
            }`}            
          >
            {isSaving ? "Lagrer..." : "Lagre profil"}
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={() => setShowConfirm(true)}
          className="mt-10 w-full max-w-md py-3 bg-customRed text-white font-semibold rounded-lg shadow-md transition self-center"
        >
          Logg ut
        </button>
      </div>

      {/* Confirm logout modal */}
{showConfirm && (
  <ConfirmationModal
    message="Er du sikker på at du vil logge ut?"
    onConfirm={confirmLogout}
    onCancel={() => setShowConfirm(false)}
    confirmColor="red"
  />
)}

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
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/avatars/${avatar || "Avatar1.png"}`}
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
