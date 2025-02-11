import { useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	console.log(cart);

	const incrementQuantity = item => {
		setCart(
			cart.map(product =>
				product._id === item._id
					? { ...product, quantity: product.quantity + 1 }
					: product
			)
		);
	};

	const decrementQuantity = item => {
		setCart(
			cart
				.map(product => {
					if (item._id === product._id && product.quantity >= 1) {
						return { ...product, quantity: product.quantity - 1 };
					}
					return product;
				})
				.filter(product => product.quantity > 0)
		);
	};

	const addToCart = item => {
		setCart([...cart, { ...item, quantity: 1 }]);
	};

	const deleteFromCart = item => {
		setCart(cart.filter(product => product._id !== item._id));
	};

	const quantityToCard = (item, cart) => {
		const product = cart.find(product => product._id === item._id);
		return product ? product.quantity : 0;
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				incrementQuantity,
				decrementQuantity,
				addToCart,
				deleteFromCart,
				quantityToCard
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
