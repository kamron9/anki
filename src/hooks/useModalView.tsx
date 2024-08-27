import { useState } from 'react'

type TUseModalView = {
	isOpen: boolean
	openModal: () => void
	closeModal: () => void
}

export const useModalView = (): TUseModalView => {
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)

	return { isOpen, openModal, closeModal }
}
