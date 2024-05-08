import { RadialChart } from 'react-vis';
import { bem } from '../utils/classnames';

const [graphBlock] = bem('graph-layer');

const StatisticGraph = () => {
	return (
		<div className={`${graphBlock} common-layer`}>
			<RadialChart
			// data={[
			// 	{
			// 		angle: 19,
			// 		label: 'deck.gl',
			// 	},
			// 	{
			// 		angle: 8,
			// 		label: 'math.gl',
			// 	},
			// 	{
			// 		angle: 31,
			// 		label: 'probe.gl',
			// 	},
			// ]}
			// labelsRadiusMultiplier={0.8}
			// labelsStyle={{
			// 	fontSize: 12,
			// }}
			// showLabels
			/>
		</div>
	);
};

export default StatisticGraph;

