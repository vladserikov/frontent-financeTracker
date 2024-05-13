import clsx from 'clsx';
import React from 'react';

import { bem } from '../../utils/classnames';
import NavButton, { ButtonMenu } from './NavButton';

const [btnBlock] = bem('default-button--icon');

const ButtonIcon: React.FC<ButtonMenu> = (props) => {
	const classname = clsx([btnBlock, props.className]);
	return <NavButton {...props} className={classname} />;
};

export default ButtonIcon;

