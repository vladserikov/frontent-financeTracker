import axios from 'axios';

import { NewUser } from '../types';

const baseUrl = '/api/user';

export const registrationAction = async (loginObj: NewUser) => {
	const request = await axios.post(baseUrl, loginObj);

	if (request.statusText === 'Created') return request.data;
	throw new Error(request.data.error);
};

