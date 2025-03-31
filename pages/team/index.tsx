import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUserAuth } from "@/components/userAuth";

export default function TeamIndex() {
  const router = useRouter();
  const { userData } = useUserAuth();
  const [checkingTeam, setCheckingTeam] = useState(true);

  useEffect(() => {
    if (!userData?.accessToken) return;

    const checkIfInTeam = async () => {
      try {
        const response = await fetch(
          "https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/team/myteam",
          {
            headers: {
              Authorization: `Bearer ${userData.accessToken}`,
            },
          }
        );

        // If user is in a team (200 OK), redirect to dashboard
        if (response.ok) {
          router.replace("/team/dashboard");
        } else {
          // Not found (user not in a team)
          router.replace("/team/onboarding");
        }
      } catch (error) {
        router.replace("/team/onboarding");
      } finally {
        setCheckingTeam(false);
      }
    };

    checkIfInTeam();
  }, [userData?.accessToken, router]);

  return null; // Or a loading spinner if needed
}
