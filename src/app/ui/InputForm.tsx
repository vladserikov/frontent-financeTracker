import React from 'react';

import InputWrapper, { bemInputElement } from './InputWrapper';

type InputForm = {
	type: React.InputHTMLAttributes<HTMLInputElement>['type'];
	placeholder?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
	id: string;
	required?: boolean;
	disabled?: boolean;
	defaultValue?: any;
};

const [element] = bemInputElement('element');

const InputForm: React.FC<InputForm> = ({
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

