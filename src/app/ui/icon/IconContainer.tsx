import clsx from 'clsx';
import React from 'react';
import { bem } from '../../utils/classnames';

const [block] = bem('default-icon');

type IconContainerProps = {
	icon?: React.ReactNode;
	className?: string;
};

const IconContainer: React.FC<IconContainerProps> = ({ icon, className }) => {
	return <div className={clsx([block, className && className])}>{icon}</div>;
};

export default IconContainer;

