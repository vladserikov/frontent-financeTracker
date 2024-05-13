import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { bem } from '../../utils/classnames';

type EditBtnProps = {
	to: string;
	className?: string;
	icon?: JSX.Element;
	text?: string;
};

const [btnBlock] = bem('default-edit');

const EditBtn: React.FC<EditBtnProps> = ({ to, className, icon, text }) => {
	const classnames = clsx([btnBlock, className]);
	return (
		<NavLink to={to} className={classnames}>
			{icon} {text}
		</NavLink>
	);
};

export default EditBtn;

