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
import 'styles/nprogress.css';
import NProgress from 'nprogress';
import CustomSpinner from '@/components/dashboard/customSpinner'
import { Toaster } from 'react-hot-toast'
import { useUserAuth } from '@/components/userAuth'
import { initProfanityFilter } from '@/services/norwegianNonValid'
import { useDelayedLoading } from '@/services/useDelayedLoading'


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
  

  const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const { inProgress } = useMsal();
    const router = useRouter();
    const { userData, loading: userLoading } = useUserAuth();
    const showSpinner = useDelayedLoading(150);
  
    const isHardLoading = inProgress !== "none" || userLoading;
  
    // Block all rendering while loading
    if (isHardLoading) {
      return showSpinner ? (
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-customViolet"></div>
            <p className="text-customViolet text-lg">Logger inn...</p>
          </div>
        </div>
      ) : null;
    }
  
    // When loading is done, check auth
    if (!userData && router.pathname !== "/login") {
      router.push("/login");
      return null;
    }
  
    return <>{children}</>;
  };
 
// Initialize the service worker
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

    // Set the app element for ReactModal
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

    // Handle orientation change
    useEffect(() => {
    function handleOrientationChange() {
      window.dispatchEvent(new Event('resize'));
    }
      window.addEventListener('orientationchange', handleOrientationChange);

      return () => {
        window.removeEventListener('orientationchange', handleOrientationChange);
      };
    }, []);

    // Initialize profanity filter
    useEffect(() => {
      initProfanityFilter();
    }, []);

	return (
		<>
		<Head>
			<title>Kortreist</title>
			<meta name="description" content="Kortreist hjelper deg å velge en grønnere reise til jobb." />
			<link rel='manifest' href={`${process.env.NEXT_PUBLIC_BASE_PATH}/manifest.json`} />
      <link
        rel="preload"
        as="image"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/Scenery.png`}
        type="image/png"
      />
		</Head>
		
    <RequireAuth>
		<ThemeProvider
		attribute="class"
		defaultTheme="light"
		enableSystem={false} 
		disableTransitionOnChange
		>
      <Page>
        <Section>
      
        <Component {...pageProps} />

      </Section>
      <Footer />
      </Page>

		</ThemeProvider>
    </RequireAuth>
      
      {/* Only render the Navbar if showNavbar is true */}
			{showNavbar && <Navbar />}
      <Toaster
        position="top-center"
        containerClassName="toast-safe-area"
      />
		</>
	)
}

