import CheckOut from '../../components/checkOut/CheckOut';
import ShopCard from '../../components/shopCard/ShopCard';
import SideCart from '../../components/sideCart/SideCart';
import { useCart } from '../../hooks/useCart';
import {
	StyledAllComp,
	StyledCartShop,
	StyledComment,
	StyledEmptyBig,
	StyledGoTo,
	StyledHeader,
	StyledJulio,
	StyledMain,
	StyledPrice
} from './cartPage.styles';

const CartPage = () => {
	const { cart, deleteFromCart, totalPrice } = useCart();
	return (
		<StyledMain>
			<StyledHeader>Cart</StyledHeader>
			{cart.length !== 0 && (
				<StyledPrice>Total: {totalPrice.toFixed(2)}€</StyledPrice>
			)}
			<StyledAllComp>
				<SideCart buttonText={'CheckOut'} />
				<StyledCartShop $empty={cart.length === 0}>
					{cart.length === 0 && (
						<StyledEmptyBig>
							<StyledJulio src='/assets/images/common/youknowit.jpg' alt='' />
							<StyledComment>
								You want to buy some fluff... and you know it!
							</StyledComment>
							<StyledGoTo to={'/shop'}>Go to shop</StyledGoTo>
						</StyledEmptyBig>
					)}
					{cart.map(item => (
						<ShopCard
							key={item._id}
							item={item}
							text={'Sweep it 🧹'}
							action={() => deleteFromCart(item)}
						/>
					))}
				</StyledCartShop>
			</StyledAllComp>
			<CheckOut />
		</StyledMain>
	);
};

export default CartPage;
