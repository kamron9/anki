import SignIn from '@/pages/auth/SignIn'
import SignUp from '@/pages/auth/SignUp'
import VerifyEmail from '@/pages/auth/VerifyEmail'
import Dashboard from '@/pages/dashboard'
import HomePage from '@/pages/home'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'

const Root = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signin' element={<SignIn />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/verify-email' element={<VerifyEmail />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
			<Toaster />
		</>
	)
}

export default Root
