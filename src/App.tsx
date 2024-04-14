import './main.scss';

import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ContentContainer from './app/ContentContainer';
import MainContainer from './app/MainContainer';
import AddStorage from './app/storages/AddStorage';
import EditStorage from './app/storages/EditStorage';
import { initToken } from './app/storages/utils/storages';
import AddTransaction from './app/transactions/AddTransaction';
import EditTransaction from './app/transactions/EditTransaction';
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
				initToken(userObj.token);
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
					element={<MainContainer />}
					errorElement={<ErrorElement />}
				>
					<Route path='main/:id' element={<EditStorage />} />
					<Route path='main/*' index element={<ContentContainer />} />
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

