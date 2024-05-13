import React, { useContext } from 'react';

import { plusSvg } from '../../svg/plus';
import type { TransactionSummary } from '../../types';
import Button from '../../ui/Button';
import LayerHeader from '../../ui/LayerHeader';
import TransactionCard from '../../ui/statistic/TransactionCard';
import { bem } from '../../utils/classnames';
import { StatisticContext, StatisticContextProps } from '../statisticContext';

const [historyLayer] = bem('history-layer');
const [historyBlock, historyElement] = bem('history');
const [selectBlock, modifSelect] = historyElement('choice-btn');
const [tapeBlock] = historyElement('tape');
const selectedBtn = modifSelect('select');

const TransactionsHistory: React.FC<TransactionSummary> = (props) => {
	const { currentType, changeType } =
		useContext<StatisticContextProps>(StatisticContext);

	const data = props[currentType];

	if (!data) {
		return <div>loading...</div>;
	}

	const headerButtons = () => (
		<div className={selectBlock}>
			<Button
				text='Доходы'
				type='button'
				className={currentType === 'income' ? selectedBtn : ''}
				onClick={() => {
					if (currentType === 'income') return;
					changeType('income');
				}}
			/>
			<Button
				text='Расходы'
				type='button'
				className={currentType === 'expense' ? selectedBtn : ''}
				onClick={() => {
					if (currentType === 'expense') return;
					changeType('expense');
				}}
			/>
		</div>
	);

	const { transactions } = data;

	return (
		<div className={`${historyLayer} common-layer`}>
			<div className={historyBlock}>
				<LayerHeader
					name='История'
					button={{ to: '/app/transactions/add-transaction', icon: plusSvg }}
				/>
				{headerButtons()}
				<div className={tapeBlock}>
					{transactions.map((t, i) => {
						return <TransactionCard key={`${t.id}-${i}`} {...t} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default TransactionsHistory;

