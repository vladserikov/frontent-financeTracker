import './main.scss';

import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import InitUser from './login/InitUser';
import Login from './login/Login';
import Registration from './login/Registration';
import { useUser } from './state/user';
import { Storage } from './storage/Storage';
import User from './user/User';

function App() {
	const { initUser, user } = useUser((state) => state);

	useEffect(() => {
		if (!user) {
			const userObj = localStorage.getItem('objUser');
			if (userObj) {
				const obj = JSON.parse(userObj);
				initUser(obj);
			}
		}
	}, [initUser, user]);

	return (
		<div className='app'>
			<Routes>
				<Route
					path='/'
					element={
						user ? (
							<Navigate replace to={'/user'} />
						) : (
							<Navigate replace to={'/init'} />
						)
					}
				/>
				<Route path='/init' element={<InitUser />}>
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
				</Route>
				<Route path='/user' element={<User />}>
					<Route path='balance' element={<Storage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

