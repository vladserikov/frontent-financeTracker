import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { AddTransaction, Transaction, Wallet } from '../app/types';
import { getCookie } from '../app/utils/localObject';

export const walletApi = createApi({
	reducerPath: 'walletApi',
	tagTypes: ['Wallets', 'Transaction'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001/api',
	}),
	endpoints: (build) => ({
		getAllWallets: build.query<Wallet[], any>({
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
			}),
			invalidatesTags: ['Wallets'],
		}),
	}),
});

export const {
	useCreateWalletMutation,
	useGetAllWalletsQuery,
	useEditWalletMutation,
	useGetTransactionQuery,
	useAddTransactionMutation,
} = walletApi;

