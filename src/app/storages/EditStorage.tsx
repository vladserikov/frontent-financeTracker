import React, { useState } from 'react';
import { useStorage, useStorages } from '../../state/storages';
import { useUser } from '../../state/user';
import Button from '../ui/Button';
import FormElement from '../ui/FormElement';
import FormWrapper from '../ui/FormWrapper';
import InputForm from '../ui/InputForm';

const EditStorage = () => {
	const { storage } = useStorage();
	const { updateStorage } = useStorages();

	const { user } = useUser();

	const { amount, name, unit } = storage;

	const [storageName, setStorageName] = useState(name);
	const [storageAmount, setStorageAmount] = useState(amount.toString());
	const [storageUnit, setStorageUnit] = useState(unit);

	if (!user) {
		return <>download</>;
	}
	const onChangeState =
		(setState: React.Dispatch<React.SetStateAction<string>>) =>
		({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
			setState(value);
		};

	const onSubmit = () => {
		updateStorage(
			storage.id,
			{
				...storage,
				amount: parseFloat(storageAmount),
				name: storageName,
				unit: storageUnit,
			},
			user.token
		);
	};

	return (
		<FormWrapper backAction>
			<FormElement name={storage.name} onSubmitAction={onSubmit}>
				<InputForm
					id='name'
					onChange={onChangeState(setStorageName)}
					value={storageName}
					type='text'
				/>
				<InputForm
					id='name'
					onChange={onChangeState(setStorageAmount)}
					value={storageAmount}
					type='text'
				/>
				<InputForm
					id='name'
					onChange={onChangeState(setStorageUnit)}
					value={storageUnit}
					type='text'
				/>
				<Button type='submit' text='Обновить' />
			</FormElement>
		</FormWrapper>
	);
};

export default EditStorage;

