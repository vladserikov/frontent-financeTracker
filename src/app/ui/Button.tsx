import clsx from 'clsx';
import React from 'react';
import { bem } from '../utils/classnames';

type ButtonProps = {
	text: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type: HTMLButtonElement['type'];
	className?: string;
};

export const [defaultButtonBlock] = bem('default-button');

const Button: React.FC<ButtonProps> = ({ text, type, onClick, className }) => {
	const classname = clsx([defaultButtonBlock, className]);
	return (
		<button onClick={onClick} type={type} className={classname}>
			{text}
		</button>
	);
};

export default Button;

