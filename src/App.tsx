import './main.scss';

import { Navigate, Route, Routes } from 'react-router-dom';

import { createContext, useLayoutEffect, useState } from 'react';
import ContentContainer from './app/ContentContainer';
import MainContainer from './app/MainContainer';
import Profile from './app/profile/Profile';
import AddTransaction from './app/transactions/AddTransaction';
import EditTransaction from './app/transactions/EditTransaction';
import NewTransaction from './app/transactions/NewTransaction';
import { User } from './app/types';
import ErrorElement from './app/ui/ErrorElement';
import { getCookie } from './app/utils/localObject';
import AddWallet from './app/wallets/AddWallet';
import EditWallet from './app/wallets/EditWallet';
import AuthUser from './auth/AuthUser';
import Login from './auth/login/Login';
import Registration from './auth/registration/Registration';

type Context = {
	user: User | null;
	updateUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const defaultContext = {
	user: null,
	updateUser: () => {},
};

export const UserContext = createContext<Context>(defaultContext);

function App() {
	const [currentUser, setCurrentUser] = useState<null | User>(null);

	useLayoutEffect(() => {
		if (!currentUser) {
			const cUser = {
				username: getCookie('username'),
				name: getCookie('name'),
			};

			console.log({ cUser });
			if (cUser.username) setCurrentUser(cUser);
		}
	}, [currentUser]);

	return (
		<UserContext.Provider
			value={{ user: currentUser, updateUser: setCurrentUser }}
		>
			<div className='app'>
				<Routes>
					<Route
						path='/'
						element={
							<Navigate replace to={currentUser ? '/app/main' : '/auth'} />
						}
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
						<Route path='main/:id' element={<EditWallet />} />
						<Route path='main/*' index element={<ContentContainer />} />
						<Route path='transactions/:id' element={<EditTransaction />} />
						<Route
							path='transactions/add-transaction'
							element={<AddTransaction />}
						/>
						<Route path='transactions' element={<NewTransaction />} />
						<Route path='add-wallet' element={<AddWallet />} />
						<Route path='profile' element={<Profile />} />
					</Route>
				</Routes>
			</div>
		</UserContext.Provider>
	);
}

export default App;

