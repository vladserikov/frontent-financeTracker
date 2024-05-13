import React from 'react';

import { bem } from '../../utils/classnames';
import ButtonIcon from '../buttons/ButtonIcon';

const [headerBlock, headerElement] = bem('layer-header');
const [nameElement] = headerElement('name');
const [buttonElement] = headerElement('button');

export type LayerHeaderProps = {
	name: string;
	icon?: JSX.Element;
	button?: {
		to: string;
		icon?: JSX.Element;
		className?: string;
	};
};

const LayerHeader: React.FC<LayerHeaderProps> = ({ name, button }) => {
	return (
		<div className={headerBlock}>
			<div className={nameElement}>{name}</div>
			{button && (
				<ButtonIcon
					to={button.to}
					icon={button.icon}
					className={buttonElement}
				/>
			)}
		</div>
	);
};

export default LayerHeader;

