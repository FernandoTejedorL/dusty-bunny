import { useNavigate } from 'react-router-dom';

import {
	StyledDataDiv,
	StyledGraphCard,
	StyledGraphImage,
	StyledGraphProduct,
	StyledPercentBar,
	StyledPercentBarContainer,
	StyledTextInPercent
} from './graphCard.styles';

const GraphCard = ({ product, type, total }) => {
	const navigate = useNavigate();

	const productPercent = (product[type] * 100) / total;

	return (
		<StyledGraphCard>
			<StyledGraphProduct onClick={() => navigate(`/product/${product._id}`)}>
				<StyledGraphImage src={product.image} alt='product' />
				<span>{product.name}</span>
			</StyledGraphProduct>
			<StyledPercentBarContainer>
				<StyledPercentBar $percent={productPercent} />
				<StyledDataDiv>
					<StyledTextInPercent>
						{productPercent.toFixed(2)}%
					</StyledTextInPercent>
					{type === 'ordered' && (
						<StyledTextInPercent>
							{(product.ordered * product.price).toFixed(2)}€
						</StyledTextInPercent>
					)}
				</StyledDataDiv>
			</StyledPercentBarContainer>
		</StyledGraphCard>
	);
};

export default GraphCard;
