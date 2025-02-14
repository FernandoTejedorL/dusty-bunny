import { Link } from 'react-router-dom';
import ShopCard from '../../components/shopCard/ShopCard';
import SideCart from '../../components/sideCart/SideCart';
import { useCart } from '../../hooks/useCart';
import { StyledHeader, StyledMain } from './cartPage.styles';

const CartPage = () => {
	const { cart, deleteFromCart } = useCart();
	return (
		<StyledMain>
			<StyledHeader>Cart</StyledHeader>
			<div>
				<SideCart buttonText={'CheckOut'} />
				<div>
					{cart.length === 0 && (
						<div>
							<img src='/assets/images/common/youknowit.jpg' alt='' />
							<p>You want to buy some fluff... and you know it!</p>
							<Link to={'/shop'}>Go to shop</Link>
						</div>
					)}
					{cart.map(item => (
						<ShopCard
							key={item._id}
							item={item}
							text={'Remove from cart'}
							action={() => deleteFromCart(item)}
						/>
					))}
				</div>
			</div>
		</StyledMain>
	);
};

export default CartPage;
