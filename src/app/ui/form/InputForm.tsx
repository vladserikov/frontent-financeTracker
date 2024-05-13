import React from 'react';

import { defaultInputElement } from '../classnames';
import InputWrapper from './InputWrapper';

const [element] = defaultInputElement('element');

const InputForm: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
	placeholder,
	type,
	onChange,
	value,
	id,
	required,
	disabled,
	defaultValue,
}) => {
	return (
		<InputWrapper>
			<input
				name={id}
				id={id}
				type={type}
				placeholder={placeholder}
				className={element}
				onChange={onChange}
				value={value}
				required={required}
				disabled={disabled}
				defaultValue={defaultValue}
			/>
		</InputWrapper>
	);
};

export default InputForm;

