import { useCart } from '../../hooks/useCart';
import {
	StyledCardButton,
	StyledNameAndPrice,
	StyledProductPic,
	StyledShopCard
} from './shopCard.styles';

const ShopCard = ({ item }) => {
	const {
		cart,
		addToCart,
		incrementQuantity,
		decrementQuantity,
		quantityToCard
	} = useCart();

	const isInCart = cart.some(product => product._id === item._id);

	const quantity = quantityToCard(item, cart);
	console.log(quantity);

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
				<>
					<button onClick={() => decrementQuantity(item)}>
						{quantity === 1 && (
							<img src='/assets/images/common/delete.svg' alt='delete' />
						)}
						{quantity !== 1 && (
							<img src='/assets/images/common/remove.svg' alt='reduce' />
						)}
					</button>
					<span>{quantity}</span>
					<button onClick={() => incrementQuantity(item)}>
						<img src='/assets/images/common/add.svg' alt='increment' />
					</button>
				</>
			)}
			<StyledCardButton>More info</StyledCardButton>
		</StyledShopCard>
	);
};

// const quantityToCard = (item, cart) => {
// 	const product = cart.find(product => product._id === item._id);
// 	return product ? product.quantity : 0;
// };

export default ShopCard;
