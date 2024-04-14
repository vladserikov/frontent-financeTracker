import { useEffect } from 'react';
import { useStorages } from '../state/storages';
import { useUser } from '../state/user';
import Statistics from './statistics/Statistics';
import Storages from './storages/Storages';
import { getAllStorages } from './storages/utils/storages';
import { bem } from './utils/classnames';

const [contentLayer] = bem('layer');

const ContentContainer = () => {
	const { user } = useUser();
	const { initStorages } = useStorages();

	useEffect(() => {
		const fn = async () => {
			if (user?.token) {
				try {
					const loadData = await getAllStorages();
					initStorages(loadData);
				} catch (error) {
					console.log(error);
				}
			}
		};

		fn();
	}, [user?.token]);

	return (
		<div className={contentLayer}>
			<Storages />
			<Statistics />
		</div>
	);
};

export default ContentContainer;

