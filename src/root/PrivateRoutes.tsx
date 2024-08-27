import { useAuthStore } from '@/store/useAuthStore'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated, user } = useAuthStore()
	if (!isAuthenticated) return <Navigate to={'/signin'} replace />
	if (!user?.isVerified) return <Navigate to={'/verify-email'} replace />
	return children
}

export default PrivateRoutes
