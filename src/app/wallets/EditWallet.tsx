import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { walletSelector } from '../../state/hooks';
import { changeWallet } from '../../state/wallet';
import { useEditWalletMutation } from '../../state/walletsApi';
import Button from '../ui/buttons/Button';
import FormElement from '../ui/form/FormElement';
import FormWrapper from '../ui/form/FormWrapper';
import InputForm from '../ui/form/InputForm';

const EditWallet = () => {
	const wallet = useSelector(walletSelector);
	const { amount, name, unit } = wallet;
	const [editWallet, result] = useEditWalletMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (formObj: Record<string, any>) => {
		const newWallet = {
			...wallet,
			...formObj,
			amount: parseFloat(formObj.amount) || 0,
		};

		editWallet(newWallet);
		dispatch(changeWallet(newWallet));
		navigate(-1);
	};

	return (
		<FormWrapper backAction>
			<FormElement name={''} onSubmitAction={onSubmit}>
				<InputForm id='name' defaultValue={name} type='text' />
				<InputForm id='amount' defaultValue={amount} type='text' />
				<InputForm id='unit' defaultValue={unit} type='text' />
				<Button type='submit' text='Обновить' disabled={result.isLoading} />
			</FormElement>
		</FormWrapper>
	);
};

export default EditWallet;

