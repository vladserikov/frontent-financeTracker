import { createSlice, PayloadAction } from '@reduxjs/toolkit/react';
import { Wallet } from '../app/types';

const initialState: Wallet = {
	amount: 0,
	id: '',
	name: '',
	transactions: [],
	unit: '',
	userId: '',
};

export const walletSlicer = createSlice({
	name: 'wallet',
	initialState,
	reducers: {
		changeName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		changeAmount: (state, action: PayloadAction<number>) => {
			state.amount = action.payload;
		},
		changeUnit: (state, action: PayloadAction<string>) => {
			state.unit = action.payload;
		},
		initWallet: (_state, action: PayloadAction<Wallet>) => {
			return action.payload;
		},
		changeWallet: (_state, action: PayloadAction<Wallet>) => {
			return action.payload;
		},
	},
});

export const {
	changeAmount,
	changeName,
	changeUnit,
	initWallet,
	changeWallet,
} = walletSlicer.actions;

export const walletReducer = walletSlicer.reducer;

