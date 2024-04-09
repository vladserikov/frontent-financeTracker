import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { StoragesState, StorageState } from './types';

export const useStorage = create<StorageState>()((set) => ({
	storage: {
		amount: 0,
		id: '',
		name: '',
		transactions: [],
		unit: '',
		userId: '',
	},
	changeName: (newName) =>
		set(({ storage }) => ({ storage: { ...storage, name: newName } })),
	changeAmount: (newAmount) =>
		set(({ storage }) => ({ storage: { ...storage, amount: newAmount } })),
	changeUnit: (newUnit) =>
		set(({ storage }) => ({ storage: { ...storage, unit: newUnit } })),
	initStorage: (storage) => set(() => ({ storage })),
}));

export const useStorages = create<StoragesState>()((set) => ({
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

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Store current Storage', useStorage);

	mountStoreDevtool('Store AllStorages', useStorages);
}

