import { CartContext } from '../contexts/CartContext';

const CartProvider = ({ children }) => {
	return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartProvider;
