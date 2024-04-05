import React, { useState } from 'react';

function User() {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const onChangeInput =
		(setValue: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.FormEvent<HTMLInputElement>) => {
			setValue(e.currentTarget.value);
		};

	return (
		<div>
			<form>
				<input onChange={onChangeInput(setName)} value={name} />
				<input onChange={onChangeInput(setPassword)} value={password} />
				<button type='submit'>login</button>
			</form>
		</div>
	);
}

export default User;

