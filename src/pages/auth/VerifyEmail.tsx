import { useAuthStore } from '@/store/useAuthStore'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const VerifyEmail = () => {
	const { verifyEmail, error } = useAuthStore() as any

	const [code, setCode] = useState(['', '', '', '', '', ''])
	const inputRefs = useRef<HTMLInputElement[]>([])

	const navigate = useNavigate()

	const handleChange = (index: number, value: string) => {
		const newCode = [...code]

		// Handle pasted content
		if (value.length > 1) {
			const pastedCode = value.slice(0, 6).split('')
			for (let i = 0; i < 6; i++) {
				newCode[i] = pastedCode[i] || ''
			}
			setCode(newCode)

			// Focus on the last non-empty input or the first empty one
			const lastFilledIndex = newCode.findIndex((digit: string) => digit !== '')
			const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5
			inputRefs.current[focusIndex].focus()
		} else {
			newCode[index] = value
			setCode(newCode)

			// Move focus to the next input field if value is entered
			if (value && index < 5) {
				;(inputRefs.current[index + 1] as HTMLInputElement).focus()
			}
		}
	}

	const handleKeyDown = (
		index: number,
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === 'Backspace' && !code[index] && index > 0) {
			;(inputRefs.current[index - 1] as HTMLInputElement).focus()
		}
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const verificationCode = code.join('')
		try {
			const data = await verifyEmail(verificationCode)

			if (data?.success) {
				toast.success('Email verified successfully')

				navigate('/dashboard')
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		if (code.every(digit => digit !== '')) {
			handleSubmit(new Event('submit') as any)
		}
	}, [code])

	return (
		<div className='bg_wrapper flex items-center justify-center'>
			<div className='bg-[var(--form-dark)] p-8 rounded-md w-full max-w-[450px] mx-6'>
				<div className='relative flex items-center justify-center sm:justify-center mb-6'>
					<div className='absolute left-0 z-10'>
						<Link to={'/'} className='flex items-center gap-1'>
							<img className='size-5' src='/icons/left-arrow.svg' alt='back' />
							<span className='text-sm sm:text-base'>back</span>
						</Link>
					</div>

					<h1 className='text-lg sm:text-2xl font-semibold text-center'>
						Verify email
					</h1>
				</div>
				<div>
					<div className='flex justify-between gap-1'>
						{code.map((digit, index) => (
							<input
								key={index}
								ref={el => (inputRefs.current[index] = el!)}
								type='text'
								maxLength={6}
								value={digit}
								onChange={e => handleChange(index, e.target.value)}
								onKeyDown={e => handleKeyDown(index, e)}
								className='w-10 h-10 sm:w-12 sm:h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none'
							/>
						))}
					</div>

					{error?.message && (
						<p className='text-red-500 mt-1'>{error?.message}</p>
					)}

					<button className='primary-btn mt-4'>Verify</button>
				</div>
			</div>
		</div>
	)
}

export default VerifyEmail
