import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { bem } from '../app/utils/classnames';
import Stub from './Stub';

const [wrap] = bem('wrap');
const [block, elementGenerator] = bem('start-window');
const [element] = elementGenerator('user');

const AuthUser = () => {
	const { pathname } = useLocation();

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
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AuthUser;

