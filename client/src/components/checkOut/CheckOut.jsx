import { useCart } from '../../hooks/useCart';
import CreditCard from '../creditCard/CreditCard';

const CheckOut = () => {
	const { totalPrice } = useCart();
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
			</div>
		</div>
	);
};

export default CheckOut;
