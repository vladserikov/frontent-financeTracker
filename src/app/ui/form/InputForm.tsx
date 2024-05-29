import clsx from 'clsx';
import React from 'react';

import { defaultInputElement } from '../classnames';
import InputWrapper from './InputWrapper';

const [elementBlock] = defaultInputElement('element');
const [errorBlock] = defaultInputElement('error');

type InputElement = React.InputHTMLAttributes<HTMLInputElement> & {
	errorMessages?: string[];
};

const InputForm: React.FC<InputElement> = ({
	placeholder,
	type,
	onChange,
	value,
	id,
	required,
	disabled,
	defaultValue,
	errorMessages,
}) => {
	const classNameInput = clsx([elementBlock, errorMessages && 'error']);
	const classNameError = clsx([errorBlock, errorMessages && 'visible'])
	return (
		<InputWrapper>
			<input
				name={id}
				id={id}
				type={type}
				placeholder={placeholder}
				className={classNameInput}
				onChange={onChange}
				value={value}
				required={required}
				disabled={disabled}
				defaultValue={defaultValue}
			/>
			<span className={classNameError}>
				{errorMessages}
			</span>

		</InputWrapper>
	);
};

export default InputForm;

