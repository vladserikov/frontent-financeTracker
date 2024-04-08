import { useEffect } from 'react';
import { useStorages, useUser } from '../state/user';
import StickMenu from '../ui/StickMenu';
import { bem } from '../utils/classnames';
import Balance from './Balance';
import { getAllStorages } from './userData';

const [block] = bem('home');

function User() {
	const user = useUser((state) => state.user);
	const { storages, initStorages } = useStorages();
	console.log({ user, storages });

	useEffect(() => {
		const fn = async () => {
			if (user) {
				try {
					const loadData = await getAllStorages(user.token);
					initStorages(loadData);
				} catch (error) {
					console.log(error);
				}
			}
		};

		fn();
	}, [user?.token]);

	return (
		<div className={block}>
			<StickMenu />

			<Balance />
		</div>
	);
}

export default User;

