import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../app/ui/Button';
import InputForm from '../../app/ui/InputForm';
import { setLocalStorageUser } from '../../app/utils/localObject';
import { useUser } from '../../state/user';
import { registrationAction } from '../utils/registration';

const Registration = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');

	const navigate = useNavigate();

	const { initUser } = useUser();

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const result = await registrationAction({ username, password, name });
			initUser(result);
			setLocalStorageUser(result);
			navigate('/app');
		} catch (error) {
			console.log(error);
		}
	};

	const onChangeInput =
		(setValue: React.Dispatch<React.SetStateAction<string>>) =>
		({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
			setValue(value);
		};

	return (
		<>
			<form onSubmit={onSubmit}>
				<div>Создать аккаунт</div>
				<InputForm
					id='name'
					onChange={onChangeInput(setName)}
					placeholder='Имя'
					type='text'
					value={name}
				/>
				<InputForm
					id='username'
					onChange={onChangeInput(setUsername)}
					placeholder='Username'
					type='text'
					value={username}
				/>
				<InputForm
					id='password'
					type='password'
					placeholder='Пароль'
					value={password}
					onChange={onChangeInput(setPassword)}
				/>
				<Button type='submit' text='Регистрация' />
			</form>
		</>
	);
};

export default Registration;

