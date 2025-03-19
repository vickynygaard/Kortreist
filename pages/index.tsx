import Page from '@/components/page'
import Section from '@/components/section'

const Index = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				Kortreist
			</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Kortreistr{' '}
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						Kortreist
					</span>{' '}
					Kortreist
				</p>

				<br />

				<p className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a
						href='https://github.com/mvllow/next-pwa-template'
						className='underline'
					>
						Kortreist
					</a>
				</p>
			</div>
		</Section>
	</Page>
)

export default Index
