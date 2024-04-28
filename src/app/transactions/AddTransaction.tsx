import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { walletSelector } from '../../state/hooks';
import { useAddTransactionMutation } from '../../state/walletsApi';
import { NewTransaction, Transaction } from '../types';
import Button from '../ui/Button';
import FormElement from '../ui/FormElement';
import FormWrapper from '../ui/FormWrapper';
import InputForm from '../ui/InputForm';
import { bem } from '../utils/classnames';

const [changeBlock, changeElement] = bem('change-transaction');
const [selectedElement] = changeElement('selected');

const AddTransaction = () => {
	const wallet = useSelector(walletSelector);
	const navigate = useNavigate();
	const [addTransaction, result] = useAddTransactionMutation();

	const [formStatus, setFormStatus] = useState<NewTransaction>({
		amount: 0,
		category: '',
		comment: '',
		date: new Date(),
		transactionType: 'Income',
		unit: 'USD',
	});

	const onChangeForm =
		(category: keyof Transaction) =>
		({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
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

	const onSubmit = async () => {
		addTransaction({ ...formStatus, walletId: wallet.id });
		navigate(-1);
	};

	const onChangeType = (type: NewTransaction['transactionType']) => () => {
		if (formStatus.transactionType === type) return;
		setFormStatus((state) => ({
			...state,
			transactionType: type,
		}));
	};

	const header = () => (
		<div className={changeBlock}>
			<Button
				text='Income'
				type='button'
				className={
					formStatus.transactionType === 'Income' ? selectedElement : ''
				}
				onClick={onChangeType('Income')}
			/>
			<Button
				text='Expense'
				type='button'
				className={
					formStatus.transactionType === 'Expense' ? selectedElement : ''
				}
				onClick={onChangeType('Expense')}
			/>
		</div>
	);
	return (
		<FormWrapper backAction>
			<FormElement name={header()} onSubmitAction={onSubmit}>
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
				<InputForm
					id='amount'
					placeholder='amount'
					type='number'
					onChange={onChangeForm('amount')}
					value={formStatus.amount}
				/>
				<Button type='submit' text='Добавить' disabled={result.isLoading} />
			</FormElement>
		</FormWrapper>
	);
};

export default AddTransaction;

