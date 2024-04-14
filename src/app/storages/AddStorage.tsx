import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useStorages } from '../../state/storages';
import { User } from '../types';
import Button from '../ui/Button';
import FormElement from '../ui/FormElement';
import FormWrapper from '../ui/FormWrapper';
import InputForm from '../ui/InputForm';

const AddStorage = () => {
	const { addStorage } = useStorages();
	const user = useOutletContext<User | null>();

	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [unit, setUnit] = useState('');
	const [amount, setAmount] = useState('');
	const [comment, setComment] = useState('');

	const onChangeState =
		(setState: React.Dispatch<React.SetStateAction<string>>) =>
		({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
			setState(value);
		};

	// Добавить нотификацию
	const onSubmit = () => {
		addStorage({ amount: parseFloat(amount), name, unit }, user?.token || '');
	};

	return (
		<FormWrapper backAction>
			<FormElement onSubmitAction={onSubmit} name='Добавить счет'>
				<InputForm
					onChange={onChangeState(setName)}
					value={name}
					type='text'
					id='name'
					placeholder='Название счета'
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
				<Button type='submit' text='Добавить' />
			</FormElement>
		</FormWrapper>
	);
};

export default AddStorage;

