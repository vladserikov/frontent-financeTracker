import axios from 'axios';
import { getHeader } from '../../storages/utils/storages';
import { NewTransaction } from '../../types';

const baseApi = '/api/transaction';

export const postTransaction = async (
	storageId: string,
	newTransaction: NewTransaction
) => {
	const { data } = await axios.post(
		baseApi,
		{ ...newTransaction, storageId },
		{
			headers: getHeader(),
		}
	);

	return data;
};

