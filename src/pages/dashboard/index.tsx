import Statistic from './components/Statistic'
import StatisticDateSelect from './components/StatisticDateSelect'

const Dashboard = () => {
	return (
		<div>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl'>Overview</h1>
				<StatisticDateSelect />
			</div>
			<Statistic />
		</div>
	)
}

export default Dashboard
