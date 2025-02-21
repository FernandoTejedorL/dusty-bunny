import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import { createOrder } from '../../utils/api';
import {
	StyledButton,
	StyledButtonsContainer,
	StyledCheckOutContent,
	StyledCheckOutData,
	StyledEachInfo,
	StyledEachTotalInfo,
	StyledHeader,
	StyledInfoContainer
} from './checkOut.Styles';
import CreditCard from '../creditCard/CreditCard';

const CheckOut = ({ setShowModal }) => {
	const { cart, setCart, totalPrice } = useCart();
	const { user } = useAuth();
	const navigate = useNavigate();
	return (
		<>
			<StyledCheckOutContent>
				<StyledHeader>Check Out</StyledHeader>
				<StyledCheckOutData>
					<StyledInfoContainer>
						<StyledEachInfo>
							<span>Net Price</span>
							<span>{(totalPrice * 0.79).toFixed(2)}€</span>
						</StyledEachInfo>
						<StyledEachInfo>
							<span>VAT (21%)</span>
							<span>{(totalPrice * 0.21).toFixed(2)}€</span>
						</StyledEachInfo>
						<StyledEachTotalInfo>
							<span>Total</span>
							<span>{totalPrice.toFixed(2)}€</span>
						</StyledEachTotalInfo>
						<div>
							<CreditCard />
						</div>
					</StyledInfoContainer>
					<StyledButtonsContainer>
						<StyledButton
							onClick={() =>
								sendOrder(
									user,
									cart,
									setCart,
									totalPrice,
									setShowModal,
									navigate
								)
							}
						>
							Confirm Order
						</StyledButton>
						<StyledButton onClick={() => setShowModal(false)}>
							Back to cart
						</StyledButton>
					</StyledButtonsContainer>
				</StyledCheckOutData>
			</StyledCheckOutContent>
		</>
	);
};

const sendOrder = async (
	user,
	cart,
	setCart,
	totalPrice,
	setShowModal,
	navigate
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
		navigate('/cart');
	} catch (error) {
		console.log('Error registering order', error.code, error.message);
	}
};

export default CheckOut;
