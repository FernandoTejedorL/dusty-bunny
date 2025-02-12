import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import {
	StyledCardButton,
	StyledNameAndPrice,
	StyledProductPic,
	StyledQuantityButtons,
	StyledQuantityEditors,
	StyledShopCard
} from './shopCard.styles';

const ShopCard = ({ item }) => {
	const {
		cart,
		incrementQuantity,
		decrementQuantity,
		addToCart,
		quantityToCard
	} = useCart();

	const isInCart = cart.some(product => product._id === item._id);

	const quantity = quantityToCard(item, cart);

	return (
		<StyledShopCard>
			<StyledProductPic src={item.image} alt='fluff-pic' />
			<StyledNameAndPrice>
				<span>{item.name}</span>
				<span>{item.price}€</span>
			</StyledNameAndPrice>
			{!isInCart && (
				<StyledCardButton onClick={() => addToCart(item)}>
					Add to Cart
				</StyledCardButton>
			)}
			{isInCart && (
				<StyledQuantityEditors>
					<StyledQuantityButtons onClick={() => decrementQuantity(item)}>
						{quantity === 1 && (
							<img src='/assets/images/common/delete.svg' alt='delete' />
						)}
						{quantity !== 1 && (
							<img src='/assets/images/common/remove.svg' alt='reduce' />
						)}
					</StyledQuantityButtons>
					<span>{quantity}</span>
					<StyledQuantityButtons onClick={() => incrementQuantity(item)}>
						<img src='/assets/images/common/add.svg' alt='increment' />
					</StyledQuantityButtons>
				</StyledQuantityEditors>
			)}
			<Link to={`/product/${item._id}`}>
				<StyledCardButton>More info</StyledCardButton>
			</Link>
		</StyledShopCard>
	);
};

export default ShopCard;
