import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import { createOrder } from '../../utils/api';
import CreditCard from '../creditCard/CreditCard';

const CheckOut = () => {
	const { cart, setCart, totalPrice } = useCart();
	const { user } = useAuth();
	const navigate = useNavigate();
	return (
		<div>
			<h2>Check Out</h2>
			<div>
				<div>
					<div>
						<span>Net Price</span>
						<span>{(totalPrice * 0.79).toFixed(2)}€</span>
					</div>
					<div>
						<span>VAT (21%)</span>
						<span>{(totalPrice * 0.21).toFixed(2)}€</span>
					</div>
					<div>
						<span>Total</span>
						<span>{totalPrice.toFixed(2)}€</span>
					</div>
					<div>
						<CreditCard />
					</div>
				</div>
				<button onClick={() => sendOrder(user, cart, setCart, navigate)}>
					Confirm Order
				</button>
				<button>Back to cart</button>
			</div>
		</div>
	);
};

const sendOrder = async (user, cart, setCart, navigate) => {
	try {
		const newOrder = {
			userId: user._id,
			orderContent: cart
		};
		await createOrder(newOrder);
		console.log('Order Registered');
		setCart([]);
		navigate('/shop');
	} catch (error) {
		console.log('Error registering order', error.code, error.message);
	}
};

export default CheckOut;
