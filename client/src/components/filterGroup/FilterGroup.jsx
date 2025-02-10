import { v4 } from 'uuid';
import EachFilter from '../eachFilter/EachFilter';

const FilterGroup = ({ item, filtersSet, setSelectedFilters }) => {
	return (
		<div>
			<span>{item.type}</span>
			{item.values.map(value => (
				<EachFilter
					filtersSet={filtersSet}
					setSelectedFilters={setSelectedFilters}
					key={v4()}
					value={value}
					type={item.type}
				/>
			))}
		</div>
	);
};

export default FilterGroup;
