import { NewStorage } from '../app/storages/utils/storages';
import { Storage, User } from '../app/types';

export type UserState = {
	user: User | null;
	initUser: (newUser: User) => void;
	clearUser: () => void;
};

export type StorageState = {
	storage: Storage;
	changeName: (newName: string) => void;
	changeUnit: (newUnit: string) => void;
	changeAmount: (newAmount: number) => void;
	initStorage: (storage: Storage) => void;
};

export type StoragesState = {
	storages: Storage[];
	addStorage: (newStorage: NewStorage, token: string, cb?: () => void) => void;
	removeStorage: (id: string) => void;
	initStorages: (storages: Storage[]) => void;
};

