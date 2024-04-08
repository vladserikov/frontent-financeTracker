import React from 'react';
import { bem } from '../utils/classnames';

type ButtonProps = {
	text: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type: HTMLButtonElement['type'];
	className?: string;
};

export const { block } = bem('default-button');

const Button: React.FC<ButtonProps> = ({ text, type, onClick }) => {
	return (
		<button onClick={onClick} type={type} className={block}>
			{text}
		</button>
	);
};

export default Button;

