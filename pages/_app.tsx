import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			disableTransitionOnChange
		>


			<Navbar />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
