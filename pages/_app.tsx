import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			disableTransitionOnChange
		>
			<Head>
				<title>Kortreist</title>
				<meta name="description" content="Kortreist hjelper deg å velge den bærekraftige ruten til jobb." />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<Navbar />

			<Component {...pageProps} />
		</ThemeProvider>
	)
}
