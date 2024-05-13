import Statistics from './statistics/Statistics';
import AppContentLayer from './ui/layers/AppContentLayer';
import Wallets from './wallets/Wallets';

const ContentContainer = () => {
	return (
		<AppContentLayer>
			<Wallets />
			<Statistics />
		</AppContentLayer>
	);
};

export default ContentContainer;

