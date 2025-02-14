import ShopCard from '../../components/shopCard/ShopCard';
import SideCart from '../../components/sideCart/SideCart';
import { useCart } from '../../hooks/useCart';
import {
	StyledAllComp,
	StyledCartShop,
	StyledEmptyBig,
	StyledGoTo,
	StyledHeader,
	StyledJulio,
	StyledMain
} from './cartPage.styles';

const CartPage = () => {
	const { cart, deleteFromCart, totalPrice } = useCart();
	return (
		<StyledMain>
			<StyledHeader>Cart</StyledHeader>
			{cart.length !== 0 && <h3>{totalPrice.toFixed(2)}€</h3>}
			<StyledAllComp>
				<SideCart buttonText={'CheckOut'} />
				<StyledCartShop>
					{cart.length === 0 && (
						<StyledEmptyBig>
							<StyledJulio src='/assets/images/common/youknowit.jpg' alt='' />
							<p>You want to buy some fluff... and you know it!</p>
							<StyledGoTo to={'/shop'}>Go to shop</StyledGoTo>
						</StyledEmptyBig>
					)}
					{cart.map(item => (
						<ShopCard
							key={item._id}
							item={item}
							text={'Remove from cart'}
							action={() => deleteFromCart(item)}
						/>
					))}
				</StyledCartShop>
			</StyledAllComp>
		</StyledMain>
	);
};

export default CartPage;
