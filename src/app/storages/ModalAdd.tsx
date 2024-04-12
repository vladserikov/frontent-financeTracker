import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { User } from '../types';
import InputForm from '../ui/InputForm';
import { postStorage } from './utils/storages';

const ModalAdd: React.FC = () => {
	// const { open, setOpen } = useContext(ModalStateContext);
	// const { addStorage } = useStorages();
	const user = useOutletContext<User | null>();

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

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const result = await postStorage(
				{ amount: parseFloat(amount), name, unit },
				user?.token || ''
			);
			console.log({ result });

			// addStorage(result);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
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

export default ModalAdd;

