import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStorage } from '../../state/storages';
import { useUser } from '../../state/user';
import { Transaction } from '../types';
import Button from '../ui/Button';
import InputForm from '../ui/InputForm';
import { bem } from '../utils/classnames';
import { postTransaction } from './utils/storages';

const [blockTransaction] = bem('transaction');

const AddTransaction = () => {
	const { storage } = useStorage();
	const { user } = useUser();
	const navigate = useNavigate();

	const [formStatus, setFormStatus] = useState<Transaction>({
		amount: 0,
		category: '',
		comment: '',
		date: new Date(),
		transactionType: 'Income',
		unit: 'USD',
	});

	if (!user) {
		return <div>Login please</div>;
	}

	const onChangeForm =
		(category: keyof Transaction) =>
		({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
			console.log({ value });
			if (category === 'amount') {
				setFormStatus((state) => ({
					...state,
					[category]: parseFloat(value),
				}));
				return;
			}
			setFormStatus((state) => ({
				...state,
				[category]: value,
			}));
		};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await postTransaction(user.token, storage.id, formStatus);
		navigate(-1);
	};

	return (
		<div className={blockTransaction}>
			<div>{formStatus.transactionType}</div>
			<form onSubmit={onSubmit}>
				<InputForm
					id='category'
					placeholder='category'
					type='text'
					onChange={onChangeForm('category')}
					value={formStatus.category}
				/>
				<InputForm
					id='date'
					placeholder='Date'
					type='text'
					onChange={onChangeForm('date')}
					value={formStatus.date.toDateString()}
				/>
				{/* <InputForm
					id='balance'
					placeholder='Кашелек'
					type='text'
					onChange={}
					value=''
				/> */}
				<InputForm
					id='amount'
					placeholder='amount'
					type='number'
					onChange={onChangeForm('amount')}
					value={formStatus.amount}
				/>

				<Button type='submit' text='Добавить' />
			</form>
		</div>
	);
};

export default AddTransaction;

