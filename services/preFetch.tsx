import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserAuth } from '@/components/userAuth';

export function usePrefetchMainRoutes() {
  const router = useRouter();
  const { userData } = useUserAuth();

  useEffect(() => {
    if (!userData?.accessToken) return;

    const current = router.pathname;
    const prefetchTargets = ["/", "/profile", "/team", "/leaderboard"].filter(
      (route) => route !== current
    );

    prefetchTargets.forEach((route) => router.prefetch(route));
  }, [router.pathname, userData?.accessToken]);
}
