import { balanceSvg } from '../svg/balance';
import { otherSvg } from '../svg/other';
import { bem } from '../utils/classnames';
import EditBtn from './EditBtn';

type StorageCartProps = {
	amount: number;
	unit: string;
	name: string;
	onEdit: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	onSelect: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	isSelected: boolean;
	id: string;
};

const [cardBlock, cardElement, cardModif] = bem('card');
const [cardContent] = cardElement('content');
const [cardIcon, iconModifier] = cardElement('icon');
const [cardAmount] = cardElement('amount');
const [cardName] = cardElement('name');
const [cardBtn] = cardElement('edit-btn');
const iconCircle = iconModifier('circle');
const selectedCard = cardModif('selected');

const StorageCard: React.FC<StorageCartProps> = ({
	amount,
	name,
	unit,
	onEdit,
	onSelect,
	isSelected,
	id,
}) => {
	return (
		<div
			className={`${cardBlock} ${isSelected ? selectedCard : ''}`}
			onClick={onSelect}
		>
			<EditBtn to={`/app/main/${id}`} className={cardBtn} icon={otherSvg} />
			<div className={cardContent}>
				<div className={cardIcon}>
					<div className={iconCircle}>{balanceSvg}</div>
				</div>
				<div className={cardAmount}>
					<span>{unit}</span> <span>{amount}</span>
				</div>
				<div className={cardName}>{name}</div>
			</div>
		</div>
	);
};

export default StorageCard;

