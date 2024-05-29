import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { useCreateWalletMutation } from '../../state/walletsApi';
import Button from '../ui/buttons/Button';
import FormElement from '../ui/form/FormElement';
import FormWrapper from '../ui/form/FormWrapper';
import InputForm from '../ui/form/InputForm';

const newWalletSchema = z.object({
	amount: z.string().transform((v) => Number(v) || 0),
	name: z.string().min(3, {
		message: 'Please more chars',
	}),
	unit: z.string().min(2, {
		message: 'Please add unit',
	}),
});

const AddWallet = () => {
	const [createWallet, result] = useCreateWalletMutation();
	const navigate = useNavigate();

	const onSubmit = (formObj: Record<string, any>) => {
		const result = newWalletSchema.safeParse(formObj);

		if (!result.success) {
			// send notification
			return;
		}

		createWallet(result.data);
		navigate(-1);
	};

	return (
		<FormWrapper backAction>
			<FormElement onSubmitAction={onSubmit} name='Добавить счет'>
				<InputForm type='text' id='name' placeholder='Название счета' />
				<InputForm id='unit' placeholder='Unit' type='text' />
				<InputForm id='amount' placeholder='Значение' type='text' />
				<InputForm id='comment' placeholder='Комментарий' type='text' />
				<Button type='submit' text='Добавить' disabled={result.isLoading} />
			</FormElement>
		</FormWrapper>
	);
};

export default AddWallet;

