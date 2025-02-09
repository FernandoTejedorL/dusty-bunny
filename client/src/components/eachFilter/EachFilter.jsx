const EachFilter = ({ value }) => {
	return (
		<div>
			<input type='checkbox' name={value} id={value} />
			<label htmlFor={value}>{value}</label>
		</div>
	);
};

export default EachFilter;
