import StickMenu from './ui/StickMenu';

import { Outlet } from 'react-router-dom';

import { bem } from './utils/classnames';

const [blockHome] = bem('home');

function MainContainer() {
	return (
		<div className={blockHome}>
			<StickMenu />
			<Outlet />
		</div>
	);
}

export default MainContainer;

