import StickMenu from './ui/StickMenu';

import { createContext, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Outlet } from 'react-router-dom';
import { useStorages } from '../state/storages';
import { useUser } from '../state/user';
import { User } from './types';

import ModalAdd from './storages/ModalAdd';
import { getAllStorages } from './storages/utils/storages';
import { bem } from './utils/classnames';

const [blockHome] = bem('home');
const [homeLayer] = bem('layer');

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
				<ModalAdd />
			</div>
			<div className='overlay'></div>
		</div>
	);
};

function MainContent() {
	const { user } = useUser();
	const { initStorages } = useStorages();

	const [isOpenModal, setIsOpenModal] = useState(false);

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
			<ModalStateContext.Provider
				value={{ setOpen: setIsOpenModal, open: isOpenModal }}
			>
				<StickMenu />
				<div className={homeLayer}>
					<Outlet context={user satisfies User | null} />
				</div>
				{isOpenModal && createPortal(<Modal />, getHomeContainer())}
			</ModalStateContext.Provider>
		</div>
	);
}

export default MainContent;

