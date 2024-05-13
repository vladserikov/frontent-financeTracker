import { createContext } from 'react';
import type { TransactionSummary } from '../types';

export type StatisticContextProps = {
	// data: TransactionSummary;
	currentType: keyof TransactionSummary;
	changeType: React.Dispatch<React.SetStateAction<keyof TransactionSummary>>;
};

// const initData: TransactionSummary = {
// 	aggregate: {
// 		name: 'Amount',
// 		amount: 0,
// 		transactions: [],
// 		icon: balanceSvg,
// 		unit: '',
// 	},
// 	income: {
// 		name: 'Income',
// 		amount: 0,
// 		transactions: [],
// 		icon: arrowSvg,
// 		unit: '',
// 	},
// 	expense: {
// 		name: 'Expense',
// 		amount: 0,
// 		transactions: [],
// 		icon: arrowSvg,
// 		unit: '',
// 	},
// };

const defaultContext: StatisticContextProps = {
	changeType: () => {},
	currentType: 'income',
	// data: initData,
};

export const StatisticContext =
	createContext<StatisticContextProps>(defaultContext);

