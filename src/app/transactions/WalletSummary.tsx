import AppContentLayer from '../ui/layers/AppContentLayer';
import { bem } from '../utils/classnames';
import Wallets from '../wallets/Wallets';
import TransactionsData from './TransactionsData';

const [contentLayer] = bem('transaction-layer');

const WalletSummary = () => {
	return (
		<AppContentLayer layerClass={contentLayer}>
			<Wallets />
			<TransactionsData />
		</AppContentLayer>
	);
};

export default WalletSummary;

