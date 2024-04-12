import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../state/user';
import { bem } from '../utils/classnames';
import { removeLocalStorageUser } from '../utils/localObject';
import NavButton from './NavButton';

const [block, elementGenerator] = bem('menu');
const [elementBurgerIcon] = elementGenerator('burger-icon');
const [elementBurgerMenu] = elementGenerator('burger-menu');
const [blockUser] = bem('profile-panel');
const [elementContent] = elementGenerator('content');

const StickMenu: React.FC = () => {
	const { clearUser } = useUser();
	const navigate = useNavigate();

	const [isOpen, setIsOpen] = useState(false);

	const burgerMenu = () => (
		<div className={`${elementBurgerMenu} ${isOpen ? 'active' : ''}`}>
			<div className={elementContent}>
				<div>Главная</div>
				<NavButton to='new-transaction' text='Добавить' />
				<div>Выйти</div>
			</div>
		</div>
	);

	const hamburger = () => (
		<div className={`hamburger ${isOpen ? 'active' : ''}`}>
			<div className='hamburger-element'></div>
			<div className='hamburger-element'></div>
			<div className='hamburger-element'></div>
		</div>
	);

	const onClick = () => {
		console.log('out');
		clearUser();
		removeLocalStorageUser();
		navigate('/');
	};

	return (
		<>
			<div className={block}>
				<div
					className={elementBurgerIcon}
					onClick={() => {
						setIsOpen((state) => !state);
					}}
				></div>
				{hamburger()}
				{burgerMenu()}
			</div>
			<div className={blockUser}>
				<div>notification</div>
				<div>profile</div>
				<button onClick={onClick}>Выйти</button>
			</div>
		</>
	);
};

export default StickMenu;

