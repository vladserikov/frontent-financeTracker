import { defaultInputElement } from '../classnames';
import InputWrapper from './InputWrapper';

type SelectFormProps = {
	options: string[];
	id: string;
	defaultValue?: string;
	className?: string;
	value?: string;
};
const [element] = defaultInputElement('element');

const SelectForm: React.FC<SelectFormProps> = ({
	defaultValue,
	className,
	id,
	options,
}) => {
	return (
		<InputWrapper className={className}>
			<select className={element} id={id} defaultValue={defaultValue} name={id}>
				{options.map((opt) => {
					return (
						<option value={opt} key={opt}>
							{opt}
						</option>
					);
				})}
			</select>
		</InputWrapper>
	);
};

export default SelectForm;

