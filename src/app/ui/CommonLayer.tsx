import clsx from 'clsx';
import React from 'react';
import LayerHeader, { LayerHeaderProps } from './LayerHeader';

type CommonLayerProps = {
	children?: React.ReactNode;
	classNameLayer?: string;
	classNameContent?: string;
	withHeader: boolean;
	headerProps?: LayerHeaderProps;
};

const CommonLayer: React.FC<CommonLayerProps> = ({
	withHeader = false,
	children,
	classNameContent,
	classNameLayer,
	headerProps,
}) => {
	const layer = clsx(['common-layer'], {
		classNameLayer,
	});
	const content = clsx([classNameContent]);
	return (
		<div className={layer}>
			<div className={content}>
				{withHeader && headerProps && <LayerHeader {...headerProps} />}
				{children}
			</div>
		</div>
	);
};

export default CommonLayer;
