import { useCardStore } from '@/store/useCardStore'
import { FC } from 'react'

interface AddCardModalProps {
	isOpen: boolean
	closeModal: () => void
}

const AddCardModal: FC<AddCardModalProps> = ({ isOpen, closeModal }) => {
	const { addCard } = useCardStore()
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget as HTMLFormElement
		const front = form.front.value
		const back = form.back.value
		const pronunciation = form.pronunciation.value

		addCard({ front, back, pronunciation })
	}

	if (!isOpen) return null
	return (
		<div
			style={{ zIndex: 9999 }}
			className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
		>
			<div className='bg-[#ffffff9e] dark:bg-[rgba(31,41,55,0.5)] backdrop-blur-md rounded-lg shadow-lg w-full max-w-lg p-6'>
				<div className='flex justify-between items-center'>
					<h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
						Add New Card
					</h2>
					<button
						onClick={() => closeModal()}
						className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
					>
						&times;
					</button>
				</div>

				<form className='mt-4' onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label
							htmlFor='front'
							className='block text-sm font-medium text-gray-700 dark:text-gray-300'
						>
							Front
						</label>
						<input
							type='text'
							id='front'
							className='mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
							placeholder='Front side text'
						/>
					</div>

					<div className='mb-4'>
						<label
							htmlFor='back'
							className='block text-sm font-medium text-gray-700 dark:text-gray-300'
						>
							Back
						</label>
						<input
							type='text'
							id='back'
							className='mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
							placeholder='Back side text'
						/>
					</div>

					<div className='mb-4'>
						<label
							htmlFor='pronunciation'
							className='block text-sm font-medium text-gray-700 dark:text-gray-300'
						>
							Pronunciation
						</label>
						<input
							type='text'
							id='pronunciation'
							className='mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
							placeholder='Pronunciation'
						/>
					</div>

					<div className='flex justify-end'>
						<button
							type='submit'
							className='inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm'
						>
							Add Card
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddCardModal
