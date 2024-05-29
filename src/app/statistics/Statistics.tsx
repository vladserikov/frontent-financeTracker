import { useState } from 'react';
import { useSelector } from 'react-redux';

import { walletSelector } from '../../state/hooks';
import type { TransactionSummary } from '../types';
import SummaryCards from '../ui/statistic/SummaryCards';
import StatisticGraph from './graph/StatisticGraph';
import TransactionsHistory from './history/TransactionsHistory';
import { StatisticContext } from './statisticContext';
import { useStatisticData } from './statisticsHook';

const Statistics = () => {
	const wallet = useSelector(walletSelector);
	const data = useStatisticData(wallet);
	const [currentType, changeType] =
		useState<keyof TransactionSummary>('income');

	return (
		<>
			<StatisticContext.Provider value={{ currentType, changeType }}>
				<SummaryCards {...data} />
				<StatisticGraph {...data} />
				<TransactionsHistory {...data} />
			</StatisticContext.Provider>
		</>
	);
};

export default Statistics;

