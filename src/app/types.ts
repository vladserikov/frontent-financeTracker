export type User = {
	username: string;
	name: string;
};

export type Transaction = {
	amount: number;
	category: string;
	unit: string;
	date: Date;
	comment: string;
	transactionType: 'Income' | 'Expense';
	id: string;
};

export type NewTransaction = Omit<Transaction, 'id'>;

export type Wallet = {
	name: string;
	amount: number;
	transactions: Transaction[];
	unit: string;
	id: string;
	userId: string;
};

export type SummaryEntity = {
	name: 'Amount' | 'Income' | 'Expense';
	amount: number;
	transactions: Transaction[];
	icon: JSX.Element;
	unit: string;
};

export type TransactionSummary = {
	income: SummaryEntity;
	expense: SummaryEntity;
	aggregate: SummaryEntity;
};

export type KeysTransactionSummary = keyof TransactionSummary;

export type AddTransaction = Omit<Transaction, 'id'> & { walletId: string };

export type ErrorSchemaObject<T> = {
	errors?: T;
	message?: string | null;
};
