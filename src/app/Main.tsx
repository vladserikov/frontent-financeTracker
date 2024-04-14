import Statistics from './storages/Statistics';
import Storages from './storages/Storages';
import { bem } from './utils/classnames';

const [mainLayer] = bem('layer');

const Main = () => {
	return (
		<div className={mainLayer}>
			<Storages />
			<Statistics />
		</div>
	);
};

export default Main;

