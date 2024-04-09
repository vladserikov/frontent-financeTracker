import axios from 'axios';
import { Storage } from './../../types';

const getHeader = (token: string): { Authorization: string } => ({
	Authorization: `Bearer ${token}`,
});

const baseUrl = '/api/storage';
export const getAllStorages = async (token: string) => {
	const request = await axios.get(baseUrl, {
		headers: getHeader(token),
	});

	return request.data;
};

export type NewStorage = Pick<Storage, 'name' | 'amount' | 'unit'>;

export const addedStorage = async (newStorage: NewStorage, token: string) => {
	const { data } = await axios.post(baseUrl, newStorage, {
		headers: getHeader(token),
	});

	return data;
};

