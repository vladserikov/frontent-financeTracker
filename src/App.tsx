import { useEffect } from 'react';
import './App.css';
import Login from './login/Login';
import { useUser } from './state/user';
import { Storage } from './Storage';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useNavigate,
} from 'react-router-dom';

function App() {
	const { initUser, user } = useUser(({ initUser, user }) => ({
		user,
		initUser,
	}));
	// const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			const userObj = localStorage.getItem('objUser');
			if (userObj) {
				initUser(JSON.parse(userObj));
				// navigate('/user');
			} else {
			}
		}
	}, [initUser, user]);

	return (
		<Router>
			<div>
				<Link to={'/'}>home</Link>
				<Link to={'/user'}>user</Link>
			</div>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/user' element={<Storage />} />
			</Routes>
		</Router>
	);
	// return (
	// 	<>
	// 		<Login />
	// 		<Storage />
	// 	</>
	// );
}

export default App;

