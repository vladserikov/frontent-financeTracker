import React from 'react';
import { otherSvg } from '../svg/other';
import { Transaction } from '../types';
import EditBtn from '../ui/EditBtn';
import { bem } from '../utils/classnames';

const [cardBlock, cardElement] = bem('history-card');
const [iconElement] = cardElement('icon');
const [categoryElement] = cardElement('category');
const [amountElement] = cardElement('amount');
const [btnElement] = cardElement('btn');

const CardHistory: React.FC<Transaction> = (props) => {
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

export default CardHistory;

