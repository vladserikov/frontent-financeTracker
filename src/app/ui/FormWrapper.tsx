import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { bem } from '../utils/classnames';
import Button from './Button';

type FormWrapperProps = {
	children?: ReactNode;
	className?: string;
	backAction?: boolean;
};

const [wrapperBlock, wrapperElement] = bem('form-wrapper');
const [buttonBlock] = wrapperElement('button');

const FormWrapper: React.FC<FormWrapperProps> = ({
	children,
	className,
	backAction,
}) => {
	const navigate = useNavigate();
	const classnames = clsx([wrapperBlock, className]);
	return (
		<div className={classnames}>
			{backAction && (
				<Button
					text='X'
					type='button'
					onClick={() => {
						navigate(-1);
					}}
					className={buttonBlock}
				/>
			)}
			{children}
		</div>
	);
};

export default FormWrapper;

