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
							<span>back</span>
						</Link>
					</div>

					<h1 className='text-2xl font-semibold text-center'>Welcome back</h1>
				</div>
				<form onSubmit={handleLogin}>
					<Input type='text' placeholder='Email' icon='/icons/email.svg' />
					<Input
						type='password'
						placeholder='Password'
						icon='/icons/password.svg'
					/>
					<button disabled className='primary-btn'>
						Sign in
					</button>
				</form>
			</div>
		</div>
	)
}

export default SignIn
