// import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { bem } from '../utils/classnames';
import Login from './Login';
import Registration from './Registration';
import Stub from './Stub';

const [wrap] = bem('wrap');
const [block, elementGenerator] = bem('start-window');
const [element] = elementGenerator('user');

const InitUser = () => {
	const { pathname } = useLocation();

	const [currentForm, setCurrentForm] = useState<'login' | 'registration'>(
		'login'
	);

	useEffect(() => {
		setCurrentForm(pathname === '/init/login' ? 'login' : 'registration');
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

export default InitUser;

