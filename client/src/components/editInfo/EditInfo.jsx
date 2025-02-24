import { FILTERS } from '../../constants/filters';

const EditInfo = ({ product }) => {
	const defaultValues = {
		size: product.size,
		category: product.category,
		diet: product.diet
	};
	const isProduct = !Object.keys(product).length;

	if (isProduct) return <h2>Loading...</h2>;
	return (
		<form>
			<div>
				<label htmlFor='description'>Description</label>
				<input
					type='text'
					name='description'
					id='description'
					defaultValue={product.description}
				/>
			</div>

			{FILTERS.map(filter => {
				return (
					<div key={filter.id}>
						<label htmlFor={filter.type}>{filter.name}</label>
						<select
							name={filter.type}
							id={filter.type}
							defaultValue={defaultValues[filter.type]}
						>
							{filter.values.map(item => (
								<option key={item} value={item}>
									{item}
								</option>
							))}
						</select>
					</div>
				);
			})}

			<input type='submit' />
		</form>
	);
};

export default EditInfo;

// const updateProductInfo = async (id, event) => {
// 	event.preventDefault();
// 	const newInfo = {
// 		description: event.description.value,
// 		category: event.category.value,
// 		size: event.size.value,
// 		diet: event.diet.value,
// 		price: event.price.value
// 	};
// 	console.log(newInfo);
// 	console.log(id);
// };
