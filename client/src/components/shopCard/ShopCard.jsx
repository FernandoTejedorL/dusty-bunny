import {
	StyledCardButton,
	StyledNameAndPrice,
	StyledProductPic,
	StyledShopCard
} from './shopCard.styles';

const ShopCard = ({ item }) => {
	return (
		<StyledShopCard>
			<StyledProductPic src={item.image} alt='fluff-pic' />
			<StyledNameAndPrice>
				<span>{item.name}</span>
				<span>{item.price}€</span>
			</StyledNameAndPrice>
			<StyledCardButton>Add to Cart</StyledCardButton>
			<StyledCardButton>More info</StyledCardButton>
		</StyledShopCard>
	);
};

export default ShopCard;
