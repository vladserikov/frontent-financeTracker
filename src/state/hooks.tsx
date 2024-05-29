import { createSelector } from '@reduxjs/toolkit';

import { RootStore } from './store';

export const walletSelector = (state: RootStore) => state.wallet;

export const walletIdSelector = createSelector(
	[walletSelector],
	(wallet) => wallet.id
);

export const walletAddTransactionData = createSelector(
	[walletSelector],
	(wallet) => [wallet.id, wallet.unit, wallet.name]
);

