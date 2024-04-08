import axios from 'axios';

const baseUrl = '/api/storage';

export const getAllStorages = async (token: string) => {
	const { data } = await axios.get(baseUrl, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return data;
};

