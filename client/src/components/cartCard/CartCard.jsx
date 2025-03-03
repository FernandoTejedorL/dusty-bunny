import { useCart } from '../../hooks/useCart';
import {
	StyledCartCard,
	StyledCartElementInfo,
	StyledCartImage
} from './cartCard.styles';

const CartCard = ({ id, image, name, quantity }) => {
	const { cartState } = useCart();
	const finalPrice = totalPrice(id, cartState);

	return (
		<StyledCartCard>
			<StyledCartImage src={image} alt='image' />
			<StyledCartElementInfo>
				<span>{name}</span>
				<span>x{quantity}</span>
				<span>{finalPrice.toFixed(2)}€</span>
			</StyledCartElementInfo>
		</StyledCartCard>
	);
};

const totalPrice = (id, cartState) => {
	const toCheck = cartState.find(item => item._id === id);
	const price = toCheck.quantity * toCheck.price;
	return price;
};

export default CartCard;
