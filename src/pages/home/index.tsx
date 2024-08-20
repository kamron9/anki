import { Link } from 'react-router-dom'
import Header from './components/Header'

const HomePage = () => {
	return (
		<div className='bg_wrapper h-screen'>
			<div className='container h-full'>
				<Header />

				<div className='relative w-full h-[calc(100%-70px)] flex flex-col items-center justify-center'>
					<h1 className='text-[28px] sm:text-[40px] lg:text-[50px] font-bold text-center'>
						Welcome to Powerfull <br />
						<span className='text-blue-500'>Anki Flash Cards</span>
					</h1>
					<Link to={'/signup'}>
						<button className='bg-blue-500 text-md md:text-2xl py-3 px-5 rounded-md mt-4 text-white'>
							Get started
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HomePage
