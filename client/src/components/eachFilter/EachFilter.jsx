const EachFilter = ({
	value,
	filtersSet,
	selectedFilters,
	setSelectedFilters
}) => {
	return (
		<div>
			<input
				type='checkbox'
				name={value}
				id={value}
				onChange={() => filtersSet(value, selectedFilters, setSelectedFilters)}
			/>
			<label htmlFor={value}>{value}</label>
		</div>
	);
};

export default EachFilter;
