const Statistic = () => {
	const statistic = [
		{
			id: 1,
			title: 'Total Orders',
			value: 200,
			text: 'Orders',
		},
		{
			id: 2,
			title: 'Total Revenue',
			value: 200,
			text: 'Revenue',
		},
		{
			id: 3,
			title: 'Total Customers',
			value: 200,
			text: 'Customers',
		},
		{
			id: 4,
			title: 'Total Products',
			value: 200,
			text: 'Products',
		},
	]
	return (
		<div className='mt-6 grid grid-cols-4 gap-4'>
			{statistic.map(stat => (
				<div
					key={stat.id}
					className='p-4 shadow-md rounded-lg bg-[var(--card-light)] dark:bg-[#242731]'
				>
					<h3 className='text-lg font-semibold'>{stat.title}</h3>
					<p className='text-3xl font-bold'>{stat.value}</p>
					<p className='text-sm text-gray-500'>{stat.text}</p>
				</div>
			))}
		</div>
	)
}

export default Statistic
