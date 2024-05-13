import React, { ReactNode } from 'react';
import { bem } from '../utils/classnames';

type FormElement = {
	onSubmitAction: (e: React.FormEvent<HTMLFormElement>) => void;
	name: string | JSX.Element;
	children?: ReactNode;
};

const [formBlock, formElement] = bem('default-form');
const [headerBlock] = formElement('header');
const [contentBlock] = formElement('content');

const FormElement: React.FC<FormElement> = ({
	onSubmitAction,
	name,
	children,
}) => {
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		onSubmitAction(e);
	};

	return (
		<form className={formBlock} onSubmit={onSubmit}>
			<div className={headerBlock}>{name}</div>
			<div className={contentBlock}>{children}</div>
		</form>
	);
};

export default FormElement;

