import clsx from 'clsx';
import React from 'react';

import { defaultButtonBlock, defaultButtonModification } from '../classnames';

export type ButtonProps = {
	text?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type: HTMLButtonElement['type'];
	className?: string;
	icon?: JSX.Element;
	disabled?: boolean;
};

const disabledBlock = defaultButtonModification('disabled');

const Button: React.FC<ButtonProps> = ({
	text,
	type,
	onClick,
	className,
	icon,
	disabled,
}) => {
	const classname = clsx([defaultButtonBlock, className], {
		[disabledBlock]: disabled,
	});
	return (
		<button
			onClick={onClick}
			type={type}
			className={classname}
			disabled={disabled}
		>
			{icon} {text}
		</button>
	);
};

export default Button;

