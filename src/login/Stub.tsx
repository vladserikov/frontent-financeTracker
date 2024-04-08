import React from 'react';
import ButtonMenu from '../ui/ButtonMenu';
import { bem } from '../utils/classnames';

type StubProps = {
	type: 'login' | 'registration';
};

const svgOne = (
	<svg viewBox='0 0 534 601' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			fill-rule='evenodd'
			clip-rule='evenodd'
			d='M117.155 -342.069C83.6054 -255.832 155.695 -147.516 246.609 -147.516C337.522 -147.516 409.612 -255.832 376.062 -342.069C342.756 -427.627 150.462 -427.627 117.155 -342.069ZM-2.31834 -40.719C-186.701 47.2782 -238.669 387.307 -95.2604 567.062C-19.0731 662.619 14.8015 672.458 266.893 672.458C518.985 672.458 552.859 662.619 629.046 567.062C777.324 381.228 719.473 44.6383 524.218 -43.1189C402.513 -97.7971 114.478 -96.4772 -2.31834 -40.719ZM410.708 130.676C532.21 250.432 535.171 310.51 426.205 447.065C319.429 580.941 214.357 580.941 107.581 447.065C-0.492767 311.63 1.73849 267.311 122.957 138.315C245.879 7.55948 284.824 6.5195 410.708 130.676Z'
			fill='#C4A577'
			fill-opacity='0.2'
		/>
	</svg>
);

const [block, elementGenerator] = bem('stub');
const [elementButton, modifierGeneratorButton] = elementGenerator('button');
const [elementText, modifierGeneratorText] = elementGenerator('text');
const [titleBlock] = modifierGeneratorText('title');
const [subTitleBlock] = modifierGeneratorText('sub-title');
const [linkBlock] = modifierGeneratorButton('link');

const Stub: React.FC<StubProps> = ({ type }) => {
	const linkProps = {
		text: type === 'login' ? 'login' : 'registration',
		link: type === 'login' ? '/init/login' : '/init/registration',
	};

	const titleText = 'Добро пожаловать в SAVAWALLET!';
	const subTitleText =
		'Укажите свои данные и начните управлять своими финансами';

	return (
		<div className={block}>
			{svgOne}
			<div className={elementText}>
				<div className={titleBlock}>{titleText}</div>
				<div className={subTitleBlock}>{subTitleText}</div>
			</div>
			<div className={elementButton}>
				<ButtonMenu
					text={linkProps.text}
					to={linkProps.link}
					className={linkBlock}
				/>
			</div>
		</div>
	);
};

export default Stub;

