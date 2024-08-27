import { useAuthStore } from '@/store/useAuthStore'
import React from 'react'
import { Navigate } from 'react-router-dom'

const RedirectAuth = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated, user } = useAuthStore()

	if (isAuthenticated && user?.isVerified) {
		return <Navigate to={'/dashboard'} />
	}
	return children
}

export default RedirectAuth
