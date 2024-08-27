import Api from '@/api/axios'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IUser {
	email: string
	isVerified: boolean
	name: string
}
interface AuthState {
	user: IUser | null
	accessToken: string | null
	refreshToken: string | null
	error: any
	loading: boolean
	isAuthenticated: boolean
	isCheckingAuth: boolean
	signup: (email: string, password: string, fullName: string) => Promise<any>
	login: (email: string, password: string) => Promise<any>
	verifyEmail: (verificationCode: string) => Promise<any>
	checkAuth: () => Promise<any>
}

export const useAuthStore = create<AuthState>()(
	persist(
		set => ({
			user: null,
			accessToken: null,
			refreshToken: null,
			loading: false,
			error: null,
			isAuthenticated: false,
			isCheckingAuth: false,
			signup: async (email: string, password: string, fullName: string) => {
				set({ loading: true })
				try {
					const response = await Api.post('/api/auth/signup', {
						email,
						password,
						name: fullName,
					})
					set({
						user: response.data.user,
						isAuthenticated: true,
						error: null,
						loading: false,
					})
					return response.data
				} catch (error) {
					set({ error: error, loading: false })
				}
			},
			login: async (email: string, password: string) => {
				set({ loading: true })
				try {
					const response = await Api.post('/api/auth/login', {
						email,
						password,
					})
					set({
						user: response.data.user,
						isAuthenticated: true,
						error: null,
						loading: false,
					})
					return response.data
				} catch (error) {
					set({ error: error, loading: false })
				}
			},
			verifyEmail: async (verificationCode: string) => {
				set({ loading: true })
				try {
					const response = await Api.post('/api/auth/verify-email', {
						code: verificationCode,
					})
					set({
						user: response.data.user,
						error: null,
						loading: false,
						isAuthenticated: true,
						isCheckingAuth: false,
					})
					return response.data
				} catch (error: any) {
					set({ error: error?.response?.data, loading: false })
				}
			},
			checkAuth: async () => {
				set({ isCheckingAuth: true, error: null })
				try {
					const response = await Api.get('/api/auth/check-auth')
					set({
						user: response.data.user,
						isAuthenticated: true,
						isCheckingAuth: false,
					})
				} catch (error) {
					set({
						user: null,
						isAuthenticated: false,
						isCheckingAuth: false,
					})
				}
			},
		}),
		{
			name: 'user-credentials',
			getStorage: () => localStorage,
		}
	)
)
