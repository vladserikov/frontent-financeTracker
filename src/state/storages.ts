import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import {
	postStorage,
	putStorage,
	removeStorage,
} from '../app/storages/utils/storages';
import { Storage } from '../app/types';
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
	addStorage: async (newStorage) => {
		try {
			const result = await postStorage(newStorage);

			set(({ storages }) => ({ storages: storages.concat(result) }));
		} catch (error) {
			console.log(error);
		}
	},
	removeStorage: async (id) => {
		try {
			const result = await removeStorage(id);
			console.log({ result });
			set(({ storages }) => {
				const filterStorages = storages.filter((s) => s.id !== id);
				return { storages: filterStorages };
			});
		} catch (error) {
			console.log(error);
		}
	},
	initStorages: (storages) => set(() => ({ storages })),
	updateStorage: async (id, updateStorage) => {
		try {
			const data = await putStorage<Storage>(id, updateStorage);
			set(({ storages }) => {
				return { storages: storages.map((s) => (s.id === id ? data : s)) };
			});
		} catch (error) {
			console.log(error);
		}
	},
}));

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Store current Storage', useStorage);

	mountStoreDevtool('Store AllStorages', useStorages);
}

