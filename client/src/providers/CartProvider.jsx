import { useEffect, useReducer } from 'react';
import { CartContext } from '../contexts/CartContext';
import { cartReducer, initialState } from '../reducers/cart-reducer';

const CartProvider = ({ children }) => {
	const [cartState, dispatch] = useReducer(cartReducer, initialState);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartState));
	}, [cartState]);

	// const incrementQuantity = item => {
	// 	setCart(
	// 		cart.map(product =>
	// 			product._id === item._id
	// 				? { ...product, quantity: product.quantity + 1 }
	// 				: product
	// 		)
	// 	);
	// };

	// const decrementQuantity = item => {
	// 	setCart(
	// 		cart
	// 			.map(product => {
	// 				if (item._id === product._id && product.quantity >= 1) {
	// 					return { ...product, quantity: product.quantity - 1 };
	// 				}
	// 				return product;
	// 			})
	// 			.filter(product => product.quantity > 0)
	// 	);
	// };

	// const addToCart = item => {
	// 	setCart([...cart, { ...item, quantity: 1 }]);
	// };

	// const deleteFromCart = item => {
	// 	setCart(cart.filter(product => product._id !== item._id));
	// };

	const quantityToCard = item => {
		const product = cartState.find(product => product._id === item._id);
		return product ? product.quantity : 0;
	};

	const totalPrice = cartState.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	const totalQuantity = cartState.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<CartContext.Provider
			value={{
				cartState,
				dispatch,
				quantityToCard,
				totalPrice,
				totalQuantity
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
