// UserProfileContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { useUserAuth } from "./userAuth";


export interface UserProfile {
  userId: number;
  name: string;
  email: string;
  nickName: string;
  address: string;
  companyId: number;
  profilePicture: string;
  teamId?: number;
  totalScore: number;
  isProfileComplete: boolean;
  // ... add any other fields you need
}

interface UserProfileContextType {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
  refetchProfile: () => Promise<void>;
}

const UserProfileContext = createContext<UserProfileContextType>({
  profile: null,
  loading: true,
  error: null,
  refetchProfile: async () => {},
});

export const UserProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { userData } = useUserAuth(); // This is your Azure auth data (contains the access token)
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    if (!userData?.accessToken) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Profile/getUser",
        {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error fetching profile: ${response.statusText}`);
      }
      const data: UserProfile = await response.json();
      setProfile(data);
      localStorage.setItem("userProfile", JSON.stringify(data));
    } catch (err) {
      console.error("Failed to fetch profile", err);
      setError((err as Error).message);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!userData?.accessToken) {
      setLoading(false);
      return;
    }
    // Try loading cached data first
    const cachedProfile = localStorage.getItem("userProfile");
    if (cachedProfile) {
      try {
        setProfile(JSON.parse(cachedProfile));
        setLoading(false);
      } catch (e) {
        console.error("Error parsing cached profile", e);
      }
    }
    // Fetch fresh data in the background
    fetchProfile();
  }, [userData?.accessToken]);

  return (
    <UserProfileContext.Provider value={{ profile, loading, error, refetchProfile: fetchProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => useContext(UserProfileContext);
