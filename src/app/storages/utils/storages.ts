import axios from 'axios';
import { NewTransaction, Storage } from './../../types';

const getHeader = (token: string): { Authorization: string } => ({
	Authorization: `Bearer ${token}`,
});

const baseUrl = '/api/storage';
export const getAllStorages = async (token: string) => {
	const { data } = await axios.get(baseUrl, {
		headers: getHeader(token),
	});

	return data;
};

export type NewStorage = Pick<Storage, 'name' | 'amount' | 'unit'>;

export const postStorage = async (newStorage: NewStorage, token: string) => {
	const { data } = await axios.post(baseUrl, newStorage, {
		headers: getHeader(token),
	});

	return data;
};

export const putStorage = async <T>(
	id: string,
	newStorage: NewStorage,
	token: string
): Promise<T> => {
	const { data } = await axios.put(`${baseUrl}/${id}`, newStorage, {
		headers: getHeader(token),
	});

	return data;
};

const testApi = '/api/transaction';

export const postTransaction = async (
	token: string,
	storageId: string,
	newTransaction: NewTransaction
) => {
	const { data } = await axios.post(
		testApi,
		{ ...newTransaction, storageId },
		{
			headers: getHeader(token),
		}
	);

	return data;
};

