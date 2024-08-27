import CardIcon from '@mui/icons-material/CreditCard'
import DashboardIcon from '@mui/icons-material/InsertChart'

import TodoIcon from '@mui/icons-material/FormatListNumbered'
import QuestionIcon from '@mui/icons-material/HelpOutline'
import SettingsIcon from '@mui/icons-material/Settings'

export const sidebar = [
	{
		id: 1,
		category: 'Dashboard',
		items: [
			{
				id: 1.1,
				title: 'Overview',
				Icon: DashboardIcon,
				path: '/dashboard',
			},
			{
				id: 1.2,
				title: 'Cards',
				Icon: CardIcon,
				path: '/cards',
			},
			{
				id: 1.3,
				title: 'Todo',
				Icon: TodoIcon,
				path: '/todo',
			},
		],
	},
	{
		id: 2,
		category: 'General',
		items: [
			{
				id: 1.4,
				title: 'Any questions?',
				Icon: QuestionIcon,
				path: '/questions',
			},
			{
				id: 1.5,
				title: 'Settings',
				Icon: SettingsIcon,
				path: '/settings',
			},
		],
	},
]
