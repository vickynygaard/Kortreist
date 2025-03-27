import Head from 'next/head'

interface Props {
	title?: string
	children: React.ReactNode
}

const Page = ({ title, children }: Props) => (
	<>
	  {title && (
		<Head>
		  <title>Kortreist | {title}</title>
		</Head>
	  )}
	  <main
		className="mx-auto max-w-screen-md px-safe w-full"
		style={{
		  paddingTop: 'var(--app-top-padding)',
		  paddingBottom: 'var(--app-bottom-padding)',
		}}
	  >
		{children}
	  </main>
	  
	</>
  );
  

export default Page
