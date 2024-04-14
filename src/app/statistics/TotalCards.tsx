import { bem } from '../utils/classnames';
import {
	KeysStatistics,
	StatisticsTransaction,
	ValueStatistic,
} from './Statistics';

const [totalLayer] = bem('total-layer');

const [totalBlock] = bem('total');

const [cardBlock, cardElement] = bem('value-card');
const [cardWrapper] = cardElement('wrapper');
const [cardIcon] = cardElement('icon');
const [cardName] = cardElement('name');
const [cardValue] = cardElement('value');

const ValueCard: React.FC<ValueStatistic> = ({ amount, icon, name, unit }) => {
	return (
		<div className={cardBlock}>
			<div className={cardName}>{name}</div>
			<div className={cardWrapper}>
				<div className={cardIcon}>{icon}</div>
				<div className={cardValue}>
					{unit} {amount}
				</div>
			</div>
		</div>
	);
};

const TotalCards: React.FC<StatisticsTransaction> = (props) => {
	return (
		<div className={`${totalLayer} common-layer`}>
			<div className={totalBlock}>
				{Object.keys(props).map((key) => {
					const keyProps = props[key as KeysStatistics];
					return <ValueCard {...keyProps} key={keyProps.name} />;
				})}
			</div>
		</div>
	);
};

export default TotalCards;

