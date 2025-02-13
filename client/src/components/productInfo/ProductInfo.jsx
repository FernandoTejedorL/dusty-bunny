import ProducDetail from '../productDetail/ProducDetail';
const names = ['Category', 'Size', 'Diet', 'Price', 'Description'];

const ProductInfo = ({ product }) => {
	return (
		<div>
			{names.map(name => (
				<ProducDetail
					key={name}
					name={name}
					info={product[name.toLowerCase()]}
				/>
			))}
		</div>
	);
};

export default ProductInfo;
