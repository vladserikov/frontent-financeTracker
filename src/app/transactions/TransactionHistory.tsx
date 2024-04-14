import React from 'react';
import { Transaction } from '../types';

const TransactionHistory: React.FC<Transaction[]> = (props) => {
	const [start] = props;

	return <div>{start.amount}</div>;
};

export default TransactionHistory;

