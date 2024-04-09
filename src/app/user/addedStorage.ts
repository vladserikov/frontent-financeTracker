import axios from 'axios';

const baseUrl = '/api/storage';

export const addedStorage = async (
	newStorage: { name: string; amount: number; unit: string },
	token: string
) => {
	const { data } = await axios.post(baseUrl, newStorage, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return data;
};
