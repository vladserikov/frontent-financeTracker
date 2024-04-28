import { useSelector } from 'react-redux';
import { walletSelector } from '../../state/hooks';
import TransactionsHistory from '../history/TransactionsHistory';
import SummaryCards from '../ui/statistic/SummaryCards';
import StatisticGraph from './StatisticGraph';
import { useStatisticData } from './statisticsHook';

const Statistics = () => {
	const wallet = useSelector(walletSelector);
	const data = useStatisticData(wallet);

	return (
		<>
			<SummaryCards {...data} />
			<StatisticGraph />
			<TransactionsHistory {...data} />
		</>
	);
};

export default Statistics;

