import { FC } from 'react'

interface IInput {
	placeholder: string
	icon: string
	onChange?: (e: any) => void
	type: string
	name?: string
}
const Input: FC<IInput> = ({ placeholder, icon, onChange, type, name }) => {
	return (
		<div className='w-full relative mb-4'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<img className='size-5' width={20} src={icon} alt={placeholder} />
			</div>
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				onChange={onChange}
				className='placeholder:text-gray-600 w-full pl-10 pr-3 py-2 bg-transparent  border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
		</div>
	)
}

export default Input
