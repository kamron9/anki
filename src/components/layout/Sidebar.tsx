import { sidebar } from '@/constant/sidebar'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
	return (
		<aside className='w-[320px] bg-[var(--header-dark)] dark:bg-inherit sticky z-20 left-0 top-0 h-screen'>
			<div className='pt-2 p-[var(--layout-padding)]'>
				<div className='flex items-center gap-2'>
					<img src='/icons/logo.svg' alt='logo' />
					<span className='text-white'>ankicard</span>
				</div>
				<div className='pt-10'>
					{sidebar.map(({ category, items, id }) => (
						<div key={id} className='mb-3'>
							<span className='text-[var(--navgroup-title)] text-sm inline-block mb-2'>
								{category}
							</span>
							{items.map(({ Icon, id, path, title }) => (
								<NavLink
									key={id}
									to={path}
									className='block px-3 py-2 rounded-md text-white '
								>
									<div className='flex items-center space-x-2 '>
										<Icon />
										<span>{title}</span>
									</div>
								</NavLink>
							))}
						</div>
					))}
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
