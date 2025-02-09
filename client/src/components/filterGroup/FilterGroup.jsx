import { v4 } from 'uuid';
import EachFilter from '../eachFilter/EachFilter';

const FilterGroup = ({ filter }) => {
	return (
		<div>
			<span>{filter.type}</span>
			{filter.values.map(value => (
				<EachFilter key={v4()} value={value} />
			))}
		</div>
	);
};

export default FilterGroup;
