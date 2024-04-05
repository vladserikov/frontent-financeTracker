import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../state/user';
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
		<div className='login'>
			<h1>registration</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChangeInput(setUsername)}
					placeholder='username'
					value={username}
				/>
				<input
					onChange={onChangeInput(setName)}
					placeholder='name'
					value={name}
				/>
				<input
					onChange={onChangeInput(setPassword)}
					placeholder='password'
					value={password}
				/>
				<button type='submit'>login</button>
			</form>
		</div>
	);
};

export default Registration;

