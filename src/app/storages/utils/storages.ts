import axios from 'axios';
import { Storage } from './../../types';

const baseUrl = '/api/storage';
let TOKEN: string | null = null;

export const initToken = (newToken: string) => {
	TOKEN = newToken;
};

export const getHeader = (): { Authorization: string } => ({
	Authorization: `Bearer ${TOKEN}`,
});

export const getAllStorages = async () => {
	const { data } = await axios.get(baseUrl, {
		headers: getHeader(),
	});

	return data;
};

export type NewStorage = Pick<Storage, 'name' | 'amount' | 'unit'>;

export const postStorage = async (newStorage: NewStorage) => {
	const { data } = await axios.post(baseUrl, newStorage, {
		headers: getHeader(),
	});

	return data;
};

export const putStorage = async <T>(
	id: string,
	newStorage: NewStorage
): Promise<T> => {
	const { data } = await axios.put(`${baseUrl}/${id}`, newStorage, {
		headers: getHeader(),
	});

	return data;
};

export const removeStorage = async (id: string) => {
	const result = await axios.delete(`${baseUrl}/${id}`, {
		headers: getHeader(),
	});

	return result;
};

