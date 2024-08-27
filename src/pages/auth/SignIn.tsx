import Input from '@/components/ui/input'
import { useAuthStore } from '@/store/useAuthStore'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
	const { login } = useAuthStore() as any
	const navigate = useNavigate()
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const email = (e.target as HTMLFormElement).email.value
		const password = (e.target as HTMLFormElement).password.value
		try {
			const data = await login(email, password)

			console.log(data)
			if (data?.user?.isVerified) {
				navigate('/dashboard')
			} else {
				toast.error('please verify your email')
			}
		} catch (error) {}
	}
	return (
		<div className='bg_wrapper flex items-center justify-center'>
			<div className='dark:bg-[var(--form-dark)] bg-white p-8 rounded-md w-full max-w-[450px] mx-4'>
				<div className='relative flex items-center justify-center mb-6'>
					<div className='absolute left-0 z-10'>
						<Link to={'/'} className='flex items-center gap-1'>
							<img className='size-5' src='/icons/left-arrow.svg' alt='back' />
							<span className='text-sm sm:text-base'>back</span>
						</Link>
					</div>

					<h1 className='text-xl sm:text-2xl font-semibold text-center'>
						Sign in
					</h1>
				</div>
				<form onSubmit={handleLogin}>
					<Input
						name='email'
						type='text'
						placeholder='Email'
						icon='/icons/email.svg'
					/>
					<Input
						name='password'
						type='password'
						placeholder='Password'
						icon='/icons/password.svg'
					/>

					<button className='primary-btn'>Login</button>
				</form>
				<hr className='my-5' />
				<div className='text-center mb-2'>
					<Link
						to='/forgot-password'
						className='inline-block text-sm sm:text-base  text-blue-500'
					>
						Forgot password?
					</Link>
				</div>

				<div className='text-center'>
					<span>Don't have an account? </span>
					<Link
						to='/signup'
						className='text-sm sm:text-base mt-2 text-blue-500'
					>
						Sign up
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SignIn
