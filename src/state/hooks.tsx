import { createSelector } from '@reduxjs/toolkit';
import { RootStore } from './store';

export const walletSelector = createSelector(
	[(state: RootStore) => state.wallet],
	(wallet) => wallet
);
