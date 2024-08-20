import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile,
	User,
} from 'firebase/auth'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { auth } from '../firebase'

// interface IAuthState {
// 	user: User | null
// 	error: string | null
// 	loading: boolean
// 	signup: (email: string, password: string) => Promise<void>
// 	login: (email: string, password: string) => Promise<void>
// 	logout: () => Promise<void>
// 	checkAuthState: () => void
// }

export const useAuthStore = create(
	persist(
		set => ({
			user: null,
			error: null,
			isLoading: false,
			signup: async (fullName: string, email: string, password: string) => {
				set({ isLoading: true })
				try {
					const userCredential = await createUserWithEmailAndPassword(
						auth,
						email,
						password
					)
					const user = userCredential.user
					await sendEmailVerification(user)
					await updateProfile(user, {
						displayName: fullName,
					})

					set({ user, isLoading: false })

					console.log(user)
				} catch (error) {
					if (error instanceof Error) {
						set({ error: error.message, isLoading: false })
					}
				}
			},
		}),
		{
			name: 'auth-storage',
			getStorage: () => localStorage,
		}
	)
)
