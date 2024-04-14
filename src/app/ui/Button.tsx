import clsx from 'clsx';
import React from 'react';
import { bem } from '../utils/classnames';

export type ButtonProps = {
	text?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type: HTMLButtonElement['type'];
	className?: string;
	icon?: JSX.Element;
};

export const [defaultButtonBlock] = bem('default-button');

const Button: React.FC<ButtonProps> = ({
	text,
	type,
	onClick,
	className,
	icon,
}) => {
	const classname = clsx([defaultButtonBlock, className]);
	return (
		<button onClick={onClick} type={type} className={classname}>
			{icon} {text}
		</button>
	);
};

export default Button;

