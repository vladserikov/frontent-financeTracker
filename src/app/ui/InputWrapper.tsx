import clsx from 'clsx';
import React from 'react';
import { bem } from '../utils/classnames';

type InputWrapper = {
	className?: string;
	children?: React.ReactNode;
};

const [block, elementGenerator] = bem('input-block');

const InputWrapper: React.FC<InputWrapper> = ({ children, className }) => {
	return (
		<div className={clsx([block, className && className])}>{children}</div>
	);
};

export const bemInputElement = elementGenerator;
export default InputWrapper;

