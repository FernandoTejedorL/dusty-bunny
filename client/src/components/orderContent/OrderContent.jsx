import { useProducts } from '../../hooks/useProducts';
import {
	StyledContentImage,
	StyledOrderContent,
	StyledOrderCOntentInfo
} from './orderContent.styles';

const OrderContent = ({ content }) => {
	const { products } = useProducts();

	const finalProduct = findProduct(products, content);

	return (
		<StyledOrderContent>
			<StyledContentImage src={finalProduct.image} alt='' />
			<StyledOrderCOntentInfo>
				<span>{finalProduct.name}</span>
				<span>Quantity: {content.quantity}</span>
			</StyledOrderCOntentInfo>
		</StyledOrderContent>
	);
};

const findProduct = (products, content) => {
	const productFound = products.find(product => product._id === content._id);
	return productFound;
};

export default OrderContent;
