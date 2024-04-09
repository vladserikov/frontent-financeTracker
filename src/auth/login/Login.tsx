import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Button from '../../app/ui/Button';
import InputForm from '../../app/ui/InputForm';
import { setLocalStorageUser } from '../../app/utils/localObject';
import { useUser } from '../../state/user';
import { loginAction } from '../utils/login';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const { initUser } = useUser();

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const result = await loginAction({ username, password });
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
				<div>Войти в аккаунт</div>
				<InputForm
					id='username'
					placeholder='username'
					type='text'
					value={username}
					onChange={onChangeInput(setUsername)}
				/>
				<InputForm
					id='password'
					placeholder='password'
					type='password'
					value={password}
					onChange={onChangeInput(setPassword)}
				/>
				<Button text='Войти' type='submit' />
			</form>
		</>
	);
};

export default Login;

