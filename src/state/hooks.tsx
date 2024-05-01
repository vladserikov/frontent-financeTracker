import { createSelector } from '@reduxjs/toolkit';
import { RootStore } from './store';

export const walletSelector = createSelector(
	[(state: RootStore) => state.wallet],
	(wallet) => wallet
);
export const walletIdSelector = createSelector(
	[(state: RootStore) => state.wallet],
	(wallet) => wallet.id
);

export const walletAddTransactionData = createSelector(
	[(state: RootStore) => state.wallet],
	(wallet) => [wallet.id, wallet.unit, wallet.name]
);

