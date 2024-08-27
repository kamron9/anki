import { useLocation } from 'react-router-dom'
import ThemeSwitcher from '../Theme-switcher'

const Header = () => {
	const { pathname } = useLocation()

	return (
		<header
			style={{ zIndex: 99999 }}
			className='header py-2 w-full min-h-[var(--header-height)] sticky left-0 top-0  border-b border-solid border-b-neutral-500 flex items-center'
		>
			<div className='p-[var(--layout-padding)] w-full flex items-center justify-end'>
				{/* search */}
				{/* {pathname === '/cards' && (
					<div className='max-w-[500px] w-full'>
						<input
							type='text'
							placeholder='Search'
							className='w-full bg-[var(--light-gray)] rounded-xl py-1 px-2  border-none'
						/>
					</div>
				)} */}

				{/* user */}
				<div>
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	)
}

export default Header
