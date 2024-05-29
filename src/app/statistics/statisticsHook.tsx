import { arrowSvg } from '../svg/arrow';
import { balanceSvg } from '../svg/balance';
import type { TransactionSummary, Wallet } from '../types';

export const useStatisticData = (wallet: Wallet) => {
	const initData: TransactionSummary = {
		aggregate: {
			name: 'amount',
			amount: wallet.amount,
			transactions: wallet.transactions,
			icon: balanceSvg,
			unit: wallet.unit,
			text: 'Сумма'
		},
		income: {
			name: 'income',
			amount: 0,
			transactions: [],
			icon: arrowSvg,
			unit: wallet.unit,
			text: 'Доходы'
		},
		expense: {
			name: 'expense',
			amount: 0,
			transactions: [],
			icon: arrowSvg,
			unit: wallet.unit,
			text: 'Расходы'
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

