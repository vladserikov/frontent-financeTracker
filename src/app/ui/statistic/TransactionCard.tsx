import React from 'react';
import { basketSvg } from '../../svg/basket';
import { otherSvg } from '../../svg/other';
import type { Transaction } from '../../types';
import { bem } from '../../utils/classnames';
import EditBtn from '../buttons/EditBtn';
import IconContainer from '../icon/IconContainer';

const [cardBlock, cardElement] = bem('history-card');
const [iconElement] = cardElement('icon');
const [categoryElement] = cardElement('category');
const [amountElement] = cardElement('amount');
const [btnElement] = cardElement('btn');

const TransactionCard: React.FC<Transaction> = (props) => {
	const { amount, category, id } = props;
	return (
		<div className={cardBlock}>
			<IconContainer icon={basketSvg} className={iconElement} />
			<div className={categoryElement}>{category}</div>
			<div className={amountElement}>{amount}</div>
			<div className={btnElement}>
				<EditBtn to={`/app/transactions/${id}`} icon={otherSvg} />
			</div>
		</div>
	);
};

export default TransactionCard;

