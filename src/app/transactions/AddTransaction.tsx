import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { walletAddTransactionData } from '../../state/hooks';
import { useAddTransactionMutation } from '../../state/walletsApi';
import Button from '../ui/buttons/Button';
import FormElement from '../ui/form/FormElement';
import FormWrapper from '../ui/form/FormWrapper';
import InputForm from '../ui/form/InputForm';
import SelectForm from '../ui/form/SelectForm';
import { addTransactionSchema, ErrorAddTransactionFields } from './utils/addTransactionSchema';



const AddTransaction = () => {
	const [walletId, walletUnit, walletName] = useSelector(
		walletAddTransactionData
	);
	const navigate = useNavigate();
	const [addTransaction, result] = useAddTransactionMutation();
	const [errorObj, setErrorObj] = useState<ErrorAddTransactionFields>({});

	const onSubmit = (formObj: Record<string, any>) => {
		const result = addTransactionSchema.safeParse({
			...formObj,
		});

		if (!result.success) {
			setErrorObj({
				errors: result.error.flatten().fieldErrors,
				message: 'Missing Fields. Failed to Create Transaction.',
			});
			return;
		}

		addTransaction({ ...result.data, walletId, unit: walletUnit, comment: '' });
		navigate(-1);
	};

	return (
		<FormWrapper backAction>
			<FormElement name={`Add ${walletName}`} onSubmitAction={onSubmit}>
				<InputForm id='category' placeholder='category' type='text' errorMessages={errorObj.errors?.category} />
				<InputForm id='date' placeholder='Date' type='date' errorMessages={errorObj.errors?.date} />
				<InputForm
					id='amount'
					placeholder='amount'
					type='number'
					defaultValue={0}
					errorMessages={errorObj.errors?.amount}
				/>
				<InputForm
					id='unit'
					placeholder='unit'
					type='string'
					disabled
					value={walletUnit}
				/>
				<SelectForm id='transactionType' options={['Expense', 'Income']} />
				<Button type='submit' text='Добавить' disabled={result.isLoading} />
			</FormElement>
		</FormWrapper>
	);
};

export default AddTransaction;

