import { useStorage } from '../../state/storages';
import GeneralHistory from '../history/GeneralHistory';
import { arrowSvg } from '../svg/arrow';
import { balanceSvg } from '../svg/balance';
import { Storage, Transaction } from '../types';
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

const useStatisticData = (storage: Storage) => {
	const initData: StatisticsTransaction = {
		all: {
			name: 'Amount',
			amount: storage.amount,
			transactions: storage.transactions,
			icon: balanceSvg,
			unit: storage.unit,
		},
		income: {
			name: 'Income',
			amount: 0,
			transactions: [],
			icon: arrowSvg,
			unit: storage.unit,
		},
		expense: {
			name: 'Expense',
			amount: 0,
			transactions: [],
			icon: arrowSvg,
			unit: storage.unit,
		},
	};

	const data = storage.transactions.reduce(
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
	const { storage } = useStorage();

	if (!storage) {
		return <div>loading...</div>;
	}

	const data = useStatisticData(storage);

	return (
		<>
			<TotalCards {...data} />
			<StatisticGraph />
			<GeneralHistory {...data} />
		</>
	);
};

export default Statistics;

