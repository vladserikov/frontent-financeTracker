import React from 'react';
import { bem } from '../utils/classnames';
import NavButton from './NavButton';

const [headerBlock, headerElement] = bem('layer-header');
const [nameElement] = headerElement('name');
const [buttonElement] = headerElement('button');

type LayerHeaderProps = {
	name: string;
	icon?: JSX.Element;
	button: {
		to: string;
		icon?: JSX.Element;
		className?: string;
	};
};

const LayerHeader: React.FC<LayerHeaderProps> = ({ icon, name, button }) => {
	return (
		<div className={headerBlock}>
			<div className={nameElement}>{name}</div>
			<div>
				<NavButton
					to={button.to}
					icon={button.icon}
					className={buttonElement}
				/>
			</div>
		</div>
	);
};

export default LayerHeader;

