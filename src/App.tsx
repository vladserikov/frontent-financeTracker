import './App.css';

import { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import InitUser from './login/InitUser';
import Login from './login/Login';
import Registration from './login/Registration';
import { useUser } from './state/user';
import { Storage } from './storage/Storage';

function App() {
	const { initUser, user, clearUser } = useUser((state) => state);
	const navigation = useNavigate();

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
		<div className='grid'>
			<div>
				<button
					onClick={() => {
						clearUser();
						localStorage.removeItem('objUser');
						navigation('/');
					}}
				>
					clear
				</button>
			</div>
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
				<Route path='/user' element={<Storage />} />
			</Routes>
		</div>
	);
}

export default App;

