import type { SummaryEntity } from '../../types';
import { bem } from '../../utils/classnames';

const [cardBlock, cardElement] = bem('summary-card');
const [cardWrapper] = cardElement('wrapper');
const [cardIcon] = cardElement('icon');
const [cardName] = cardElement('name');
const [cardValue] = cardElement('value');

const SummaryEntityCard: React.FC<SummaryEntity> = ({
	amount,
	icon,
	name,
	unit,
}) => {
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

export default SummaryEntityCard;

