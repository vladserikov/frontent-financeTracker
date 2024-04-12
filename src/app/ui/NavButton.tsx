import React from 'react';
import { NavLink } from 'react-router-dom';
import { block } from './Button';

type ButtonMenu = {
	to: string;
	className?: string;
	text?: string;
	icon?: JSX.Element;
};

const NavButton: React.FC<ButtonMenu> = ({ text, to, className, icon }) => {
	return (
		<NavLink to={to} className={`${block} ${className}`}>
			{icon} {text}
		</NavLink>
	);
};

export default NavButton;

