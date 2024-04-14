import { useEffect } from 'react';
import { useStorage, useStorages } from '../../state/storages';
import { plusSvg } from '../svg/plus';
import { Storage } from '../types';
import LayerHeader from '../ui/LayerHeader';
import StorageCard from '../ui/StorageCard';
import { bem } from '../utils/classnames';

const [layerStorages] = bem('storages-layer');
const [storagesBlock, storagesBlockElement] = bem('storages');
const [cards] = storagesBlockElement('cards');

const Storages = () => {
	const { storages } = useStorages();
	const { initStorage, storage } = useStorage();

	useEffect(() => {
		if (!storage.id && storages.length) {
			initStorage(storages[0]);
		}
	}, [storages.length]);

	const onSelectStorage =
		(newStorage: Storage) =>
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			e.stopPropagation();
			if (storage.id === newStorage.id) return;
			initStorage(newStorage);
		};

	const onEditStorage = (newStorage: Storage) => () => {
		if (storage.id !== newStorage.id) {
			initStorage(newStorage);
		}
	};

	return (
		<>
			<div className={`${layerStorages} common-layer`}>
				<div className={storagesBlock}>
					<LayerHeader
						name='Счета'
						button={{ to: '/app/add-storage', icon: plusSvg }}
					/>
					<div className={cards}>
						{storages.map((s) => (
							<StorageCard
								amount={s.amount}
								name={s.name}
								unit={s.unit}
								key={s.id}
								id={s.id}
								onSelect={onSelectStorage(s)}
								onEdit={onEditStorage(s)}
								isSelected={storage.id === s.id}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Storages;

