import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { walletSelector } from '../../state/hooks';
import { useUpdateTransactionMutation } from '../../state/walletsApi';
import Button from '../ui/Button';
import FormElement from '../ui/FormElement';
import FormWrapper from '../ui/FormWrapper';
import InputForm from '../ui/InputForm';

const EditTransaction = () => {
	const { id } = useParams();
	const [updateTransaction, result] = useUpdateTransactionMutation();
	const { transactions } = useSelector(walletSelector);
	const navigate = useNavigate();
	const currentTransaction = transactions.find((t) => t.id === id);

	if (!currentTransaction) {
		return <>error</>;
	}
	const { amount, category } = currentTransaction;
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		const formData = new FormData(e.target as HTMLFormElement);
		const formObj: Record<string, any> = {};

		for (const [key, value] of formData.entries()) {
			formObj[key] = value;
		}

		updateTransaction({ ...currentTransaction, ...formObj });
		navigate(-1);
	};

	return (
		<FormWrapper backAction>
			<FormElement name={currentTransaction.category} onSubmitAction={onSubmit}>
				<InputForm id='amount' type='text' defaultValue={amount} />
				<InputForm id='category' type='text' defaultValue={category} />
				<Button text='Обновить' type='submit' disabled={result.isLoading} />
			</FormElement>
		</FormWrapper>
	);
};

export default EditTransaction;

