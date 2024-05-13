import { useContext } from 'react';

import { bem } from '../utils/classnames';
import { ModalStateContext } from './ModalContext';

type Modal = {
	children?: React.ReactNode;
};

const [modalBlock, elementModal] = bem('modal-dialog');
const [closeBlock] = elementModal('close-btn');

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

export default Modal;

