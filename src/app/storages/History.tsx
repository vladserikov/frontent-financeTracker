import React, { useState } from 'react';
import { svgPlus } from '../svg/plus';
import Button from '../ui/Button';
import NavButton from '../ui/NavButton';
import { bem } from '../utils/classnames';
import { KeysSplit, SplitTransaction } from './StorageTransactions';

const [historyLayer] = bem('history-layer');
const [historyBlock, historyElement] = bem('history');
const [headerBlock] = historyElement('header');
const [selectBlock, modifSelect] = historyElement('choice-btn');
const [tapeBlock] = historyElement('tape');
const selectedBtn = modifSelect('select');

const History: React.FC<SplitTransaction> = (props) => {
	const [currentHistory, setCurrentHistory] = useState<KeysSplit>('income');
	const data = props[currentHistory];
	console.log({ data });
	if (!data) {
		return <div>loading...</div>;
	}

	const { transactions } = data;
	console.log({ currentHistory });
	return (
		<div className={historyLayer}>
			<div className={historyBlock}>
				<div className={headerBlock}>
					<div>История</div>
					<div>
						<NavButton to='/add' icon={svgPlus} />
					</div>
				</div>
				<div className={selectBlock}>
					{/* <div> */}
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
					{/* </div> */}
				</div>
				<div className={tapeBlock}>
					{transactions.map((t) => {
						console.log(t);
						return <p>{t.amount}</p>;
					})}
				</div>
			</div>
		</div>
	);
};

export default History;

