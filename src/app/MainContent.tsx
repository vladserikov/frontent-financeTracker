import StickMenu from './ui/StickMenu';

import { createContext, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useStorages } from '../state/storages';
import { useUser } from '../state/user';
import { User } from './types';

import { getAllStorages } from './storages/utils/storages';
import { bem } from './utils/classnames';

const [blockHome] = bem('home');
const [mainLayer] = bem('layer');

type ModalState = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalStateContext = createContext<ModalState>({
	open: false,
	setOpen: () => {},
});

type Modal = {
	children?: React.ReactNode;
};

const [modalBlock, elementModal] = bem('modal-dialog');
const [closeBlock] = elementModal('close-btn');

const getHomeContainer = () => document.querySelector('.home')!;

const Modal: React.FC<Modal> = () => {
	const { setOpen: onClose, open } = useContext(ModalStateContext);

	return (
		<div className={`${modalBlock} ${open ? 'visible' : ''}`}>
			<div className='modal-window'>
				<div className={closeBlock} onClick={() => onClose(false)}>
					Close
				</div>
				Modal
			</div>
			<div className='overlay'></div>
		</div>
	);
};

function MainContent() {
	const { user } = useUser();
	const { initStorages } = useStorages();

	useEffect(() => {
		const fn = async () => {
			if (user?.token) {
				try {
					const loadData = await getAllStorages(user.token);
					initStorages(loadData);
				} catch (error) {
					console.log(error);
				}
			}
		};

		fn();
	}, [user?.token]);

	return (
		<div className={blockHome}>
			<StickMenu />
			<Outlet context={user satisfies User | null} />
		</div>
	);
}

export default MainContent;

