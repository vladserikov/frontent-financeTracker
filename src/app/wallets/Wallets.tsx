import { createSelector } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../state/store';
import { initWallet } from '../../state/wallet';
import { useGetAllWalletsQuery } from '../../state/walletsApi';
import { plusSvg } from '../svg/plus';
import { Wallet } from '../types';
import LayerHeader from '../ui/LayerHeader';
import WalletCard from '../ui/WalletCard';
import { bem } from '../utils/classnames';

const [layerWallets] = bem('wallets-layer');
const [walletsBlock, walletsBlockElement] = bem('wallets');
const [cards] = walletsBlockElement('cards');

const walletsSelector = createSelector(
	[(state: RootStore) => state.wallet],
	(wallet) => wallet
);

const walletIdSelector = createSelector(
	[(state: RootStore) => state.wallet],
	(wallet) => wallet.id
);

const Wallets = () => {
	const hookData = useGetAllWalletsQuery('');

	const { data: wallets, isLoading } = hookData;

	const walletId = useSelector(walletIdSelector);
	const dispatch = useDispatch();

	const selectWallet = (newWallet: Wallet) => {
		dispatch(initWallet(newWallet));
	};

	useEffect(() => {
		if (!walletId && wallets?.length) {
			selectWallet(wallets[0]);
		}
	}, [wallets]);

	if (isLoading || !wallets) {
		return <>Loading...</>;
	}
	const onSelectWallet =
		(newWallet: Wallet) =>
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			e.stopPropagation();
			if (walletId === newWallet.id) return;
			selectWallet(newWallet);
		};

	const onEditWallet = (newWallet: Wallet) => () => {
		if (walletId !== newWallet.id) {
			selectWallet(newWallet);
		}
	};

	return (
		<>
			<div className={`${layerWallets} common-layer`}>
				<div className={walletsBlock}>
					<LayerHeader
						name='Счета'
						button={{ to: '/app/main/add-wallet', icon: plusSvg }}
					/>
					<div className={cards}>
						{wallets.map((wallet) => (
							<WalletCard
								key={wallet.id}
								{...wallet}
								onSelect={onSelectWallet(wallet)}
								onEdit={onEditWallet(wallet)}
								isSelected={walletId === wallet.id}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Wallets;

