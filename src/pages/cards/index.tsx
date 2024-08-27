import { Button } from '@/components/ui/button'
import { useModalView } from '@/hooks/useModalView'
import { useCardStore } from '@/store/useCardStore'
import { useEffect } from 'react'
import AddCardModal from './compnents/AddCardModal'
import Card from './compnents/Card'

const CardsPage = () => {
	const { closeModal, isOpen, openModal } = useModalView()
	const { getCards } = useCardStore()
	useEffect(() => {
		getCards()
	}, [])
	return (
		<div className='w-full'>
			<div className='flex justify-end'>
				<Button onClick={() => openModal()}>Add Card</Button>
			</div>
			<Card />
			<AddCardModal isOpen={isOpen} closeModal={closeModal} />
		</div>
	)
}

export default CardsPage
