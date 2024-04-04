import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from './state/user';

const baseUrl = '/api/storage';
const getStorages = async (token: string) => {
	const request = await axios.get(baseUrl, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return request.data;
};

export const Storage = () => {
	const [storages, setStorages] = useState([]);

	const user = useUser((state) => state.user);

	useEffect(() => {
		if (user?.token) {
			const initStorages = async () => {
				const data = await getStorages(user.token);
				console.log(data);
				setStorages(data);
			};
			initStorages();
		}
	}, [user]);
	console.log(storages);

	return (
		<div>
			<div>
				{user?.name}
				{user?.username}
			</div>
		</div>
	);
};

