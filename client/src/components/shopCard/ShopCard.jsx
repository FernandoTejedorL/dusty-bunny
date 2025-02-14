import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import {
	StyledCardButton,
	StyledMoreInfo,
	StyledNameAndPrice,
	StyledProductPic,
	StyledQuantityButtons,
	StyledQuantityEditors,
	StyledShopCard
} from './shopCard.styles';
import { useAuth } from '../../hooks/useAuth';

const ShopCard = ({ item }) => {
	const {
		cart,
		incrementQuantity,
		decrementQuantity,
		addToCart,
		quantityToCard
	} = useCart();
	const { user } = useAuth();
	const navigate = useNavigate();

	const isInCart = cart.some(product => product._id === item._id);
	const quantity = quantityToCard(item, cart);
	const where = user ? '' : '/redirect';

	return (
		<StyledShopCard $user={user} onClick={() => navigate(where)}>
			<StyledProductPic src={item.image} alt='fluff-pic' />
			<StyledNameAndPrice>
				<span>{item.name}</span>
				<span>{item.price}€</span>
			</StyledNameAndPrice>
			{user && (
				<>
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
						<StyledMoreInfo>More info</StyledMoreInfo>
					</Link>
				</>
			)}
		</StyledShopCard>
	);
};

export default ShopCard;
