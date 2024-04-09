export type User = {
	username: string;
	token: string;
	name: string;
};

export type Transaction = {
	amount: number;
	category: string;
	unit: string;
	date: Date;
	comment: string;
	transactionType: 'Income' | 'Expense';
};

export type Storage = {
	name: string;
	amount: number;
	transactions: Transaction[];
	unit: string;
	id: string;
	userId: string;
};

