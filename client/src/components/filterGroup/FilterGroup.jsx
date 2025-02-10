import { v4 } from 'uuid';
import EachFilter from '../eachFilter/EachFilter';

const FilterGroup = ({ item, setSelectedFilters }) => {
	return (
		<div>
			<span>{item.type}</span>
			{item.values.map(value => (
				<EachFilter
					setSelectedFilters={setSelectedFilters}
					key={v4()}
					value={value}
				/>
			))}
		</div>
	);
};

export default FilterGroup;
