import Statistics from './statistics/Statistics';
import { bem } from './utils/classnames';
import Wallets from './wallets/Wallets';

const [contentLayer] = bem('layer');

const ContentContainer = () => {
	return (
		<div className={contentLayer}>
			<Wallets />
			<Statistics />
		</div>
	);
};

export default ContentContainer;

