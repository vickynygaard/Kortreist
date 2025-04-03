import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserAuth } from '@/components/userAuth';

export function usePrefetchMainRoutes() {
  const router = useRouter();
  const { userData } = useUserAuth();

  useEffect(() => {
    if (!userData?.accessToken) return;

    const current = router.pathname;
    // Base routes always prefetch
    let prefetchTargets = ["/", "/profile", "/team", "/leaderboard"];

    // If on the profile page, prefetch settings
    if (current === "/profile") {
      prefetchTargets.push("/profile/settings");
    }

    // If on the leaderboard page, prefetch its subpages
    if (current === "/leaderboard") {
      prefetchTargets.push("/leaderboard/company", "/leaderboard/team");
    }
    // If on the Index page, prefetch subpages
    if (current === "/") {
      prefetchTargets.push("/travelForm", "/challenges");
    }

    // If in the team, prefetch team pages
    if (current.startsWith("/team")) {
      // If on main team route, prefetch dashboard and onboarding
      if (current === "/team") {
        prefetchTargets.push("/team/dashboard", "/team/onboarding");
      }
      // When on dashboard, prefetch onboarding
      if (current === "/team/dashboard") {
        prefetchTargets.push("/team/onboarding");
      }
      if (current === "/team/onboarding") {
        prefetchTargets.push("/team/dashboard");
      }
    }

    prefetchTargets
      .filter((route) => route !== current)
      .forEach((route) => router.prefetch(route));
  }, [router.pathname, userData?.accessToken]);
}
