import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { walletSelector } from '../../state/hooks';
import { useUpdateTransactionMutation } from '../../state/walletsApi';
import Button from '../ui/buttons/Button';
import FormElement from '../ui/form/FormElement';
import FormWrapper from '../ui/form/FormWrapper';
import InputForm from '../ui/form/InputForm';
import { editTransactionSchema, ErrorEditTransactionFields } from './utils/editTransactionSchema';



const EditTransaction = () => {
	const { id } = useParams();
	const [updateTransaction, result] = useUpdateTransactionMutation();
	const { transactions } = useSelector(walletSelector);
	const navigate = useNavigate();
	const currentTransaction = transactions.find((t) => t.id === id);
	const [errorObj, setErrorObj] = useState<ErrorEditTransactionFields>({})

	if (!currentTransaction) {
		return <>error</>;
	}
	const { amount, category } = currentTransaction;
	const onSubmit = (formObj: Record<string, any>) => {
		const resultParse = editTransactionSchema.safeParse({
			...formObj,
		})

		if (!resultParse.success) {
			setErrorObj({
				errors: resultParse.error.flatten().fieldErrors,
				message: 'Missing Fields.'
			})
			return
		}

		updateTransaction({ ...currentTransaction, ...formObj });
		navigate(-1);
	};

	return (
		<FormWrapper backAction>
			<FormElement name={currentTransaction.category} onSubmitAction={onSubmit}>
				<InputForm id='amount' type='text' defaultValue={amount} errorMessages={errorObj.errors?.amount} />
				<InputForm id='category' type='text' defaultValue={category} errorMessages={errorObj.errors?.category} />
				<Button text='Обновить' type='submit' disabled={result.isLoading} />
			</FormElement>
		</FormWrapper>
	);
};

export default EditTransaction;

