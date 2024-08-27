import Api from '@/api/axios'
import toast from 'react-hot-toast'
import { create } from 'zustand'

interface ICard {
	front: string
	back: string
	pronunciation?: string
}
interface ICardList extends ICard {
	_id: string
	createdAt: string
	updatedAt: string
}
interface ICardStore {
	cards: ICardList[]
	addCard: (card: ICard) => void
	getCards: () => void
}

export const useCardStore = create<ICardStore>(set => ({
	cards: [],
	addCard: async (card: ICard) => {
		try {
			const res = await Api.post('/api/cards/add', card)
			set(state => ({ cards: [...state.cards, res.data.card] }))
			toast.success('Card added')
		} catch (error) {
			toast.error('Failed to add card')
		}
	},
	getCards: async () => {
		try {
			const res = await Api.get('/api/cards')
			set({ cards: res.data.cards })
		} catch (error) {
			toast.error('Failed to get cards')
		}
	},
}))
