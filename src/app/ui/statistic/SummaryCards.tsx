import type { KeysTransactionSummary, TransactionSummary } from '../../types';
import { bem } from '../../utils/classnames';
import SummaryEntityCard from './SummaryEntityCard';

const [summaryLayer] = bem('summary-layer');
const [summaryBlock] = bem('summary');

const SummaryCards: React.FC<TransactionSummary> = (props) => {
	return (
		<div className={`${summaryLayer} common-layer`}>
			<div className={summaryBlock}>
				{Object.keys(props).map((key) => {
					const keyProps = props[key as KeysTransactionSummary];
					return <SummaryEntityCard {...keyProps} key={keyProps.name} />;
				})}
			</div>
		</div>
	);
};

export default SummaryCards;

