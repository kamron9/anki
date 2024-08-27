import SignIn from '@/pages/auth/SignIn'
import SignUp from '@/pages/auth/SignUp'
import VerifyEmail from '@/pages/auth/VerifyEmail'
import HomePage from '@/pages/home'
import { useAuthStore } from '@/store/useAuthStore'

import Layout from '@/components/layout/Layout'
import CardsPage from '@/pages/cards'
import Dashboard from '@/pages/dashboard'
import Todo from '@/pages/todo'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const Root = () => {
	const { isCheckingAuth, checkAuth } = useAuthStore()
	useEffect(() => {
		checkAuth()
	}, [checkAuth])

	if (isCheckingAuth) return <h1>loading...</h1>

	return (
		<>
			<Routes>
				<Route
					element={
						<PrivateRoutes>
							<Layout />
						</PrivateRoutes>
					}
				>
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/cards' element={<CardsPage />} />
					<Route path='/todo' element={<Todo />} />
				</Route>

				<Route
					path='/'
					element={
						<PublicRoutes>
							<HomePage />
						</PublicRoutes>
					}
				/>
				<Route
					path='/signin'
					element={
						<PublicRoutes>
							<SignIn />
						</PublicRoutes>
					}
				/>
				<Route
					path='/signup'
					element={
						<PublicRoutes>
							<SignUp />
						</PublicRoutes>
					}
				/>
				<Route path='/verify-email' element={<VerifyEmail />} />
			</Routes>
			<Toaster />
		</>
	)
}

export default Root
