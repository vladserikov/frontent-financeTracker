import clsx from 'clsx';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../../hooks/userContext';
import { balanceSvg } from '../../svg/balance';
import { homeSvg } from '../../svg/home';
import { menuSvg } from '../../svg/menu';
import { profileSvg } from '../../svg/profile';
import { bem } from '../../utils/classnames';
import { removeUserCookie } from '../../utils/localObject';
import Button from '../buttons/Button';
import NavButton from '../buttons/NavButton';

const [blockMenu, elementGenerator] = bem('menu');
const [linkBlock] = elementGenerator('link');
const [elementBurgerIcon, burgerModif] = elementGenerator('burger-icon');
const burgerHide = burgerModif('hide');
const [elementBurgerMenu] = elementGenerator('burger-menu');
const [exitButton] = elementGenerator('exit-btn');
const [elementContent] = elementGenerator('content');

type NavigationPathProps = {
	to: string;
	icon: JSX.Element;
	text: string;
};

type NavigationPath = {
	app: NavigationPathProps;
	transactions: NavigationPathProps;
	profile: NavigationPathProps;
};

const navPath: NavigationPath = {
	app: {
		to: '/app/main',
		icon: homeSvg,
		text: 'Главная',
	},
	transactions: {
		to: '/app/transactions',
		icon: balanceSvg,
		text: 'Деньги',
	},
	profile: { to: '/app/profile', icon: profileSvg, text: 'Профиль' },
};

const Menu: React.FC = () => {
	const { updateUser } = useContext(UserContext);
	const navigate = useNavigate();
	const [isHide, setIsHide] = useState(true);
	const menuIconClassnames = clsx([
		elementBurgerIcon,
		burgerHide,
		!isHide && 'open',
	]);

	const navigationClassnames = clsx([elementContent], {
		hidden: isHide,
	});

	const onCloseMenu = () => {
		if (isHide) return;
		setIsHide(true);
	};

	const onExit = () => {
		removeUserCookie();
		navigate('/');
		updateUser(null);
	};

	return (
		<div className={blockMenu}>
			<nav className={navigationClassnames}>
				<ul className={elementBurgerMenu}>
					{Object.keys(navPath).map((key, index) => {
						const { icon, to, text } = navPath[key as keyof NavigationPath];
						return (
							<NavButton
								key={`${to}-${index}`}
								to={to}
								text={text}
								icon={icon}
								// withText={!isHide}
								// TODO: fix buttons
								withText
								onClick={onCloseMenu}
								className={linkBlock}
							/>
						);
					})}
				</ul>
			</nav>
			<div
				className={menuIconClassnames}
				onClick={() => {
					setIsHide(!isHide);
				}}
			>
				{menuSvg}
			</div>
			<Button
				type='button'
				className={exitButton}
				onClick={onExit}
				text='Exit'
			/>
		</div>
	);
};

export default Menu;

