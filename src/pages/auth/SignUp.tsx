import Input from '@/components/ui/input'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PasswordCreteria from './components/PasswordCreteria'

const SignUp = () => {
	const [password, setPassword] = useState('')
	const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
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

					<h1 className='text-2xl font-semibold text-center'>Create account</h1>
				</div>
				<form onSubmit={handleRegister}>
					<Input type='text' placeholder='Full name' icon='/icons/user.svg' />
					<Input type='text' placeholder='Email' icon='/icons/email.svg' />
					<Input
						type='password'
						onChange={e => setPassword(e.target.value)}
						placeholder='Password'
						icon='/icons/password.svg'
					/>
					<PasswordCreteria password={password} />

					<button disabled className='primary-btn mt-2'>
						Sign up
					</button>
				</form>
			</div>
		</div>
	)
}

export default SignUp
