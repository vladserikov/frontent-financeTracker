import { User } from '../types';

const storageNameAtUser = 'localUser';

export const getLocalStorageUser = () => {
	const userString = localStorage.getItem(storageNameAtUser);
	return userString ? (JSON.parse(userString) as User) : null;
};
export const setLocalStorageUser = (user: User) => {
	localStorage.setItem(storageNameAtUser, JSON.stringify(user));
};

export const removeLocalStorageUser = () => {
	localStorage.removeItem(storageNameAtUser);
};
