const PasswordCreteria = ({ password }: { password: string }) => {
	const criteria = [
		{ label: 'At least 6 characters', met: password.length >= 6 },
		{ label: 'Contains uppercase letter', met: /[A-Z]/.test(password) },
		// { label: 'Contains lowercase letter', met: /[a-z]/.test(password) },
		{ label: 'Contains a number', met: /\d/.test(password) },
		// { label: 'Contains special character', met: /[^A-Za-z0-9]/.test(password) },
	]
	return (
		<div>
			{criteria.map((c, i) => (
				<div key={i} className='flex items-center gap-2'>
					<img
						className='size-5'
						src={c.met ? '/icons/check.svg' : '/icons/cross.svg'}
						alt={c.label}
					/>
					<span
						className={`${
							c.met ? 'text-green-500' : 'text-gray-500'
						} text-sm sm:text-base`}
					>
						{c.label}
					</span>
				</div>
			))}
		</div>
	)
}

export default PasswordCreteria
