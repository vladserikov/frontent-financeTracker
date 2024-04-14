import { balanceSvg } from '../svg/balance';
import { homeSvg } from '../svg/home';
import { profileSvg } from '../svg/profile';
import { bem } from '../utils/classnames';
import NavButton from './NavButton';

const [blockMenu, elementGenerator] = bem('menu');
const [elementBurgerIcon] = elementGenerator('burger-icon');
const [elementBurgerMenu] = elementGenerator('burger-menu');
const [blockUser] = bem('profile-panel');
const [elementContent] = elementGenerator('content');

type NavigationPathProps = {
	to: string;
	icon: JSX.Element;
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
	},
	transactions: {
		to: '/app/transactions',
		icon: balanceSvg,
	},
	profile: { to: '/app/profile', icon: profileSvg },
};

const MainMenu: React.FC = () => {
	return (
		<div className={blockMenu}>
			<nav className={elementContent}>
				{Object.keys(navPath).map((key, index) => {
					const { icon, to } = navPath[key as keyof NavigationPath];
					return <NavButton key={`${to}-${index}`} to={to} icon={icon} />;
				})}
			</nav>
		</div>
	);
};

// const StickMenu: React.FC = () => {
// 	const { clearUser } = useUser();
// 	const navigate = useNavigate();

// 	const [isOpen, setIsOpen] = useState(false);

// 	const menuContent = () => {
// 		return (
// 			<>
// 				<NavButton to='/' icon={homeSvg} />
// 				<NavButton to='/transactions' icon={balanceSvg} />
// 				<NavButton to='/profile' icon={profileSvg} />
// 			</>
// 		);
// 	};

// 	const contentWrapper = () => {
// 		return <div className='content-wrapper'>{menuContent()}</div>;
// 	};

// 	const burgerMenu = () => (
// 		<div className={`${elementBurgerMenu} ${isOpen ? 'active' : ''}`}>
// 			<div className={elementContent}>
// 				<div>Главная</div>
// 				<NavButton to='new-transaction' text='Добавить' />
// 				<div>Выйти</div>
// 			</div>
// 		</div>
// 	);

// 	const hamburger = () => (
// 		<div className={`hamburger ${isOpen ? 'active' : ''}`}>
// 			<div className='hamburger-element'></div>
// 			<div className='hamburger-element'></div>
// 			<div className='hamburger-element'></div>
// 		</div>
// 	);

// 	const onClick = () => {
// 		console.log('out');
// 		clearUser();
// 		removeLocalStorageUser();
// 		navigate('/');
// 	};

// 	return (
// 		<div className='menu-block'>

// 		</div>
// 	)

// 	// return (
// 	// 	<>
// 	// 		<div className={block}>
// 	// 			<div
// 	// 				className={elementBurgerIcon}
// 	// 				onClick={() => {
// 	// 					setIsOpen((state) => !state);
// 	// 				}}
// 	// 			></div>
// 	// 			{hamburger()}
// 	// 			{burgerMenu()}
// 	// 		</div>
// 	// 		<div className={blockUser}>
// 	// 			<div>notification</div>
// 	// 			<div>profile</div>
// 	// 			<button onClick={onClick}>Выйти</button>
// 	// 		</div>
// 	// 	</>
// 	// );
// };

export default MainMenu;

