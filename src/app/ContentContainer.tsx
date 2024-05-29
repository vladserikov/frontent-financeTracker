import { lazy, Suspense } from 'react';

import Statistics from './statistics/Statistics';
import AppContentLayer from './ui/layers/AppContentLayer';
// import Wallets from './wallets/Wallets';

const LazyWallet = lazy(() => import('./wallets/Wallets'));

const ContentContainer = () => {
	return (
		<AppContentLayer>
			<Suspense fallback={<>Loading</>}>
				<LazyWallet />
			</Suspense>
			<Statistics />
		</AppContentLayer>
	);
};

export default ContentContainer;

