import { Pencil, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { mutate } from "swr";
import { validateName } from "@/services/validateName";

interface TeamStatsProps {
  teamName: string;
  totalScore: number;
  teamProfilePicture?: string;
  accessToken?: string;
  teamId?: number;
}

export default function TeamStats({ teamName, totalScore, teamProfilePicture, accessToken, teamId }: TeamStatsProps) {
  const [editingName, setEditingName] = useState(false);
  const [localName, setLocalName] = useState(teamName);
  const [initialName, setInitialName] = useState(teamName);
  const [nameError, setNameError] = useState<string | null>(null);
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const isCancellingRef = useRef(false);


  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(teamProfilePicture || "teamAvatar1.png");

  const availableAvatars = [
    "teamAvatar1.png", "teamAvatar2.png", "teamAvatar3.png", "teamAvatar4.png",
    "teamAvatar5.png", "teamAvatar6.png", "teamAvatar7.png", "teamAvatar8.png",
    "teamAvatar9.png", "teamAvatar10.png", "teamAvatar11.png", "teamAvatar12.png",
    "teamAvatar13.png", "teamAvatar14.png", "teamAvatar15.png", "teamAvatar16.png",
    "teamAvatar17.png", "teamAvatar18.png", "teamAvatar19.png", "teamAvatar20.png",
  ];

  useEffect(() => {
    setLocalName(teamName);
    setInitialName(teamName);
  }, [teamName]);

  const saveTeamChanges = async (newName: string, newAvatar: string) => {
    if (!accessToken || !teamId) return;

    try {
      const res = await fetch("https://kortreistapi-h7e9d7gsb3bcgwhd.norwayeast-01.azurewebsites.net/api/team/editTeam", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          teamId: teamId,
          name: newName,
          teamProfilePicture: newAvatar,
        }),
      });

      if (!res.ok) throw new Error("Kunne ikke oppdatere laget.");

      toast.success("Lagprofil oppdatert!");
      await mutate(["/api/team/myteam", accessToken]);
      setInitialName(newName);
      setEditingName(false);
    } catch (err) {
      console.error(err);
      toast.error("Noe gikk galt ved oppdatering.");
    }
  };

  const handleAvatarSelect = (avatar: string) => {
    setSelectedAvatar(avatar);
    setShowAvatarModal(false);
  
    if (!nameError && localName.trim() === initialName) {
      // Only avatar changed, no name update needed
      saveTeamChanges(initialName, avatar);
    } else if (!nameError && localName.trim() !== "") {
      // Both name and avatar change — only if name is valid
      saveTeamChanges(localName.trim(), avatar);
    } else {
      // Do not save if name is invalid
      toast.error("Kan ikke oppdatere lagbilde med ugyldig lagnavn.");
    }
  };
  

  const debounceTime = useRef<ReturnType<typeof setTimeout>>();

  const onNameChange = (value: string) => {
    setLocalName(value);
    setNameError(validateName(value, { maxLength: 12, label: "Lagnavn" }));
  };
  
  const handleNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (isCancellingRef.current) {
      isCancellingRef.current = false; // Reset immediately after skip
      return;
    }
  
    const relatedTarget = e.relatedTarget as HTMLElement | null;
    if (relatedTarget === saveButtonRef.current) {
      return; // skip blur save if clicking save
    }
  
    if (localName.trim() !== initialName && !nameError) {
      saveTeamChanges(localName.trim(), selectedAvatar);
    } else {
      setEditingName(false);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center">
      {/* Lagbilde */}
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/team-pictures/${selectedAvatar}`}
        alt={teamName}
        onClick={() => setShowAvatarModal(true)}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-customViolet shadow-md mb-4 cursor-pointer hover:opacity-80 transition"
      />
      <p className="text-xs text-gray-500 -mt-2">Trykk for å endre lagbilde</p>

      {/* Lagnavn */}
      {editingName ? (
      <div className="flex flex-col items-center mt-2 w-full">
        <div className="w-[90%] mx-auto">
          <input
            type="text"
            value={localName}
            onChange={(e) => onNameChange(e.target.value)}
            onBlur={handleNameBlur}
            className="w-full text-2xl sm:text-3xl font-bold text-customViolet text-center border-b border-customViolet bg-transparent focus:outline-none"
            autoFocus
          />
          {nameError && (
            <p className="mt-2 text-md text-red-600 text-center">{nameError}</p>
          )}
        </div>

    {!nameError && (
      <div className="mt-2 flex gap-3">
        <button
          ref={saveButtonRef}
          onClick={() => saveTeamChanges(localName, selectedAvatar)}
          disabled={localName === initialName}
          className={`text-sm px-4 py-1 rounded-full font-medium transition ${
            localName === initialName
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          Lagre
        </button>

        <button
          onMouseDown={() => {
            isCancellingRef.current = true;
          }}
          onClick={() => {
            setLocalName(initialName);
            setNameError(null);
            setEditingName(false);
          }}
          className="text-sm px-4 py-1 rounded-full font-medium transition bg-gray-200 text-gray-800 hover:bg-gray-300"
        >
          Avbryt
        </button>
      </div>
    )}
  </div>
) : (
  <div
    className="mt-2 flex items-center justify-center cursor-pointer"
    onClick={() => setEditingName(true)}
  >
    <h2 className="text-2xl sm:text-3xl font-bold text-customViolet text-center">
      {localName}
    </h2>
    <Pencil size={18} className="text-black ml-2" />
  </div>
)}

      {/* Score */}
      <p className="text-base sm:text-lg text-black mt-2 text-center">
        Gratulerer, laget ditt har opptjent
      </p>
      <p className="text-3xl sm:text-4xl font-extrabold text-customViolet mt-1 text-center">
        {totalScore.toLocaleString("no-NO")} poeng
      </p>

      {/* Avatar Modal */}
      {showAvatarModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center px-2 py-4 justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowAvatarModal(false);
          }}
        >
          <div className="bg-white rounded-lg p-6 max-w-md max-h-[70vh] w-full shadow-lg overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4 text-center">Velg et lagbilde</h2>
            <div className="grid grid-cols-4 gap-4">
              {availableAvatars.map((avatar) => (
                <img
                  key={avatar}
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/team-pictures/${avatar}`}
                  alt={avatar}
                  onClick={() => handleAvatarSelect(avatar)}
                  className={`w-16 h-16 rounded-full cursor-pointer transition border-4 ${
                    selectedAvatar === avatar
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