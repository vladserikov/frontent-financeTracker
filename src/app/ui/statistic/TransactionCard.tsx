import React from 'react';
import { otherSvg } from '../../svg/other';
import type { Transaction } from '../../types';
import { bem } from '../../utils/classnames';
import EditBtn from '../EditBtn';

const [cardBlock, cardElement] = bem('history-card');
const [iconElement] = cardElement('icon');
const [categoryElement] = cardElement('category');
const [amountElement] = cardElement('amount');
const [btnElement] = cardElement('btn');

const TransactionCard: React.FC<Transaction> = (props) => {
	const { amount, category, id } = props;
	return (
		<div className={cardBlock}>
			<div className={iconElement}>ic</div>
			<div className={categoryElement}>{category}</div>
			<div className={amountElement}>{amount}</div>
			<div className={btnElement}>
				<EditBtn to={`/app/transactions/${id}`} icon={otherSvg} />
			</div>
		</div>
	);
};

export default TransactionCard;

