import StickMenu from './ui/StickMenu';

import { createContext, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Outlet } from 'react-router-dom';
import { useStorages } from '../state/storages';
import { useUser } from '../state/user';
import { User } from './types';
import { getAllStorages } from './user/userData';
import { bem } from './utils/classnames';

const [block] = bem('home');

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

const modalContainer = document.querySelector('.home')!;

const Modal: React.FC<Modal> = ({ children }) => {
	const { setOpen: onClose, open } = useContext(ModalStateContext);

	return (
		<div className={`${modalBlock} ${open ? 'visible' : ''}`}>
			<div className={closeBlock} onClick={() => onClose(false)}>
				Close
			</div>
			Modal
			{children}
		</div>
	);
};

function MainApp() {
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
		<div className={block}>
			<ModalStateContext.Provider
				value={{ setOpen: setIsOpenModal, open: isOpenModal }}
			>
				<StickMenu />
				<Outlet context={user satisfies User | null} />

				{isOpenModal && createPortal(<Modal />, modalContainer)}
			</ModalStateContext.Provider>
		</div>
	);
}

export default MainApp;

