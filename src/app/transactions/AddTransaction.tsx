import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { walletIdSelector } from '../../state/hooks';
import { useAddTransactionMutation } from '../../state/walletsApi';
import type { AddTransaction } from '../types';
import Button from '../ui/Button';
import FormElement from '../ui/FormElement';
import FormWrapper from '../ui/FormWrapper';
import InputForm from '../ui/InputForm';
import SelectForm from '../ui/SelectForm';

const AddTransaction = () => {
	const walletId = useSelector(walletIdSelector);
	const navigate = useNavigate();
	const [addTransaction, result] = useAddTransactionMutation();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log({ e });
		const formData = new FormData(e.target as HTMLFormElement);
		for (let [key, value] of formData.entries()) {
			console.log(`${key}: ${value} -> ${typeof value}`);
		}
		// use zod
		const newTransaction: AddTransaction = {
			walletId,
			amount: parseFloat(formData.get('amount')?.toString() ?? '0'),
			category: formData.get('category')?.toString() ?? 'Default',
			comment: formData.get('category')?.toString() ?? '',
			date: formData.get('category')?.toString() ?? new Date(),
			transactionType: formData.get('transactionType')?.toString() ?? 'Expense',
			unit: formData.get('category')?.toString() ?? 'USD',
		};
		// addTransaction({
		// 	walletId,
		// 	amount: parseFloat(formData.get('amount')),
		// })

		// addTransaction({ ...formStatus, walletId: wallet.id });
		// navigate(-1);
	};

	return (
		<FormWrapper backAction>
			<FormElement name={'Add'} onSubmitAction={onSubmit}>
				<InputForm id='category' placeholder='category' type='text' />
				<InputForm id='date' placeholder='Date' type='date' />
				<InputForm id='amount' placeholder='amount' type='number' />
				<SelectForm id='type' options={['Expense', 'Income']} />
				<Button type='submit' text='Добавить' disabled={result.isLoading} />
			</FormElement>
		</FormWrapper>
	);
};

export default AddTransaction;

