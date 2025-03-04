import {
	StyledCheckOutContent,
	StyledCheckOutData,
	StyledEachInfo,
	StyledEachTotalInfo,
	StyledHeader,
	StyledInfoContainer
} from './checkOut.Styles';

import { useCart } from '../../hooks/useCart';
import CreditCard from '../creditCard/CreditCard';

const CheckOut = ({ setShowModal, setSent }) => {
	const { totalPrice } = useCart();
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
							<CreditCard setSent={setSent} setShowModal={setShowModal} />
						</div>
					</StyledInfoContainer>
				</StyledCheckOutData>
			</StyledCheckOutContent>
		</>
	);
};

export default CheckOut;
