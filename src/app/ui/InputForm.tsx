import React from 'react';
import { bem } from '../utils/classnames';

type InputForm = {
	type: React.InputHTMLAttributes<HTMLInputElement>['type'];
	placeholder?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	value: React.InputHTMLAttributes<HTMLInputElement>['value'];
	id: string;
	required?: boolean;
};

const [block, elementGenerator] = bem('input-block');
const [element] = elementGenerator('element');

const InputForm: React.FC<InputForm> = ({
	placeholder,
	type,
	onChange,
	value,
	id,
	required,
}) => {
	return (
		<div className={block}>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				className={element}
				onChange={onChange}
				value={value}
				required={required}
			/>
		</div>
	);
};

export default InputForm;

