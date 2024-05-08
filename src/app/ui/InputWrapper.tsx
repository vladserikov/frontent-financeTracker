import clsx from 'clsx';
import React from 'react';
import { defaultInputWrapper } from './classnames';

type InputWrapper = {
	className?: string;
	children?: React.ReactNode;
};

const InputWrapper: React.FC<InputWrapper> = ({ children, className }) => {
	return (
		<div className={clsx([defaultInputWrapper, className && className])}>
			{children}
		</div>
	);
};

export default InputWrapper;

