import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import CartCard from '../cartCard/CartCard';
import {
	StyledCart,
	StyledCartButton,
	StyledCartContainer,
	StyledCartCounter,
	StyledChevron,
	StyledCloserTile,
	StyledEmptyImg
} from './sideCart.styles';

const SideCart = ({ buttonText, action }) => {
	const { cartState, totalQuantity } = useCart();
	const [cartOpen, setCartOpen] = useState(false);
	return (
		<StyledCart>
			<StyledCloserTile onClick={() => setCartOpen(!cartOpen)}>
				<StyledCartCounter>{totalQuantity}</StyledCartCounter>
				<span>Cart</span>
				<StyledChevron
					$cartOpen={cartOpen}
					src='/assets/images/common/chevron-dwn.png'
					alt='open-cart'
				/>
			</StyledCloserTile>
			<StyledCartContainer $cartOpen={cartOpen}>
				{cartState.length === 0 && (
					<StyledEmptyImg src='/assets/images/common/empty.jpg' alt='' />
				)}
				{cartState.length !== 0 && (
					<StyledCartButton onClick={action}>{buttonText}</StyledCartButton>
				)}

				{cartState.map(item => (
					<CartCard
						key={item._id}
						id={item._id}
						image={item.image}
						name={item.name}
						quantity={item.quantity}
					/>
				))}
			</StyledCartContainer>
		</StyledCart>
	);
};

export default SideCart;
