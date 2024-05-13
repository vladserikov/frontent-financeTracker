import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { walletAddTransactionData } from '../../state/hooks';
import { useAddTransactionMutation } from '../../state/walletsApi';
import type { AddTransaction } from '../types';
import Button from '../ui/buttons/Button';
import FormElement from '../ui/form/FormElement';
import FormWrapper from '../ui/form/FormWrapper';
import InputForm from '../ui/form/InputForm';
import SelectForm from '../ui/form/SelectForm';

const formSchema = z.object({
	amount: z.string().transform((v) => Number(v) || 0),
	category: z.string().min(1, {
		message: 'Please typing category',
	}),
	date: z.coerce.date({
		invalid_type_error: 'Data',
	}),
	transactionType: z.enum(['Expense', 'Income']),
});

type State = {
	errors?: { category?: string[]; amount?: string[]; date?: string[] };
	message?: string | null;
};

const AddTransaction = () => {
	const [walletId, walletUnit, walletName] = useSelector(
		walletAddTransactionData
	);
	const navigate = useNavigate();
	const [addTransaction, result] = useAddTransactionMutation();
	const [errorObj, setErrorObj] = useState<State>({});

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		const formData = new FormData(e.target as HTMLFormElement);
		const formObj: Record<string, any> = {};

		for (const [key, value] of formData.entries()) {
			formObj[key] = value;
		}

		const result = formSchema.safeParse({
			...formObj,
		});

		if (!result.success) {
			setErrorObj({
				errors: result.error.flatten().fieldErrors,
				message: 'Missing Fields. Failed to Create Invoice.',
			});
			return;
		}

		addTransaction({ ...result.data, walletId, unit: walletUnit, comment: '' });
		navigate(-1);
	};

	return (
		<FormWrapper backAction>
			<FormElement name={`Add ${walletName}`} onSubmitAction={onSubmit}>
				<InputForm id='category' placeholder='category' type='text' />
				{errorObj.errors?.category &&
					errorObj.errors.category.map((er) => <p>{er}</p>)}
				<InputForm id='date' placeholder='Date' type='date' />
				{errorObj.errors?.date && errorObj.errors.date.map((er) => <p>{er}</p>)}
				<InputForm
					id='amount'
					placeholder='amount'
					type='number'
					defaultValue={0}
				/>
				{errorObj.errors?.amount &&
					errorObj.errors.amount.map((er) => <p>{er}</p>)}
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

