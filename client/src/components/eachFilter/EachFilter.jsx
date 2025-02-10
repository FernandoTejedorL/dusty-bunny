const EachFilter = ({ setSelectedFilters, value }) => {
	return (
		<div>
			<input
				type='checkbox'
				name={value}
				id={value}
				onChange={() => setSelectedFilters(value)}
			/>
			<label htmlFor={value}>{value}</label>
		</div>
	);
};

export default EachFilter;
