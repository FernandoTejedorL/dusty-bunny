import { useCart } from '../../hooks/useCart';
import {
	StyledCardButton,
	StyledNameAndPrice,
	StyledProductPic,
	StyledShopCard
} from './shopCard.styles';

const ShopCard = ({ item }) => {
	const { addToCart } = useCart();

	return (
		<StyledShopCard>
			<StyledProductPic src={item.image} alt='fluff-pic' />
			<StyledNameAndPrice>
				<span>{item.name}</span>
				<span>{item.price}€</span>
			</StyledNameAndPrice>
			<StyledCardButton onClick={() => addToCart(item)}>
				Add to Cart
			</StyledCardButton>
			<StyledCardButton>More info</StyledCardButton>
		</StyledShopCard>
	);
};

export default ShopCard;
