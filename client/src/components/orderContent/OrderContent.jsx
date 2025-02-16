import { useProducts } from '../../hooks/useProducts';

const OrderContent = ({ content }) => {
	const { products } = useProducts();

	const finalProduct = findProduct(products, content);

	return (
		<div>
			<span>Fluff</span>
			<span>{finalProduct.name}</span>
			<img src={finalProduct.image} alt='' />
			<span>Quantity</span>
			<span>{content.quantity}</span>
		</div>
	);
};

const findProduct = (products, content) => {
	const productFound = products.find(product => product._id === content._id);
	return productFound;
};

export default OrderContent;
