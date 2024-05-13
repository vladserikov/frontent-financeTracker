import { createContext } from 'react';

import type { TransactionSummary } from '../types';

export type StatisticContextProps = {
	currentType: keyof TransactionSummary;
	changeType: React.Dispatch<React.SetStateAction<keyof TransactionSummary>>;
};

const defaultContext: StatisticContextProps = {
	changeType: () => {},
	currentType: 'income',
};

export const StatisticContext =
	createContext<StatisticContextProps>(defaultContext);

