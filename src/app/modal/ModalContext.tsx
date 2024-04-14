import { createContext } from 'react';

type ModalState = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalStateContext = createContext<ModalState>({
	open: false,
	setOpen: () => {},
});

