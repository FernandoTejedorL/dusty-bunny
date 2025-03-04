import { FILTERS } from '../../constants/filters';
import { findProduct, updateProductById } from '../../utils/api';

import {
	StyledDetailTag,
	StyledEachDetail,
	StyledEditInfo,
	StyledSelect,
	StyledSubmit,
	StyledTextArea
} from './editInfo.styles';

const EditInfo = ({ product, setProduct, setEdit, id }) => {
	const defaultValues = {
		size: product.size,
		category: product.category,
		diet: product.diet
	};
	const isProduct = !Object.keys(product).length;

	if (isProduct) return <h2>Loading...</h2>;

	return (
		<StyledEditInfo
			onSubmit={event => updateProductInfo(event, id, setProduct, setEdit)}
		>
			<StyledEachDetail>
				<StyledDetailTag htmlFor='description'>Description:</StyledDetailTag>
				<StyledTextArea
					name='description'
					id='description'
					defaultValue={product.description}
				/>
			</StyledEachDetail>

			{FILTERS.map(filter => {
				return (
					<StyledEachDetail key={filter.id}>
						<StyledDetailTag htmlFor={filter.type}>
							{filter.name}:
						</StyledDetailTag>
						<StyledSelect
							name={filter.type}
							id={filter.type}
							defaultValue={defaultValues[filter.type]}
						>
							{filter.values.map(item => (
								<option key={item} value={item}>
									{item}
								</option>
							))}
						</StyledSelect>
					</StyledEachDetail>
				);
			})}
			<StyledEachDetail>
				<StyledDetailTag htmlFor='price'>Price:</StyledDetailTag>
				<input
					type='number'
					name='price'
					id='price'
					step='0.01'
					defaultValue={parseFloat(product.price)}
				/>
			</StyledEachDetail>
			<StyledSubmit type='submit' value='Confirm Changes' />
		</StyledEditInfo>
	);
};

export default EditInfo;

const updateProductInfo = async (event, id, setProduct, setEdit) => {
	event.preventDefault();
	const newInfo = {
		description: event.target.description.value,
		category: event.target.category.value,
		size: event.target.size.value,
		diet: event.target.diet.value,
		price: event.target.price.value
	};
	try {
		await updateProductById(id, newInfo);
		const updatedProduct = await findProduct(id);
		setProduct(updatedProduct);
		setEdit(false);
	} catch (error) {
		console.log(error);
	}
};
