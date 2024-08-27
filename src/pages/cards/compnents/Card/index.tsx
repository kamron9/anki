import { useCardStore } from '@/store/useCardStore'
import { useState } from 'react'
import './card.css'

const Card = () => {
	const { cards } = useCardStore()

	const [flipped, setFlipped] = useState<{ [key: string]: boolean }>({})

	const handleFlip = (id: string) => {
		setFlipped(prev => ({ ...prev, [id]: !prev[id] }))
	}
	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
	}
	return (
		<div className='mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,260px))] gap-2'>
			{cards.map(card => (
				<div
					key={card._id}
					className={`card ${flipped[card._id] ? 'flipped' : ''} `}
					onClick={() => handleFlip(card._id)}
				>
					<div className='card-inner rounded-md bg-[var(--card-light)] dark:bg-[var(--card-dark)]'>
						<div className='card-front'>
							<div className='flex flex-col justify-between items-center'>
								<p className='text-lg font-semibold text-gray-900 dark:text-white text-center'>
									{card.front}
								</p>
								<p className='text-sm text-gray-400 dark:text-gray-300 text-center'>
									{card.pronunciation}
								</p>
							</div>
						</div>
						<div className='card-back'>
							<p className='text-lg font-semibold text-gray-900 dark:text-white'>
								{card.back}
							</p>
							{/* card actions */}
							<div className='card-actions'>
								<button
									onClick={handleButtonClick}
									className='bg-[#fff1f3] text-[#ff375b] dark:bg-[#351f21] dark:text-[#ff5c6c]'
								>
									Hard
								</button>
								<button
									onClick={handleButtonClick}
									className='bg-[#eef8ff] text-[#0093f0] dark:bg-[#1a2e3b] dark:text-[#00a8ff]'
								>
									Easy
								</button>
								<button
									onClick={handleButtonClick}
									className='bg-[#f6ffeb] text-[#47c700] dark:bg-[#2b361a] dark:text-[#7de543]'
								>
									Good
								</button>
								<button
									onClick={handleButtonClick}
									className='bg-[#f8f8f8] text-[#333] dark:bg-[#1a1a1a] dark:text-[#fff]'
								>
									Edit
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Card
