import { useEffect, useState } from 'react';

import { useUser } from '../state/user';
import { getStorages } from './utils/storages';

export const Storage = () => {
	const [storages, setStorages] = useState([]);

	const user = useUser((state) => state.user);

	useEffect(() => {
		if (user?.token) {
			const initStorages = async () => {
				const data = await getStorages(user.token);
				setStorages(data);
			};
			initStorages();
		}
	}, [user]);
	// console.log(storages);

	return (
		<div>
			<div>
				{user?.name}
				{user?.username}
			</div>
		</div>
	);
};

