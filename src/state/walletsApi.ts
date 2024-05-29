import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { AddTransaction, Transaction, Wallet } from '../app/types';
import { getCookie } from '../app/utils/localObject';
import { addWalletTransaction, updateTransaction } from './wallet';

export const walletApi = createApi({
	reducerPath: 'walletApi',
	tagTypes: ['Wallets', 'Transaction'],
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
	}),
	endpoints: (build) => ({
		getAllWallets: build.query<Wallet[], void>({
			query: () => ({
				url: 'wallet',
				mode: 'cors',
				headers: {
					Authorization: `Bearer ${getCookie('token')}`,
				},
			}),
			providesTags: ['Wallets'],
		}),
		createWallet: build.mutation<
			Wallet,
			Omit<Wallet, 'transactions' | 'id' | 'userId'>
		>({
			query: (body) => ({
				url: 'wallet',
				body,
				method: 'POST',
				mode: 'cors',
				headers: {
					Authorization: `Bearer ${getCookie('token')}`,
				},
			}),
			invalidatesTags: ['Wallets'],
		}),
		editWallet: build.mutation<Wallet, Wallet>({
			query: (body) => ({
				url: `wallet/${body.id}`,
				method: 'PUT',
				mode: 'cors',
				headers: {
					Authorization: `Bearer ${getCookie('token')}`,
				},
				body,
			}),
			invalidatesTags: ['Wallets'],
		}),
		getTransaction: build.query({
			query: (id: string) => ({
				url: `transaction/${id}`,
				mode: 'cors',
				headers: {
					Authorization: `Bearer ${getCookie('token')}`,
				},
			}),
		}),
		addTransaction: build.mutation<Transaction, AddTransaction>({
			query: (body) => ({
				url: 'transaction',
				headers: {
					Authorization: `Bearer ${getCookie('token')}`,
				},
				body,
				method: 'POST',
			}),
			invalidatesTags: ['Wallets'],
			async onQueryStarted(_arg, api) {
				try {
					const { data } = await api.queryFulfilled;
					api.dispatch(addWalletTransaction(data));
				} catch (error) {
					console.log(error);
				}
			},
		}),
		updateTransaction: build.mutation<Transaction, Transaction>({
			query: ({ id, ...body }) => ({
				url: `transaction/${id}`,
				method: 'PUT',
				body,
				headers: {
					Authorization: `Bearer ${getCookie('token')}`,
				},
			}),
			async onQueryStarted(_arg, api) {
				try {
					const { data } = await api.queryFulfilled;
					api.dispatch(updateTransaction(data));
				} catch (error) {
					console.log(error);
				}
			},
		}),
	}),
});

export const {
	useCreateWalletMutation,
	useGetAllWalletsQuery,
	useEditWalletMutation,
	useGetTransactionQuery,
	useAddTransactionMutation,
	useUpdateTransactionMutation,
} = walletApi;

