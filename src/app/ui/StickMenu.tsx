import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../state/user';
import { bem } from '../utils/classnames';
import { removeLocalStorageUser } from '../utils/localObject';

const [block, elementGenerator] = bem('menu');
const [elementBurgerIcon] = elementGenerator('burger-icon');
const [elementBurgerMenu] = elementGenerator('burger-menu');
const [elementUser] = elementGenerator('user');

const StickMenu = () => {
	const { clearUser } = useUser();
	const navigate = useNavigate();

	const [isOpen, setIsOpen] = useState(false);

	const burgerMenu = () => (
		<div className={`${elementBurgerMenu} ${isOpen ? 'active' : ''}`}>
			<div>Главная</div>
			<div>Баланс</div>
			<div>Помощь</div>
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
		<div className={block}>
			<div
				className={elementBurgerIcon}
				onClick={() => {
					setIsOpen((state) => !state);
				}}
			>
				{hamburger()}
				{burgerMenu()}
			</div>
			<div className={elementUser}>
				<div>notification</div>
				<div>profile</div>
				<button onClick={onClick}>Выйти</button>
			</div>
		</div>
	);
};

export default StickMenu;

