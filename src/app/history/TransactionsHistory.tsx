import React, { useState } from 'react';

import { plusSvg } from '../svg/plus';
import type { KeysTransactionSummary, TransactionSummary } from '../types';
import Button from '../ui/Button';
import LayerHeader from '../ui/LayerHeader';
import TransactionCard from '../ui/statistic/TransactionCard';
import { bem } from '../utils/classnames';

const [historyLayer] = bem('history-layer');
const [historyBlock, historyElement] = bem('history');
const [selectBlock, modifSelect] = historyElement('choice-btn');
const [tapeBlock] = historyElement('tape');
const selectedBtn = modifSelect('select');

const TransactionsHistory: React.FC<TransactionSummary> = (props) => {
	const [currentHistory, setCurrentHistory] =
		useState<KeysTransactionSummary>('income');
	const data = props[currentHistory];

	if (!data) {
		return <div>loading...</div>;
	}

	const headerButtons = () => (
		<div className={selectBlock}>
			<Button
				text='Доходы'
				type='button'
				className={currentHistory === 'income' ? selectedBtn : ''}
				onClick={() => {
					setCurrentHistory('income');
				}}
			/>
			<Button
				text='Расходы'
				type='button'
				className={currentHistory === 'expense' ? selectedBtn : ''}
				onClick={() => {
					setCurrentHistory('expense');
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
				{/* <div className={headerBlock}>
					<div>История</div>
					<div>
						<NavButton to='/add' icon={plusSvg} />
					</div>
				</div> */}
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

