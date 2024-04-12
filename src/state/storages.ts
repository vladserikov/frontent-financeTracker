import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { postStorage } from '../app/storages/utils/storages';
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
	addStorage: async (newStorage, token, cb) => {
		try {
			const result = await postStorage(newStorage, token);
			console.log({ result });

			set(({ storages }) => ({ storages: storages.concat(result) }));

			cb?.();
		} catch (error) {
			console.log(error);
		}
	},
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

