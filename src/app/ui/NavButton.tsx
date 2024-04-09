import React from 'react';
import { NavLink } from 'react-router-dom';
import { block } from './Button';

type ButtonMenu = {
	to: string;
	className?: string;
	text: string;
};

const NavButton: React.FC<ButtonMenu> = (props) => {
	return (
		<NavLink {...props} className={`${block} ${props.className}`}>
			{props.text}
		</NavLink>
	);
};

export default NavButton;

