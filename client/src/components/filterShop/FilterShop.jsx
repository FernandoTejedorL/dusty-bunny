import { StyledCheckBox, StyledFilterContainer } from './filterShop.styles';

const FilterShop = ({ value, item, action }) => {
	return (
		<StyledFilterContainer key={item.name}>
			<label htmlFor={value}>{value}</label>

			<StyledCheckBox
				type='checkbox'
				name={item.type}
				id={value}
				value={value}
				onChange={event => action(event)}
			/>
		</StyledFilterContainer>
	);
};

export default FilterShop;
