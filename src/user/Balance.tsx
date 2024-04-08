import { bem } from '../utils/classnames';

// const { block: blockHeader } = bem('balance');
const [blockHeader] = bem('balance');
const [blockCards] = bem('cards');

const Balance = () => {
	return (
		<div className={blockHeader}>
			<div>
				Счета <button>create</button>
			</div>
			<div className={blockCards}></div>
		</div>
	);
};

export default Balance;

