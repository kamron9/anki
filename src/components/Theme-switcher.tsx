import sunIcon from '@/assets/icons/sun.svg'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import moonIcon from '..//assets/icons/moon.svg'
import { useTheme } from './theme-provider'

function ThemeSwitcher() {
	const { setTheme, theme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					size='icon'
					className='flex items-center justify-center h-[40px] outline-none focus:outline-none'
				>
					{theme === 'dark' ? (
						<img
							src={moonIcon}
							width={30}
							height={30}
							alt='moon-icon'
							className='h-[20px]'
						/>
					) : (
						<img
							src={sunIcon}
							width={30}
							height={30}
							alt='sun-icon'
							className='h-[20px]'
						/>
					)}

					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => setTheme('light')}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
export default ThemeSwitcher
