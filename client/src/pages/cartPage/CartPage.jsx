import { useState } from 'react';
import CheckOut from '../../components/checkOut/CheckOut';
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
import PageHeader from '../../components/pageHeader/PageHeader';
import Modal from '../../components/modal/Modal';

const CartPage = () => {
	const { cart, deleteFromCart, totalPrice } = useCart();
	const [showModal, setShowModal] = useState(false);
	const [sent, setSent] = useState(false);
	return (
		<StyledMain>
			<PageHeader text={'Cart'} />
			{cart.length !== 0 && (
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
			{showModal && (
				<Modal>
					<CheckOut setSent={setSent} setShowModal={setShowModal} />
				</Modal>
			)}
		</StyledMain>
	);
};

export default CartPage;
