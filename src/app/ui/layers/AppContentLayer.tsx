import clsx from 'clsx';
import React from 'react';

import { bem } from '../../utils/classnames';

const [contentBlock] = bem('content-layer');

type AppContentLayer = {
	children?: React.ReactNode;
	layerClass?: string;
};

const AppContentLayer: React.FC<AppContentLayer> = ({
	children,
	layerClass,
}) => {
	return <div className={clsx([contentBlock, layerClass])}>{children}</div>;
};

export default AppContentLayer;

