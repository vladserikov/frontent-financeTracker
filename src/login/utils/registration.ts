import axios from 'axios';

const baseUrl = '/api/user';

export const registrationAction = async (loginObj: {
	username: string;
	password: string;
	name: string;
}) => {
	const request = await axios.post(baseUrl, loginObj);

	if (request.statusText === 'Created') return request.data;
	throw new Error(request.data.error);
};

