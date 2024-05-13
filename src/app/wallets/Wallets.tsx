import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { walletIdSelector } from '../../state/hooks';
import { initWallet } from '../../state/wallet';
import { useGetAllWalletsQuery } from '../../state/walletsApi';
import { plusSvg } from '../svg/plus';
import { Wallet } from '../types';
import LayerHeader from '../ui/layers/LayerHeader';
import WalletCard from '../ui/wallet/WalletCard';
import { bem } from '../utils/classnames';

const [layerWallets] = bem('wallets-layer');
const [walletsBlock, walletsBlockElement] = bem('wallets');
const [cards] = walletsBlockElement('cards');

const Wallets = () => {
	const hookData = useGetAllWalletsQuery();

	const { data: wallets, isLoading } = hookData;

	const walletId = useSelector(walletIdSelector);
	const dispatch = useDispatch();

	const selectWallet = useCallback(
		(newWallet: Wallet) => {
			dispatch(initWallet(newWallet));
		},
		[dispatch]
	);

	useEffect(() => {
		if (!walletId && wallets?.length) {
			selectWallet(wallets[0]);
		}
	}, [selectWallet, walletId, wallets]);

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

