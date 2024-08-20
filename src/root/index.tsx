import SignIn from '@/pages/auth/SignIn'
import SignUp from '@/pages/auth/SignUp'
import HomePage from '@/pages/home'
import { Route, Routes } from 'react-router-dom'

const Root = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/signin' element={<SignIn />} />
			<Route path='/signup' element={<SignUp />} />
		</Routes>
	)
}

export default Root
