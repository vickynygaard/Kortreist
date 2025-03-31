import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import router, { useRouter } from 'next/router' 
import '@/styles/globals.css'
import { msalConfig } from "../msalConfig";
import { PublicClientApplication } from '@azure/msal-browser'
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { MsalProvider } from '@azure/msal-react'
import { useEffect, useState } from 'react'
import ReactModal from "react-modal";
import Page from '@/components/page'
import Section from '@/components/section'
import Footer from '@/components/footer'
import { UserProfileProvider } from '@/components/UserProfileContext';
import 'styles/nprogress.css';
import NProgress from 'nprogress';
import CustomSpinner from '@/components/dashboard/customSpinner'
import { Toaster } from 'react-hot-toast'
import { useUserAuth } from '@/components/userAuth'


const msalInstance = new PublicClientApplication(msalConfig);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [msalReady, setMsalReady] = useState(false);

  useEffect(() => {
    const initMsal = async () => {
      try {
        await msalInstance.initialize();
        setMsalReady(true);
      } catch (err) {
        console.error("MSAL initialization failed:", err);
      }
    };

    initMsal();
  }, []);

  if (!msalReady) {
    return <div className="flex justify-center items-center h-screen">Laster inn ...</div>;
  }

  return (
    <MsalProvider instance={msalInstance}>
      <MainApp Component={Component} pageProps={pageProps} />
    </MsalProvider>
  );
}

type MainAppProps = {
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"];
};

function MainApp({ Component, pageProps }: MainAppProps) {
  const router = useRouter(); 
	const hideNavbarRoutes = ["/login", "/onboarding"]; 
	const showNavbar = !hideNavbarRoutes.includes(router.pathname); 
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const { userData, loading: userLoading } = useUserAuth();


  const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = useIsAuthenticated();
    const { inProgress } = useMsal();
    const router = useRouter();
  
    useEffect(() => {
      // Dont redirect when Msal is working
      if (inProgress === "none" && !isAuthenticated && router.pathname !== "/login") {
        router.replace("/login");
      }
    }, [isAuthenticated, inProgress, router]);
  
    // Wait for Msal
    if (inProgress !== "none" || userLoading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-customViolet"></div>
            <p className="text-customViolet text-lg">Logger inn...</p>
          </div>
        </div>
      );
    }
    
    // If not logged in go /login
    if (!isAuthenticated && router.pathname !== "/login") {
      return null;
    }
  
    return <>{children}</>;
  };


 useEffect(() => {
    const handleStart = () => setIsRouteChanging(true);
    const handleComplete = () => setIsRouteChanging(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events]);

  

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
      document.documentElement.style.setProperty('--app-bottom-padding', 'calc(12rem + env(safe-area-inset-bottom))');
      document.documentElement.style.setProperty('--app-top-padding', 'calc(1rem + env(safe-area-inset-top))');    

      return;
    } else {
      document.documentElement.style.setProperty('--bottom-offset', 'env(safe-area-inset-bottom)');
      document.documentElement.style.setProperty('--app-bottom-padding', 'calc(15rem + env(safe-area-inset-bottom))');
      document.documentElement.style.setProperty('--app-top-padding', 'calc(1rem + env(safe-area-inset-top))');    }

    // Detect if the user is in Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isSafari = userAgent.includes("safari") && !userAgent.includes("chrome");

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
		enableSystem={false} 
		disableTransitionOnChange
		>
    <RequireAuth>

    {(isRouteChanging || isDataLoading) &&  <CustomSpinner />}
      <Page>
        <Section>
      
        <Component {...pageProps} />

      </Section>
      <Footer />
      </Page>

      </RequireAuth>
		</ThemeProvider>
      
      {/* Only render the Navbar if showNavbar is true */}
			{showNavbar && <Navbar />}
      <Toaster /> 

		</>
		</MsalProvider>
	)
}

