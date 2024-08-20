// import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
	measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
// const analytics = getAnalytics(app)

interface FirebaseError {
	code: number
	message: string
	errors?: Array<{
		message: string
		domain: string
		reason: string
	}>
}

function isFirebaseError(error: any): error is FirebaseError {
	return (
		typeof error === 'object' &&
		error !== null &&
		'code' in error &&
		'message' in error
	)
}

try {
	// some code that might throw an error
} catch (error) {
	if (isFirebaseError(error)) {
		console.log(`Error Code: ${error.code}`)
		console.log(`Error Message: ${error.message}`)
		if (error.errors) {
			error.errors.forEach(err => {
				console.log(
					`Error Detail: ${err.message}, Domain: ${err.domain}, Reason: ${err.reason}`
				)
			})
		}
	} else {
		console.log('An unknown error occurred')
	}
}
