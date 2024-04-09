// import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { bem } from '../app/utils/classnames';
import Login from './login/Login';
import Registration from './registration/Registration';
import Stub from './Stub';

const [wrap] = bem('wrap');
const [block, elementGenerator] = bem('start-window');
const [element] = elementGenerator('user');

const AuthUser = () => {
	const { pathname } = useLocation();
	console.log({ pathname });
	const [currentForm, setCurrentForm] = useState<'login' | 'registration'>(
		'login'
	);

	useEffect(() => {
		setCurrentForm(
			pathname === '/auth/registration' ? 'registration' : 'login'
		);
	}, [pathname]);

	return (
		<div className={wrap}>
			<div className={`${block} ${currentForm}`}>
				<Stub
					type={currentForm === 'registration' ? 'login' : 'registration'}
				/>
				<div className={element}>
					{currentForm === 'login' ? <Login /> : <Registration />}
				</div>
			</div>
		</div>
	);
};

export default AuthUser;

