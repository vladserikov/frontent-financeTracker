import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useStorages } from '../../state/storages';
import { ModalStateContext } from '../MainApp';
import { User } from '../types';

const Storages = () => {
	const { setOpen } = useContext(ModalStateContext);
	const user = useOutletContext<User | null>();
	const { storages, addStorage } = useStorages();

	// console.log({ user, storages });

	// const onAddStorage = async (newStorage: NewStorage) => {
	// 	const result = await addedStorage(newStorage, user?.token || '');
	// 	console.log({ result });
	// };

	return (
		<div>
			<div>
				<div>счета</div>
				<div>
					<button
						onClick={() => {
							setOpen(true);
						}}
					>
						add
					</button>
				</div>
			</div>
		</div>
	);
};

export default Storages;

