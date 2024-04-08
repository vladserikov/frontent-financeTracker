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

type Transaction = {
	amount: number;
	category: string;
	unit: string;
	date: Date;
	comment: string;
	transactionType: 'Income' | 'Expense';
};

type Storage = {
	name: string;
	amount: number;
	transactions: Transaction[];
	unit: string;
	id: string;
	userId: string;
	changeName: (newName: string) => void;
	changeUnit: (newUnit: string) => void;
	changeAmount: (newAmount: number) => void;
};

export const useStorage = create<Storage>()((set) => ({
	amount: 0,
	id: '',
	name: '',
	transactions: [],
	unit: '',
	userId: '',
	changeName: (newName) => set((state) => ({ ...state, name: newName })),
	changeAmount: (newAmount) =>
		set((state) => ({ ...state, amount: newAmount })),
	changeUnit: (newUnit) => set((state) => ({ ...state, unit: newUnit })),
}));

type Storages = {
	storages: Storage[];
	addStorage: (newStorage: Storage) => void;
	removeStorage: (id: string) => void;
	initStorages: (storages: Storage[]) => void;
};

export const useStorages = create<Storages>()((set) => ({
	storages: [],
	addStorage: (newStorage) =>
		set(({ storages }) => ({ storages: storages.concat(newStorage) })),
	removeStorage: (id) =>
		set(({ storages }) => {
			const filterStorages = storages.filter((s) => s.id !== id);
			return { storages: filterStorages };
		}),
	initStorages: (storages) => set(() => ({ storages })),
}));

