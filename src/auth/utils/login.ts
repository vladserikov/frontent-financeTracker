import axios from 'axios';

import { LoginUser } from '../types';

const baseUrl = '/api/login';

export const loginAction = async (loginObj: LoginUser) => {
	const request = await axios.post(baseUrl, loginObj);

	return request.data;
};

