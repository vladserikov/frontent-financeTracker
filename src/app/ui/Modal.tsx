import React, { useState } from 'react';
import InputForm from './InputForm';

const Modal: React.FC = () => {
	const [name, setName] = useState('');
	const [icon, setIcon] = useState('');
	const [unit, setUnit] = useState('');
	const [amount, setAmount] = useState('');
	const [comment, setComment] = useState('');

	const onChangeState =
		(setState: React.Dispatch<React.SetStateAction<string>>) =>
		({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
			setState(value);
		};

	const onSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={}>
				<div>Добавить счет</div>
				<InputForm
					onChange={onChangeState(setName)}
					value={name}
					type='text'
					id='name'
					placeholder='Название счета'
				/>
				<InputForm
					onChange={onChangeState(setIcon)}
					value={icon}
					id='icon'
					placeholder='Icon'
					type='image'
				/>
				<InputForm
					onChange={onChangeState(setUnit)}
					value={unit}
					id='unit'
					placeholder='Unit'
					type='text'
				/>
				<InputForm
					onChange={onChangeState(setAmount)}
					value={amount}
					id='amount'
					placeholder='Значение'
					type='text'
				/>
				<InputForm
					onChange={onChangeState(setComment)}
					value={comment}
					id='comment'
					placeholder='Комментарий'
					type='text'
				/>
				<button type='submit'>Добавить</button>
			</form>
		</div>
	);
};

export default Modal;

