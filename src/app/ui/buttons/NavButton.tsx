import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { defaultButtonBlock } from '../classnames';

export type ButtonMenu = {
	to: string;
	className?: string;
	text?: string;
	icon?: JSX.Element;
	withIcon?: boolean;
	withText?: boolean;
	onClick?: () => void;
	disabled?: boolean;
};

const NavButton: React.FC<ButtonMenu> = ({
	text,
	to,
	className,
	icon,
	withText,
	onClick,
	disabled,
	withIcon = true,
}) => {
	const classname = clsx([
		defaultButtonBlock,
		className,
		disabled && 'disabled',
	]);

	return (
		<NavLink to={to} className={classname} onClick={onClick}>
			{withIcon ? icon : null}
			{withText || text ? text : null}
		</NavLink>
	);
};

export default NavButton;

