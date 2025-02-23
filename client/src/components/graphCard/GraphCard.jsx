import { useNavigate } from 'react-router-dom';
import {
	StyledGraphCard,
	StyledGraphImage,
	StyledGraphProduct,
	StyledPercentBar,
	StyledTextInPercent
} from './graphCard.styles';

const GraphCard = ({ product, type, total }) => {
	const productPercent = (product[type] * 100) / total;
	const navigate = useNavigate();
	return (
		<StyledGraphCard>
			<StyledGraphProduct onClick={() => navigate(`/product/${product._id}`)}>
				<StyledGraphImage src={product.image} alt='product' />
				<span>{product.name}</span>
			</StyledGraphProduct>
			<StyledPercentBar $percent={productPercent}>
				<StyledTextInPercent>{productPercent.toFixed(2)}%</StyledTextInPercent>
				{type === 'ordered' ? (
					<StyledTextInPercent>
						{(product.ordered * product.price).toFixed(2)}€
					</StyledTextInPercent>
				) : null}
			</StyledPercentBar>
		</StyledGraphCard>
	);
};

export default GraphCard;
