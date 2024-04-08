import { Link, Outlet } from 'react-router-dom';
import { useUser } from '../state/user';

function User() {
	const user = useUser((state) => state.user);

	return (
		<div>
			<div>
				<nav className='flex flex-auto gap-4'>
					<Link to={'/user'} title='main'>
						main
					</Link>
					<Link to={'/user/balance'} title='balance'>
						balance
					</Link>
					<Link to={'/user/fake'} title='fake'>
						fake
					</Link>
				</nav>
			</div>
			<div>
				{user?.name} {user?.username}
			</div>
			<Outlet context={{ user }} />
		</div>
	);
}

export default User;

