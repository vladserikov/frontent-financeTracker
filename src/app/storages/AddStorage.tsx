import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useStorages } from '../../state/storages';
import { User } from '../types';
import Button from '../ui/Button';
import InputForm from '../ui/InputForm';
import { bem } from '../utils/classnames';

const [formWrapper] = bem('form-wrapper');
const [formBlock] = bem('form-block');

const AddStorage = () => {
	const { addStorage } = useStorages();
	const user = useOutletContext<User | null>();

	const navigate = useNavigate();

	const [name, setName] = useState('');
	// const [icon, setIcon] = useState('');
	const [unit, setUnit] = useState('');
	const [amount, setAmount] = useState('');
	const [comment, setComment] = useState('');

	const onChangeState =
		(setState: React.Dispatch<React.SetStateAction<string>>) =>
		({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
			setState(value);
		};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		addStorage(
			{ amount: parseFloat(amount), name, unit },
			user?.token || '',
			() => {
				navigate(-1);
			}
		);
	};

	return (
		<div className={formWrapper}>
			<form onSubmit={onSubmit} className={formBlock}>
				<div>Добавить счет</div>
				<InputForm
					onChange={onChangeState(setName)}
					value={name}
					type='text'
					id='name'
					placeholder='Название счета'
				/>
				{/* <InputForm
					onChange={onChangeState(setIcon)}
					value={icon}
					id='icon'
					placeholder='Icon'
					type='image'
				/> */}
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
				<Button type='submit' text='Добавить' />
			</form>
		</div>
	);
};

export default AddStorage;

