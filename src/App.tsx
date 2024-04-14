import './main.scss';

import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Main from './app/Main';
import MainContent from './app/MainContent';
import AddStorage from './app/storages/AddStorage';
import AddTransaction from './app/storages/AddTransaction';
import EditStorage from './app/storages/EditStorage';
import EditTransaction from './app/storages/EditTransaction';
import ErrorElement from './app/ui/ErrorElement';
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
					element={<Navigate replace to={user ? '/app/main' : '/auth'} />}
					errorElement={<ErrorElement />}
				/>
				<Route path='/auth' element={<AuthUser />}>
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
				</Route>
				<Route
					path='/app'
					element={<MainContent />}
					errorElement={<ErrorElement />}
				>
					<Route path='main/:id' element={<EditStorage />} />
					<Route path='main/*' index element={<Main />} />
					<Route path='transactions/:id' element={<EditTransaction />} />
					<Route
						path='transactions/add-transaction'
						element={<AddTransaction />}
					/>
					<Route path='add-storage' element={<AddStorage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

