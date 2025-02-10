import { v4 } from 'uuid';
import EachFilter from '../eachFilter/EachFilter';

const FilterGroup = ({
	item,
	filtersSet,
	selectedFilters,
	setSelectedFilters
}) => {
	return (
		<div>
			<span>{item.type}</span>
			{item.values.map(value => (
				<EachFilter
					filtersSet={filtersSet}
					selectedFilters={selectedFilters}
					setSelectedFilters={setSelectedFilters}
					key={v4()}
					value={value}
				/>
			))}
		</div>
	);
};

export default FilterGroup;
