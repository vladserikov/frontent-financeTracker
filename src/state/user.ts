import { create } from 'zustand';

type User = {
	username: string;
	token: string;
	name: string;
};

type UserState = {
	user: User | null;
	initUser: (newUser: User) => void;
	clearUser: () => void;
};

export const useUser = create<UserState>()((set) => ({
	user: null,
	initUser: (newUser) => set(() => ({ user: newUser })),
	clearUser: () => set(() => ({ user: null })),
}));

