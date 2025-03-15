import { useEffect } from "react";
import { useUserAuth } from "@/components/userAuth";

const SyncUserData: React.FC = () => {
  const { userData, loading } = useUserAuth();

  useEffect(() => {
    const upsertUser = async () => {
      if (!userData) return;
      // Check if we've already upserted in this session
      if (sessionStorage.getItem("userUpserted")) return;
      
      try {
        const response = await fetch("http://localhost:5279/api/users/upsert", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${userData.accessToken}`,
          },
          body: JSON.stringify({
            email: userData.email,
            name: userData.name,
            azureId: userData.idTokenClaims?.sub,
            companyId: 1,
            TotalScore: 100,
          }),
        });
        if (response.ok) {
          console.log("User upserted successfully");
          // Set a flag so we don't upsert again in this session.
          sessionStorage.setItem("userUpserted", "true");
        } else {
          console.error("User upsert failed:", await response.text());
        }
      } catch (err) {
        console.error("Error during user upsert:", err);
      }
    };

    if (!loading && userData) {
      upsertUser();
    }
  }, [loading, userData]);

  return null;
};

export default SyncUserData;
