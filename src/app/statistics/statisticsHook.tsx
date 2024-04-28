import { arrowSvg } from '../svg/arrow';
import { balanceSvg } from '../svg/balance';
import type { TransactionSummary, Wallet } from '../types';

export const useStatisticData = (wallet: Wallet) => {
	const initData: TransactionSummary = {
		aggregate: {
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

