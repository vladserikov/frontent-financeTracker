import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useUser } from '../state/user';
import { loginAction } from './utils/login';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const initUser = useUser((state) => state.initUser);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const result = await loginAction({ username, password });
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
		<div className='login'>
			<h1>login</h1>
			<form onSubmit={onSubmit}>
				<input onChange={onChangeInput(setUsername)} value={username} />
				<input onChange={onChangeInput(setPassword)} value={password} />
				<button type='submit'>login</button>
			</form>
		</div>
	);
};

export default Login;

