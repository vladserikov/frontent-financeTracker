import React from 'react';

import { Storage, useStorage } from '../../state/user';
import { bem } from '../utils/classnames';

const [block] = bem('card-balance');

const CardBalance: React.FC<Storage> = (props) => {
	const { amount, id, name, transactions, unit, userId } = props;
	const { initStorage, storage } = useStorage();
	const onSelectedStorage = (storage: Storage) => {
		console.log('first', storage);
		initStorage(storage);
	};

	console.log({ storage });
	return (
		<div
			className={block}
			onClick={() =>
				onSelectedStorage({ amount, id, name, transactions, unit, userId })
			}
		>
			<div>icon</div>
			<div>redact</div>
			<div>
				{unit} {amount}
			</div>
			<div>{name}</div>
		</div>
	);
};

export default CardBalance;

