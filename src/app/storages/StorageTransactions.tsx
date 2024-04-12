import { useStorage } from '../../state/storages';
import { arrowSvg } from '../svg/arrow';
import { balanceSvg } from '../svg/balance';
import { Storage, Transaction } from '../types';
import { bem } from '../utils/classnames';
import History from './History';

const [layer] = bem('data-layer');
const [dataBlock] = bem('data');

export type ValueProps = {
	name: string;
	amount: number;
	transactions: Transaction[];
	icon: JSX.Element;
	unit: string;
};

export type SplitTransaction = {
	income: ValueProps;
	expense: ValueProps;
	all: ValueProps;
};

export type KeysSplit = keyof SplitTransaction;

const [cardBlock, cardElement] = bem('data-card');
const [cardWrapper] = cardElement('wrapper');
const [cardIcon] = cardElement('icon');
const [cardName] = cardElement('name');
const [cardValue] = cardElement('value');

const ValueCard: React.FC<ValueProps> = ({ amount, icon, name, unit }) => {
	return (
		<div className={cardBlock}>
			<div className={cardName}>{name}</div>
			<div className={cardWrapper}>
				<div className={cardIcon}>{icon}</div>
				<div className={cardValue}>
					{unit} {amount}
				</div>
			</div>
		</div>
	);
};

const useValueCard = (storage: Storage) => {
	const initData: SplitTransaction = {
		all: {
			name: 'Баланс',
			amount: storage.amount,
			transactions: storage.transactions,
			icon: balanceSvg,
			unit: storage.unit,
		},
		income: {
			name: 'Доходы',
			amount: 0,
			transactions: [],
			icon: arrowSvg,
			unit: storage.unit,
		},
		expense: {
			name: 'Расходы',
			amount: 0,
			transactions: [],
			icon: arrowSvg,
			unit: storage.unit,
		},
	};

	const data = storage.transactions.reduce(
		(prev, stor) => {
			if (stor.transactionType === 'Expense') {
				prev.expense.amount += stor.amount;
				prev.expense.transactions.push(stor);
			} else {
				prev.income.amount += stor.amount;
				prev.income.transactions.push(stor);
			}

			return prev;
		},
		{ ...initData }
	);

	return data;
};

const StorageTransactions = () => {
	const { storage } = useStorage();

	if (!storage) {
		return <div>loading...</div>;
	}

	const data = useValueCard(storage);

	return (
		<>
			<div className={layer}>
				<div className={dataBlock}>
					{Object.keys(data).map((key) => {
						const keyProps = data[key as KeysSplit];
						return <ValueCard {...keyProps} key={keyProps.name} />;
					})}
				</div>
			</div>

			<History {...data} />
		</>
	);
};

export default StorageTransactions;

