import { useSelector } from 'react-redux';

import { walletSelector } from '../../state/hooks';
import { useStatisticData } from '../statistics/statisticsHook';
import LayerHeader from '../ui/layers/LayerHeader';
import TransactionCard from '../ui/statistic/TransactionCard';
import { bem } from '../utils/classnames';

const [, transactionElement] = bem('transactions-data');
const [expenseBlock] = transactionElement('expense');
const [incomeBlock] = transactionElement('income');

const TransactionsData = () => {
	const wallet = useSelector(walletSelector);
	const data = useStatisticData(wallet);

	return (
		<>
			<div className={`${expenseBlock} common-layer`}>
				<LayerHeader name='Доходы' />
				{data['expense'].transactions.map((t, i) => {
					return <TransactionCard key={`${t.id}-${i}`} {...t} />;
				})}
			</div>
			<div className={`${incomeBlock} common-layer`}>
				<LayerHeader name='Расходы' />
				{data['income'].transactions.map((t, i) => {
					return <TransactionCard key={`${t.id}-${i}`} {...t} />;
				})}
			</div>
		</>
	);
};

export default TransactionsData;

