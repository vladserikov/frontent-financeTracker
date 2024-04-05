import { Link, Outlet } from 'react-router-dom';

const InitUser = () => {
	return (
		<div>
			<div className='links px-4 container '>
				<Link to={'/init/login'} className='px-4'>
					login
				</Link>
				<Link to={'/init/registration'} className='px-4 border-s-black'>
					registration
				</Link>
			</div>
			<Outlet />
		</div>
	);
};

export default InitUser;

