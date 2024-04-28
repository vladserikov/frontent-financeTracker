import { useState } from 'react';
import { useSelector } from 'react-redux';
import { walletSelector } from '../../state/hooks';
import Button from '../ui/Button';
import FormElement from '../ui/FormElement';
import FormWrapper from '../ui/FormWrapper';
import InputForm from '../ui/InputForm';

const EditWallet = () => {
	const { amount, name, unit } = useSelector(walletSelector);

	const [walletName, setWalletName] = useState(name);
	const [walletAmount, setWalletAmount] = useState(amount);
	const [walletUnit, setWalletUnit] = useState(unit);

	const onChangeState =
		(setState: React.Dispatch<React.SetStateAction<string>>) =>
		({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
			setState(value);
		};

	const onSubmit = () => {
		// updateStorage(storage.id, {
		// 	...storage,
		// 	amount: parseFloat(walletAmount),
		// 	name: walletName,
		// 	unit: walletUnit,
		// });
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
				<Button type='submit' text='Обновить' />
			</FormElement>
		</FormWrapper>
	);
};

export default EditWallet;

