import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../app/ui/buttons/Button';
import InputForm from '../../app/ui/form/InputForm';
import { setCookies } from '../../app/utils/localObject';
import { UserContext } from '../../hooks/userContext';
import { loginAction } from '../utils/login';

const Login = () => {
	const { updateUser } = useContext(UserContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const result = await loginAction({ username, password });
			setCookies('username', result.username);
			setCookies('name', result.name);
			setCookies('token', result.token);
			updateUser({ username, name: result.name });
			navigate('/app/main');
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
					required
				/>
				<InputForm
					id='password'
					placeholder='password'
					type='password'
					value={password}
					onChange={onChangeInput(setPassword)}
					required
				/>
				<Button text='Войти' type='submit' />
			</form>
		</>
	);
};

export default Login;

