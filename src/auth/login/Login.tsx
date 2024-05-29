import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import Button from '../../app/ui/buttons/Button';
import FormElement from '../../app/ui/form/FormElement';
import FormWrapper from '../../app/ui/form/FormWrapper';
import InputForm from '../../app/ui/form/InputForm';
import { setCookies } from '../../app/utils/localObject';
import { UserContext } from '../../hooks/userContext';
import { loginAction } from '../utils/login';

const loginSchema = z.object({
	username: z.string({
		message: "Не правильный логин/пароль"
	}),
	password: z.string().min(1, {
		message: 'Введите пароль'
	})
})

type ErrorState = {
	errors?: { username?: string[]; password?: string[] };
	message?: string | null;
}

const Login = () => {
	const { updateUser } = useContext(UserContext);
	const navigate = useNavigate();
	const [errorObj, setErrorObj] = useState<ErrorState>({})

	const onSubmit = async (formObj: Record<string, any>) => {
		const parseResult = loginSchema.safeParse(formObj);

		if (!parseResult.success) {
			setErrorObj({
				errors: parseResult.error.flatten().fieldErrors,
				message: 'Missing Data'
			})
			return;
		}

		try {
			const result = await loginAction({ ...parseResult.data });
			setCookies('username', result.username);
			setCookies('name', result.name);
			setCookies('token', result.token);
			updateUser({ username: result.username, name: result.name });
			navigate('/app/main');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<FormWrapper>
				<FormElement name={'Войти в аккаунт'} onSubmitAction={onSubmit}>
					<InputForm
						id='username'
						placeholder='Username'
						type='text'
						required
					/>
					{errorObj.errors?.username && errorObj.errors.username.map((er) => <div>{er}</div>)}
					<InputForm
						id='password'
						placeholder='Пароль'
						type='password'
						required
					/>
					{errorObj.errors?.password && errorObj.errors.password.map((er) => <p>{er}</p>)}
					<Button text='Войти' type='submit' />
				</FormElement>
			</FormWrapper>
		</>
	);
};

export default Login;

