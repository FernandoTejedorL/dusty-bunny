const FilterShop = ({ value, item, action }) => {
	return (
		<div key={item.name}>
			<label>{value}</label>
			<input
				type='checkbox'
				name={item.type}
				value={value}
				onChange={event => action(event)}
			/>
		</div>
	);
};

export default FilterShop;
