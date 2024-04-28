import { useSelector } from 'react-redux';
import { walletSelector } from '../../state/hooks';
import GeneralHistory from '../history/GeneralHistory';
import { arrowSvg } from '../svg/arrow';
import { balanceSvg } from '../svg/balance';
import { Transaction, Wallet } from '../types';
import StatisticGraph from './StatisticGraph';
import TotalCards from './TotalCards';

export type ValueStatistic = {
	name: 'Amount' | 'Income' | 'Expense';
	amount: number;
	transactions: Transaction[];
	icon: JSX.Element;
	unit: string;
};

export type StatisticsTransaction = {
	income: ValueStatistic;
	expense: ValueStatistic;
	all: ValueStatistic;
};

export type KeysStatistics = keyof StatisticsTransaction;

const useStatisticData = (wallet: Wallet) => {
	const initData: StatisticsTransaction = {
		all: {
			name: 'Amount',
			amount: wallet.amount,
			transactions: wallet.transactions,
			icon: balanceSvg,
			unit: wallet.unit,
		},
		income: {
			name: 'Income',
			amount: 0,
			transactions: [],
			icon: arrowSvg,
			unit: wallet.unit,
		},
		expense: {
			name: 'Expense',
			amount: 0,
			transactions: [],
			icon: arrowSvg,
			unit: wallet.unit,
		},
	};

	const data = wallet.transactions.reduce(
		(prev, stor) => {
			if (stor.transactionType === 'Expense') {
				prev.expense.amount += stor.amount;
				prev.expense.transactions.push(stor);
			} else {
				prev.income.amount += stor.amount;
				prev.income.transactions.push(stor);
			}

			return prev;
		},
		{ ...initData }
	);

	return data;
};

const Statistics = () => {
	const wallet = useSelector(walletSelector);

	const data = useStatisticData(wallet);

	return (
		<>
			<TotalCards {...data} />
			<StatisticGraph />
			<GeneralHistory {...data} />
		</>
	);
};

export default Statistics;

