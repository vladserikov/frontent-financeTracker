import React from 'react';

import NavButton from '../app/ui/buttons/NavButton';
import { bem } from '../app/utils/classnames';
import { svgAuth } from './svg/backgroundSvg';

type StubProps = {
	type: 'login' | 'registration';
};

const [block, elementGenerator] = bem('stub');
const [elementButton, modifierGeneratorButton] = elementGenerator('button');
const [elementText, modifierGeneratorText] = elementGenerator('text');
const [titleBlock] = modifierGeneratorText('title');
const [subTitleBlock] = modifierGeneratorText('sub-title');
const [linkBlock] = modifierGeneratorButton('link');

const stubObject = (type: 'login' | 'registration') => {
	const defaultObj = {
		titleText: 'Добро пожаловать в SAVAWALLET!',
		subTitleText: 'Укажите свои данные и начните управлять своими финансами',
	};

	const loginObj = {
		...defaultObj,
		text: 'Войти',
		link: '/auth/login',
	};

	const registrationObj = {
		...defaultObj,
		text: 'Регистрация',
		link: '/auth/registration',
	};

	return type === 'login' ? loginObj : registrationObj;
};

const Stub: React.FC<StubProps> = ({ type }) => {
	const { link, subTitleText, text, titleText } = stubObject(type);

	return (
		<div className={block}>
			{svgAuth}
			<div className={elementText}>
				<div className={titleBlock}>{titleText}</div>
				<div className={subTitleBlock}>{subTitleText}</div>
			</div>
			<div className={elementButton}>
				<NavButton text={text} to={link} className={linkBlock} />
			</div>
		</div>
	);
};

export default Stub;

