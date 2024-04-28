import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Wallet } from '../app/types';
import { getCookie } from '../app/utils/localObject';

export const walletApi = createApi({
	reducerPath: 'walletApi',
	tagTypes: ['Wallets'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001/api',
	}),
	endpoints: (build) => ({
		getAllWallets: build.query({
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
	}),
});

export const { useCreateWalletMutation, useGetAllWalletsQuery } = walletApi;

