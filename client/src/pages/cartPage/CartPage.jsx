import { useState } from 'react';

import { actionDeleteFromCart } from '../../actions/cart-actions';
import CheckOut from '../../components/checkOut/CheckOut';
import Modal from '../../components/modal/Modal';
import PageHeader from '../../components/pageHeader/PageHeader';
import ShopCard from '../../components/shopCard/ShopCard';
import SideCart from '../../components/sideCart/SideCart';
import { useCart } from '../../hooks/useCart';

import {
	StyledAllComp,
	StyledCartShop,
	StyledClose,
	StyledComment,
	StyledEmptyBig,
	StyledGoTo,
	StyledJulio,
	StyledMain,
	StyledPrice,
	StyledSent
} from './cartPage.styles';

const CartPage = () => {
	const { cartState, dispatch, totalPrice } = useCart();

	const [showModal, setShowModal] = useState(false);
	const [sent, setSent] = useState(false);

	return (
		<StyledMain>
			<PageHeader text={'Cart'} />
			{cartState.length !== 0 && (
				<StyledPrice>Total: {totalPrice.toFixed(2)}€</StyledPrice>
			)}
			{sent && (
				<StyledSent>
					<StyledClose
						onClick={() => setSent(false)}
						src='/assets/images/common/close.svg'
						alt=''
					/>
					<span>
						We have received your order! Soon, you will be enjoying your new
						fluff!
					</span>
				</StyledSent>
			)}
			<StyledAllComp>
				<SideCart buttonText={'CheckOut'} action={() => setShowModal(true)} />
				<StyledCartShop $empty={cartState.length === 0}>
					{cartState.length === 0 && (
						<StyledEmptyBig>
							<StyledJulio src='/assets/images/common/youknowit.jpg' alt='' />
							<StyledComment>
								You want to buy some fluff... and you know it!
							</StyledComment>
							<StyledGoTo to={'/shop'}>Go to shop</StyledGoTo>
						</StyledEmptyBig>
					)}
					{cartState.map(item => (
						<ShopCard
							key={item._id}
							item={item}
							text={'Sweep it 🧹'}
							action={() => dispatch(actionDeleteFromCart(item))}
						/>
					))}
				</StyledCartShop>
			</StyledAllComp>
			{showModal && (
				<Modal>
					<CheckOut setSent={setSent} setShowModal={setShowModal} />
				</Modal>
			)}
		</StyledMain>
	);
};

export default CartPage;
