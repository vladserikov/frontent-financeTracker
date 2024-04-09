import { useStorages, useUser } from '../../state/user';
import { bem } from '../utils/classnames';
import { addedStorage } from './addedStorage';
import CardBalance from './CardBalance';

// const { block: blockHeader } = bem('balance');
const [blockHeader] = bem('balance');
const [blockCards] = bem('cards');

const Balance = () => {
	const { storages, addStorage } = useStorages();
	const {
		user: { token },
	} = useUser();

	const createStorage = async (obj: {
		name: string;
		amount: number;
		unit: string;
	}) => {
		try {
			const result = await addedStorage({}, token);
			addStorage(result);
		} catch (error) {
			console.log(error);
		}
	};
	// useEffect(() => {

	// }, [storages.length])

	return (
		<div className={blockHeader}>
			<div>
				Счета <button>create</button>
			</div>
			<div className={blockCards}>
				{storages.map((storage) => (
					<CardBalance key={storage.id} {...storage} />
				))}
			</div>
		</div>
	);
};

export default Balance;

