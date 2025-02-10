const EachFilter = ({ value, filtersSet, setSelectedFilters, type }) => {
	return (
		<div>
			<input
				type='checkbox'
				name={value}
				id={value}
				onChange={() => {
					filtersSet(value, type, setSelectedFilters);
				}}
			/>
			<label htmlFor={value}>{value}</label>
		</div>
	);
};

export default EachFilter;
