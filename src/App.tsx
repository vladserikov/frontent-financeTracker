import './main.scss';

import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import MainApp from './app/MainApp';
import Storages from './app/storages/Storages';
import { getLocalStorageUser } from './app/utils/localObject';
import AuthUser from './auth/AuthUser';
import Login from './auth/login/Login';
import Registration from './auth/registration/Registration';
import { useUser } from './state/user';

function App() {
	const { initUser, user } = useUser();

	useEffect(() => {
		if (!user) {
			const userObj = getLocalStorageUser();
			if (userObj) {
				initUser(userObj);
			}
		}
	}, [initUser, user]);

	return (
		<div className='app'>
			<Routes>
				<Route
					path='/'
					element={<Navigate replace to={user ? '/app' : '/auth'} />}
				/>
				<Route path='/auth' element={<AuthUser />}>
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
				</Route>
				<Route path='/app' element={<MainApp />}>
					<Route index element={<Storages />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

