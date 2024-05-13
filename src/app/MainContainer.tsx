import { Outlet } from 'react-router-dom';

import Menu from './ui/menu/Menu';
import { bem } from './utils/classnames';

const [blockHome] = bem('home');

function MainContainer() {
	return (
		<div className={blockHome}>
			<Menu />
			<Outlet />
		</div>
	);
}

export default MainContainer;

