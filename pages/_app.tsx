import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {

	return (
		<>
		<Head>
			<title>Kortreist</title>
			<meta name="description" content="Kortreist hjelper deg å velge en grønnere reise til jobb." />
			<link rel="manifest" href="/manifest.json" />
		</Head>
		
		<ThemeProvider attribute='class' defaultTheme='system' disableTransitionOnChange>
			<div className='mx-auto max-w-screen-md pb-14 pt-14 px-safe sm:pb-0'>
			<Component {...pageProps} />
			</div>
		</ThemeProvider>
		
		<Navbar />
		</>
	)
}
