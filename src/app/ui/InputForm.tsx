import React from 'react';
import { bem } from '../utils/classnames';

type InputForm = {
	type: React.InputHTMLAttributes<HTMLInputElement>['type'];
	placeholder: string;
	onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
	value: string;
	id: string;
};

const [block, elementGenerator] = bem('input-block');
const [element] = elementGenerator('element');

const InputForm: React.FC<InputForm> = ({
	placeholder,
	type,
	onChange,
	value,
	id,
}) => {
	return (
		<div className={block}>
			{/* <label></label> */}
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				className={element}
				onChange={onChange}
				value={value}
			/>
		</div>
	);
};

export default InputForm;

