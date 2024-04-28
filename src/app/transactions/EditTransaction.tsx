import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { walletSelector } from '../../state/hooks';
import Button from '../ui/Button';
import FormElement from '../ui/FormElement';
import FormWrapper from '../ui/FormWrapper';
import InputForm from '../ui/InputForm';

const EditTransaction = () => {
	const { id } = useParams();

	const { transactions } = useSelector(walletSelector);
	const currentTransaction = transactions.find((t) => t.id === id);

	const [amount, setAmount] = useState(
		(currentTransaction?.amount || 0).toString()
	);
	const [category, setCategory] = useState(currentTransaction?.category || '');

	if (!currentTransaction) {
		return <>error</>;
	}

	const onChangeState =
		(setState: React.Dispatch<React.SetStateAction<string>>) =>
		({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
			setState(value);
		};

	const onSubmit = () => {};

	return (
		<FormWrapper backAction>
			<FormElement name={currentTransaction.category} onSubmitAction={onSubmit}>
				<InputForm
					id='amount'
					onChange={onChangeState(setAmount)}
					type='text'
					value={amount}
				/>
				<InputForm
					id='category'
					onChange={onChangeState(setCategory)}
					type='text'
					value={category}
				/>
				<Button text='Обновить' type='submit' />
			</FormElement>
		</FormWrapper>
	);
};

export default EditTransaction;

