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

const Wallets = () => {
	const hookData = useGetAllWalletsQuery('');

	const { data: wallets, isLoading } = hookData;

	const wallet = useSelector(walletsSelector);
	const dispatch = useDispatch();
	console.log({ hookData });
	useEffect(() => {
		if (!wallet.id && wallets?.length) {
			dispatch(initWallet(wallets[0]));
		}
	}, [wallets]);

	if (isLoading) {
		return <>Loading...</>;
	}
	const onSelectWallet =
		(newWallet: Wallet) =>
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			e.stopPropagation();
			if (wallet.id === newWallet.id) return;
			dispatch(initWallet(newWallet));
		};

	const onEditWallet = (newWallet: Wallet) => () => {
		if (wallet.id !== newWallet.id) {
			dispatch(initWallet(newWallet));
		}
	};

	return (
		<>
			<div className={`${layerWallets} common-layer`}>
				<div className={walletsBlock}>
					<LayerHeader
						name='Счета'
						button={{ to: '/app/add-wallet', icon: plusSvg }}
					/>
					<div className={cards}>
						{wallets.map((s) => (
							<WalletCard
								amount={s.amount}
								name={s.name}
								unit={s.unit}
								key={s.id}
								id={s.id}
								onSelect={onSelectWallet(s)}
								onEdit={onEditWallet(s)}
								isSelected={wallet.id === s.id}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Wallets;

