import EachFilter from '../eachFilter/EachFilter';

const FilterGroup = ({
	item,
	filtersSet,
	setSelectedFilters,
	filteredProducts
}) => {
	return (
		<div>
			<span>{item.name}</span>
			{item.values.map(value => (
				<EachFilter
					filtersSet={filtersSet}
					setSelectedFilters={setSelectedFilters}
					filteredProducts={filteredProducts}
					key={item.id}
					value={value}
					type={item.type}
				/>
			))}
		</div>
	);
};

export default FilterGroup;
