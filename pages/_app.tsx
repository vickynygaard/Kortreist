import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import router, { useRouter } from 'next/router' // ✅ Import useRouter
import '@/styles/globals.css'
import { msalConfig } from "../msalConfig";
import { PublicClientApplication } from '@azure/msal-browser'
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { MsalProvider } from '@azure/msal-react'
import { useEffect } from 'react'
import ReactModal from "react-modal";

const msalInstance = new PublicClientApplication(msalConfig);
export default function App({ Component, pageProps }: AppProps) {

  const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = useIsAuthenticated();
    const { inProgress } = useMsal();
    const router = useRouter();
  
    useEffect(() => {
      // ✅ Don't redirect while MSAL is still handling loginRedirect or acquiring tokens
      if (inProgress === "none" && !isAuthenticated && router.pathname !== "/login") {
        router.replace("/login");
      }
    }, [isAuthenticated, inProgress, router]);
  
    // ✅ Wait until MSAL is done before rendering protected content
    if (inProgress !== "none") {
      return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }
    
    // ✅ If not authenticated and not on login page, don’t flash content
    if (!isAuthenticated && router.pathname !== "/login") {
      return null;
    }
  
    return <>{children}</>;
  };
  

useEffect(() => {
    
    if ("serviceWorker" in navigator) {
      const swPath = process.env.NODE_ENV === "production" ? "/Kortreist/sw.js" : "/sw.js";

      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((reg) => reg.unregister()); // Remove old SW
      }); 

      navigator.serviceWorker
        .register(swPath)
        .then(() => console.log("Service Worker Registered"))
        .catch((err) => console.error("Service Worker Registration Failed:", err));
    }

    ReactModal.setAppElement('#__next');

    // Check if the app is already running in PWA mode
    const isPWA = window.matchMedia("(display-mode: standalone)").matches;
    if (isPWA) {
      // Use the safe-area inset for the bottom (if available)
      document.documentElement.style.setProperty('--bottom-offset', 'env(safe-area-inset-bottom)');
      document.documentElement.style.setProperty('--app-bottom-padding', 'calc(4rem + env(safe-area-inset-bottom))');
      document.documentElement.style.setProperty('--app-top-padding', 'calc(3rem + env(safe-area-inset-top))');    

      return;
    } else {
      document.documentElement.style.setProperty('--bottom-offset', 'env(safe-area-inset-bottom)');
      document.documentElement.style.setProperty('--app-bottom-padding', 'calc(4rem + env(safe-area-inset-bottom))');
      document.documentElement.style.setProperty('--app-top-padding', 'calc(4rem + env(safe-area-inset-top))');    }

    // Detect if the user is in Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isSafari = userAgent.includes("safari") && !userAgent.includes("chrome");

    if (isSafari && router.pathname !== "/install") {
      router.replace("/install");
    }

  }, []);

    useEffect(() => {
    function handleOrientationChange() {
      window.dispatchEvent(new Event('resize'));
    }
      window.addEventListener('orientationchange', handleOrientationChange);

      return () => {
        window.removeEventListener('orientationchange', handleOrientationChange);
      };
    }, []);



	const router = useRouter(); // ✅ Get the current route
	const hideNavbarRoutes = ["/login"]; // ✅ Define routes to hide navbar

	const showNavbar = !hideNavbarRoutes.includes(router.pathname); // ✅ Check if navbar should be shown

	return (
		<MsalProvider instance={msalInstance}>
		<>
		<Head>
			<title>Kortreist</title>
			<meta name="description" content="Kortreist hjelper deg å velge en grønnere reise til jobb." />
			<link rel='manifest' href={`${process.env.NEXT_PUBLIC_BASE_PATH}/manifest.json`} />
		</Head>
		
		<ThemeProvider
		attribute="class"
		defaultTheme="light"
		enableSystem={false} // <== Important: disables system preference
		disableTransitionOnChange
		>
    <RequireAuth>
			<div
    className="mx-auto max-w-screen-md overflow-y-auto px-safe sm:pb-0"
    style={{
      paddingTop: 'var(--app-top-padding)',
      paddingBottom: 'var(--app-bottom-padding)',
    }}
  >
			<Component {...pageProps} />
			</div>
      </RequireAuth>
		</ThemeProvider>
      
      {/* ✅ Only render the Navbar if showNavbar is true */}
			{showNavbar && <Navbar />}
		</>
		</MsalProvider>
	)
}

