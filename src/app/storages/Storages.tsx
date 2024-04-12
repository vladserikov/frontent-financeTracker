import { useEffect } from 'react';
import { useStorage, useStorages } from '../../state/storages';
import { balanceSvg } from '../svg/balance';
import { otherSvg } from '../svg/other';
import { svgPlus } from '../svg/plus';
import { Storage } from '../types';
import NavButton from '../ui/NavButton';
import { bem } from '../utils/classnames';
import StorageTransactions from './StorageTransactions';

const [layerStorages] = bem('layer-storages');
const [storagesBlock, storagesBlockElement] = bem('storages');
const [storagesHeader] = storagesBlockElement('header');
const [storagesTitle] = storagesBlockElement('title');
const [storagesAddBtn] = storagesBlockElement('add-btn');
const [cards] = storagesBlockElement('cards');

type StorageCartProps = {
	amount: number;
	unit: string;
	name: string;
	onEdit: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	onSelect: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	isSelected: boolean;
};

const [cardBlock, cardElement, cardModif] = bem('card');
const [cardContent] = cardElement('content');
const [cardIcon, iconModifier] = cardElement('icon');
const [cardAmount] = cardElement('amount');
const [cardName] = cardElement('name');
const [cardBtn] = cardElement('edit-btn');
const iconCircle = iconModifier('circle');
const selectedCard = cardModif('selected');

const StorageCard: React.FC<StorageCartProps> = ({
	amount,
	name,
	unit,
	onEdit,
	onSelect,
	isSelected,
}) => {
	return (
		<div
			className={`${cardBlock} ${isSelected ? selectedCard : ''}`}
			onClick={onSelect}
		>
			<div className={cardBtn} onClick={onEdit}>
				{otherSvg}
			</div>
			<div className={cardContent}>
				<div className={cardIcon}>
					<div className={iconCircle}>{balanceSvg}</div>
				</div>
				<div className={cardAmount}>
					<span>{unit}</span> <span>{amount}</span>
				</div>
				<div className={cardName}>{name}</div>
			</div>
		</div>
	);
};

const Storages = () => {
	const { storages } = useStorages();
	const { initStorage, storage } = useStorage();

	useEffect(() => {
		if (!storage) {
			initStorage(storages[0]);
		}
	}, []);

	const onSelectStorage =
		(newStorage: Storage) =>
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			e.stopPropagation();
			if (storage.id === newStorage.id) return;
			initStorage(newStorage);
		};

	const onEditStorage =
		(newStorage: Storage) =>
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			e.stopPropagation();
			if (storage.id !== newStorage.id) {
				initStorage(newStorage);
			}
		};

	return (
		<>
			<div className={layerStorages}>
				<div className={storagesBlock}>
					<div className={storagesHeader}>
						<div className={storagesTitle}>Счета</div>
						<NavButton
							to='/app/new-storage'
							className={storagesAddBtn}
							icon={svgPlus}
						/>
					</div>

					<div className={cards}>
						{storages.map((s) => (
							<StorageCard
								amount={s.amount}
								name={s.name}
								unit={s.unit}
								key={s.id}
								onSelect={onSelectStorage(s)}
								onEdit={onEditStorage(s)}
								isSelected={storage.id === s.id}
							/>
						))}
					</div>
				</div>
			</div>
			<StorageTransactions />
		</>
	);
};

export default Storages;

