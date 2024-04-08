import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../state/user';
import Button from '../ui/Button';
import InputForm from '../ui/InputForm';
import { registrationAction } from './utils/registration';

const Registration = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');

	const navigate = useNavigate();

	const initUser = useUser((state) => state.initUser);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const result = await registrationAction({ username, password, name });
			initUser(result);
			localStorage.setItem('objUser', JSON.stringify(result));
			navigate('/user');
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

