import { useState } from 'react';

import { useCreateWalletMutation } from '../../state/walletsApi';
import Button from '../ui/Button';
import FormElement from '../ui/FormElement';
import FormWrapper from '../ui/FormWrapper';
import InputForm from '../ui/InputForm';

const AddWallet = () => {
	const [createWallet, result] = useCreateWalletMutation();

	const [name, setName] = useState('');
	const [unit, setUnit] = useState('');
	const [amount, setAmount] = useState('');
	const [comment, setComment] = useState('');

	const onChangeState =
		(setState: React.Dispatch<React.SetStateAction<string>>) =>
		({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
			setState(value);
		};

	const onSubmit = () => {
		createWallet({ amount: parseFloat(amount), name, unit });
	};

	return (
		<FormWrapper backAction>
			<FormElement onSubmitAction={onSubmit} name='Добавить счет'>
				<InputForm
					onChange={onChangeState(setName)}
					value={name}
					type='text'
					id='name'
					placeholder='Название счета'
				/>
				<InputForm
					onChange={onChangeState(setUnit)}
					value={unit}
					id='unit'
					placeholder='Unit'
					type='text'
				/>
				<InputForm
					onChange={onChangeState(setAmount)}
					value={amount}
					id='amount'
					placeholder='Значение'
					type='text'
				/>
				<InputForm
					onChange={onChangeState(setComment)}
					value={comment}
					id='comment'
					placeholder='Комментарий'
					type='text'
				/>
				<Button type='submit' text='Добавить' disabled={result.isLoading} />
			</FormElement>
		</FormWrapper>
	);
};

export default AddWallet;

