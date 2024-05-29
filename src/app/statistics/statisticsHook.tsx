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
		(prev, transaction) => {
			if (transaction.transactionType === 'Expense') {
				prev.expense.amount += transaction.amount;
				prev.expense.transactions.push(transaction);
			} else {
				prev.income.amount += transaction.amount;
				prev.income.transactions.push(transaction);
			}

			return prev;
		},
		{ ...initData }
	);

	return data;
};

