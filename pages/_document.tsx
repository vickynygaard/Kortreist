import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta charSet='utf-8' />
				<link rel="icon" type="image/png" sizes="16x16" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/favicon/favicon-16x16.png`} />
				<link rel="icon" type="image/png" sizes="32x32" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/favicon/favicon-32x32.png`} />
				<link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/favicon/favicon.ico`} />

				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
				/>
				<meta
					name='theme-color'
					content='#18181b'
					media='(prefers-color-scheme: dark)'
				/>
				<meta name='theme-color' content='#f4f4f5' />
				<link rel='apple-touch-icon' href={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/favicon/icon-192.png`} />
				<link rel='manifest' href={`${process.env.NEXT_PUBLIC_BASE_PATH}/manifest.json`} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
