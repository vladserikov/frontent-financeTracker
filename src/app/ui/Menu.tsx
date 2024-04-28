import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { balanceSvg } from '../svg/balance';
import { homeSvg } from '../svg/home';
import { menuSvg } from '../svg/menu';
import { profileSvg } from '../svg/profile';
import { bem } from '../utils/classnames';
import { removeUserCookie } from '../utils/localObject';
import Button from './Button';
import NavButton from './NavButton';

const [blockMenu, elementGenerator] = bem('menu');
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
	const navigate = useNavigate();
	const [isHide, setIsHide] = useState(true);
	const menuIconClassnames = clsx([
		elementBurgerIcon,
		burgerHide,
		!isHide && 'open',
	]);

	const navigationClassnames = clsx([elementContent, isHide && 'hidden']);

	const onCloseMenu = () => {
		if (isHide) return;
		setIsHide(true);
	};

	const onExit = () => {
		removeUserCookie();
		navigate('/');
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
								withText={!isHide}
								onClick={onCloseMenu}
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

