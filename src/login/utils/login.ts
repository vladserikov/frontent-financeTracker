import axios from 'axios';

const baseUrl = '/api/login';
export const loginAction = async (loginObj: {
	username: string;
	password: string;
}) => {
	const request = await axios.post(baseUrl, loginObj);

	if (request.statusText === 'Created') return request.data;
	throw new Error(request.data.error);
};

