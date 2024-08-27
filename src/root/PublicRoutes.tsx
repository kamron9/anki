import { useAuthStore } from '@/store/useAuthStore'

import { Navigate } from 'react-router-dom'

const PublicRoutes = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated, user } = useAuthStore()
	if (isAuthenticated && user?.isVerified) return <Navigate to={'/dashboard'} />
	return children
}

export default PublicRoutes
