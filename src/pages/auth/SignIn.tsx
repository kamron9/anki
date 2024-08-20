import Input from '@/components/ui/input'
import { Link } from 'react-router-dom'

const SignIn = () => {
	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}
	return (
		<div className='bg_wrapper flex items-center justify-center'>
			<div className='bg-[var(--form-dark)] p-8 rounded-md w-full max-w-[450px] mx-4'>
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
					<Input type='text' placeholder='Email' icon='/icons/email.svg' />
					<Input
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
