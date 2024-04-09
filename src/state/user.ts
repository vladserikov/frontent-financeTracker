import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { UserState } from './types';

export const useUser = create<UserState>()((set) => ({
	user: null,
	initUser: (newUser) => set(() => ({ user: newUser })),
	clearUser: () => set(() => ({ user: null })),
}));

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Store User', useUser);
}

