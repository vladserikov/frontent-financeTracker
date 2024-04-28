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

