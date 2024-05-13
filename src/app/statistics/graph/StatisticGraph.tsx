import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import { useContext, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { SummaryEntity, TransactionSummary } from '../../types';
import LayerHeader from '../../ui/layers/LayerHeader';
import { bem } from '../../utils/classnames';
import { StatisticContext } from '../statisticContext';

const [graphBlock, graphElement] = bem('graph-layer');
const [charBlock] = graphElement('chart');

Chart.register(ArcElement, Tooltip, Legend);

const createGraphData = (data: SummaryEntity) => {
	const initData: { labels: string[]; values: number[] } = {
		labels: [],
		values: [],
	};

	return data.transactions.reduce((acc, curr) => {
		acc.labels.push(curr.category);
		acc.values.push(curr.amount);
		return acc;
	}, initData);
};

const defaultColors = ['#2C3039', '#E9CB9E', '#F5E2C3', '#C4A577'];

const StatisticGraph: React.FC<TransactionSummary> = (props) => {
	const { currentType } = useContext(StatisticContext);

	const { labels, values } = createGraphData(props[currentType]);

	const chart = useRef<null | Chart<'doughnut'>>();

	return (
		<div className={`${graphBlock} common-layer`}>
			<div className={charBlock}>
				<LayerHeader name={currentType === 'expense' ? 'Расходы' : 'Доходы'} />
				<div style={{ position: 'relative', height: '70%' }}>
					<Doughnut
						ref={chart}
						options={{
							plugins: {
								legend: {
									position: 'left',
									labels: {
										usePointStyle: true,
									},
								},
							},
							cutout: '70%',
							responsive: true,
							maintainAspectRatio: false,
						}}
						data={{
							labels: labels,
							datasets: [
								{
									data: values,
									backgroundColor: defaultColors,
								},
							],
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default StatisticGraph;

