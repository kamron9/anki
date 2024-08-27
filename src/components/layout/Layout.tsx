import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
	return (
		<>
			<div className='main-layout flex'>
				<Sidebar />
				<div className='w-full'>
					<Header />
					<main className='p-[var(--content-padding)]'>
						<div className='container'>
							<Outlet />
						</div>
					</main>
				</div>
			</div>
		</>
	)
}

export default Layout
