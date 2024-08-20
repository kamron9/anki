import ThemeSwitcher from '@/components/Theme-switcher'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='w-full h-[70px]'>
			<div className='h-full flex items-center justify-between'>
				<h1 className='text-lg'>ankicard</h1>
				<div className='flex items-center gap-4'>
					<ThemeSwitcher />
					<Link to='/signin'>
						<Button>Login</Button>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
