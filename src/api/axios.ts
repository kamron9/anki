// src/axios.js

import axios from 'axios'

const Api = axios.create({
	baseURL: 'http://localhost:5000',
})
Api.defaults.withCredentials = true
// Api.interceptors.request.use(
// 	async config => {
// 		try {
// 			const token = localStorage.getItem('accessToken')
// 			if (token) {
// 				config.headers.Authorization = `Bearer ${token}`
// 			}
// 		} catch (error) {
// 			console.error('Error retrieving access token', error)
// 		}
// 		return config
// 	},
// 	error => {
// 		// Handle request error
// 		return Promise.reject(error)
// 	}
// )

// Api.interceptors.response.use(
// 	response => response,
// 	async error => {
// 		const originalRequest = error.config
// 		if (error.response.status === 401 && !originalRequest._retry) {
// 			originalRequest._retry = true
// 			try {
// 				const refreshToken = localStorage.getItem('refreshToken')
// 				const response = await axios.post(
// 					'https://anki-backend-gtnsp60gt-alimovks-projects.vercel.app/api/token/refresh',
// 					{ token: refreshToken }
// 				)
// 				const newAccessToken = response.data.accessToken
// 				localStorage.setItem('accessToken', newAccessToken)
// 				axios.defaults.headers.common[
// 					'Authorization'
// 				] = `Bearer ${newAccessToken}`
// 				return Api(originalRequest)
// 			} catch (refreshError) {
// 				console.error('Error refreshing access token', refreshError)
// 			}
// 		}
// 		return Promise.reject(error)
// 	}
// )

export default Api
