import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import { useRouter } from 'next/router' // ✅ Import useRouter
import '@/styles/globals.css'
import { msalConfig } from "../msalConfig";
import { PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'

const msalInstance = new PublicClientApplication(msalConfig);


export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter(); // ✅ Get the current route
	const hideNavbarRoutes = ["/login"]; // ✅ Define routes to hide navbar

	const showNavbar = !hideNavbarRoutes.includes(router.pathname); // ✅ Check if navbar should be shown

	return (
		<MsalProvider instance={msalInstance}>
		<>
			<Head>
				<title>Kortreist</title>
				<meta name="description" content="Kortreist hjelper deg å velge en grønnere reise til jobb." />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			
			<ThemeProvider attribute='class' defaultTheme='system' disableTransitionOnChange>
				<div className='mx-auto max-w-screen-md pb-14 px-safe sm:pb-0'>
					<Component {...pageProps} />
				</div>
			</ThemeProvider>

			{/* ✅ Only render the Navbar if showNavbar is true */}
			{showNavbar && <Navbar />}
			const msalInstance = new PublicClientApplication(msalConfig);
		</>
		</MsalProvider>
	)
}

