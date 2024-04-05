import axios from 'axios';

const baseUrl = '/api/storage';
export const getStorages = async (token: string) => {
	const request = await axios.get(baseUrl, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return request.data;
};

