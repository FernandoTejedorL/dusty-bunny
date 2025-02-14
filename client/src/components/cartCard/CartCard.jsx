import { useCart } from '../../hooks/useCart';
import {
	StyledCartCard,
	StyledCartElementInfo,
	StyledCartImage
} from './cartCard.styles';

const CartCard = ({ id, image, name }) => {
	const { cart } = useCart();

	const finalPrice = totalPrice(id, cart);
	return (
		<StyledCartCard>
			<StyledCartImage src={image} alt='image' />
			<StyledCartElementInfo>
				<span>{name}</span>
				<span>{finalPrice.toFixed(2)}€</span>
			</StyledCartElementInfo>
		</StyledCartCard>
	);
};

const totalPrice = (id, cart) => {
	const toCheck = cart.find(item => item._id === id);
	const price = toCheck.quantity * toCheck.price;
	return price;
};

export default CartCard;
