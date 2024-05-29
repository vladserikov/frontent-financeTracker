import { configureStore } from '@reduxjs/toolkit';

import { walletReducer } from './wallet';
import { walletApi } from './walletsApi';

export const store = configureStore({
	reducer: {
		[walletApi.reducerPath]: walletApi.reducer,
		wallet: walletReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(walletApi.middleware),
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

