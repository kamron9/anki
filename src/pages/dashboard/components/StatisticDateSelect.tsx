import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

import { useState } from 'react'

const StatisticDateSelect = () => {
	const [selectedItem, setSelectedItem] = useState('Daily')

	const items = ['Daily', 'Weekly', 'Monthly', 'Yarly']

	return (
		<Select>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder={selectedItem} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{items.map(item => (
						<SelectItem
							key={item}
							onClick={() => setSelectedItem(item)}
							value={item}
						>
							{item}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default StatisticDateSelect
