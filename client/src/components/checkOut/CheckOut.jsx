import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import { createOrder } from '../../utils/api';
import CreditCard from '../creditCard/CreditCard';
import { createPortal } from 'react-dom';

const CheckOut = ({ setShowModal }) => {
	const { cart, setCart, totalPrice } = useCart();
	const { user } = useAuth();
	const navigate = useNavigate();
	return createPortal(
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
				<button
					onClick={() =>
						sendOrder(user, cart, setCart, totalPrice, setShowModal, navigate)
					}
				>
					Confirm Order
				</button>
				<button onClick={() => setShowModal(false)}>Back to cart</button>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

const sendOrder = async (
	user,
	cart,
	setCart,
	totalPrice,
	navigate,
	setShowModal
) => {
	try {
		const newOrder = {
			userId: user._id,
			totalPrice: totalPrice,
			orderContent: cart
		};
		await createOrder(newOrder);
		console.log('Order Registered');
		setCart([]);
		setShowModal(false);
		navigate('/shop');
	} catch (error) {
		console.log('Error registering order', error.code, error.message);
	}
};

export default CheckOut;
