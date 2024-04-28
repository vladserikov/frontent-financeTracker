import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { walletSelector } from '../../state/hooks';
import { changeWallet } from '../../state/wallet';
import { useEditWalletMutation } from '../../state/walletsApi';
import Button from '../ui/Button';
import FormElement from '../ui/FormElement';
import FormWrapper from '../ui/FormWrapper';
import InputForm from '../ui/InputForm';

const EditWallet = () => {
	const wallet = useSelector(walletSelector);
	const { amount, name, unit } = wallet;
	const [editWallet, result] = useEditWalletMutation();
	const dispatch = useDispatch();

	const [walletName, setWalletName] = useState(name);
	const [walletAmount, setWalletAmount] = useState(`${amount}`);
	const [walletUnit, setWalletUnit] = useState(unit);

	const onChangeState =
		(setState: React.Dispatch<React.SetStateAction<string>>) =>
		({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
			setState(value);
		};

	const onSubmit = () => {
		const newWallet = {
			...wallet,
			amount: parseFloat(walletAmount),
			name: walletName,
			unit: walletUnit,
		};
		editWallet(newWallet);
		dispatch(changeWallet(newWallet));
	};

	return (
		<FormWrapper backAction>
			<FormElement name={''} onSubmitAction={onSubmit}>
				<InputForm
					id='name'
					onChange={onChangeState(setWalletName)}
					value={walletName}
					type='text'
				/>
				<InputForm
					id='name'
					onChange={onChangeState(setWalletAmount)}
					value={walletAmount}
					type='text'
				/>
				<InputForm
					id='name'
					onChange={onChangeState(setWalletUnit)}
					value={walletUnit}
					type='text'
				/>
				<Button type='submit' text='Обновить' disabled={result.isLoading} />
			</FormElement>
		</FormWrapper>
	);
};

export default EditWallet;

