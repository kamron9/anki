import Input from '@/components/ui/input'
import { useAuthStore } from '@/store/useAuthStore'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PasswordCreteria from './components/PasswordCreteria'

const SignUp = () => {
	const [password, setPassword] = useState('')
	const { signup } = useAuthStore() as any

	const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const fullName = (e.target as HTMLFormElement)?.fullName?.value
		const email = (e.target as HTMLFormElement)?.email?.value
		const password = (e.target as HTMLFormElement)?.password?.value

		signup(fullName, email, password)
	}
	return (
		<div className='bg_wrapper flex items-center justify-center'>
			<div className='bg-[var(--form-dark)] p-8 rounded-md w-full max-w-[450px] mx-6'>
				<div className='relative flex items-center justify-center mb-6'>
					<div className='absolute left-0 z-10'>
						<Link
							to={'/'}
							className='flex items-center justify-center rounded-full gap-1'
						>
							<img className='size-5' src='/icons/left-arrow.svg' alt='back' />
							<span className='text-sm sm:text-base'>Back</span>
						</Link>
					</div>

					<h1 className='text-xl sm:text-2xl font-semibold text-center'>
						Sign up
					</h1>
				</div>
				<form onSubmit={handleRegister}>
					<Input
						name='fullName'
						type='text'
						placeholder='Full name'
						icon='/icons/user.svg'
					/>
					<Input
						name='email'
						type='text'
						placeholder='Email'
						icon='/icons/email.svg'
					/>
					<Input
						name='password'
						type='password'
						onChange={e => setPassword(e.target.value)}
						placeholder='Password'
						icon='/icons/password.svg'
					/>
					<PasswordCreteria password={password} />

					<button className='primary-btn mt-2'>Sign up</button>
				</form>
				<hr className='my-5' />
				<div className='text-center mb-2'>
					<span>Already have an account? </span>
					<Link
						to='/signin'
						className='inline-block text-sm sm:text-base  text-blue-500'
					>
						Sign in
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SignUp
