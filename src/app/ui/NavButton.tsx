import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { defaultButtonBlock } from './Button';

type ButtonMenu = {
	to: string;
	className?: string;
	text?: string;
	icon?: JSX.Element;
};

const NavButton: React.FC<ButtonMenu> = ({ text, to, className, icon }) => {
	const classname = clsx([defaultButtonBlock, className]);
	return (
		<NavLink to={to} className={classname}>
			{icon} {text}
		</NavLink>
	);
};

export default NavButton;

