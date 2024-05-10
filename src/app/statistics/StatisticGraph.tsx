import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { bem } from '../utils/classnames';

const [graphBlock, graphElement] = bem('graph-layer');
const [charBlock] = graphElement('chart');

Chart.register(ArcElement, Tooltip, Legend);

const StatisticGraph = () => {
	const chart = useRef<null | Chart<'doughnut'>>();

	useEffect(() => {
		if (chart.current?.canvas) {
			chart.current.canvas.width = 100;
		}
	}, []);

	return (
		<div className={`${graphBlock} common-layer`}>
			<div className={charBlock}>
				<Doughnut
					ref={chart}
					options={{
						plugins: {
							legend: {
								position: 'left',
								labels: {
									usePointStyle: true,
									boxWidth: 200,
								},
								title: {
									text: 'Расходы',
									display: true,
									position: 'center',
									font: {
										size: 24,
									},
								},
								maxWidth: 200,
							},
						},
						cutout: '70%',
						responsive: true,
						maintainAspectRatio: false,
					}}
					data={{
						labels: ['Test1', 'Test2', 'test3'],
						datasets: [
							{
								label: 'Расходы',
								data: [5, 10, 15],
								borderRadius: 1,
								borderWidth: 1,
								backgroundColor: ['red', 'orange', 'black'],
								spacing: 5,
							},
						],
					}}
				/>
			</div>
		</div>
	);
};

export default StatisticGraph;

