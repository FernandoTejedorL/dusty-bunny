import { Link } from 'react-router-dom';

import {
	actionAddToCart,
	actionDecrementQuantity,
	actionIncrementQuantity
} from '../../actions/cart-actions';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

import {
	StyledCardButton,
	StyledMoreInfo,
	StyledNameAndPrice,
	StyledProductPic,
	StyledQuantity,
	StyledQuantityButtons,
	StyledQuantityEditors,
	StyledShopCard
} from './shopCard.styles';

const ShopCard = ({ item, text, action }) => {
	const { cartState, dispatch, quantityToCard } = useCart();
	const { user } = useAuth();

	const isInCart = cartState.some(product => product._id === item._id);
	const quantity = quantityToCard(item, cartState);
	const where = user ? '' : '/redirect';

	return (
		<StyledShopCard $user={user}>
			<Link to={where}>
				<StyledProductPic src={item.image} alt='fluff-pic' />
			</Link>
			<StyledNameAndPrice>
				<span>{item.name}</span>
				<span>{item.price}€</span>
			</StyledNameAndPrice>
			{user && (
				<>
					{!isInCart && !user.vendor && (
						<StyledCardButton onClick={() => dispatch(actionAddToCart(item))}>
							Add to Cart
						</StyledCardButton>
					)}
					{isInCart && (
						<StyledQuantityEditors>
							<StyledQuantityButtons
								onClick={() =>
									dispatch(actionDecrementQuantity(item, quantity))
								}
							>
								{quantity === 1 && (
									<img src='/assets/images/common/delete.svg' alt='delete' />
								)}
								{quantity !== 1 && (
									<img src='/assets/images/common/remove.svg' alt='reduce' />
								)}
							</StyledQuantityButtons>
							<StyledQuantity>{quantity}</StyledQuantity>
							<StyledQuantityButtons
								onClick={() => dispatch(actionIncrementQuantity(item))}
							>
								<img src='/assets/images/common/add.svg' alt='increment' />
							</StyledQuantityButtons>
						</StyledQuantityEditors>
					)}

					<StyledMoreInfo onClick={action}>{text}</StyledMoreInfo>
				</>
			)}
		</StyledShopCard>
	);
};

export default ShopCard;
