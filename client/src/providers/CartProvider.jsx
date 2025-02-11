import { useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	console.log(cart);

	const addToCart = product => {
		setCart([...cart, { ...product, quantity: 1 }]);
	};

	const incrementQuantity = product => {
		setCart(
			cart.map(item =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	const decrementQuantity = product => {
		setCart(
			cart
				.map(item => {
					if (item.id === product.id && item.quantity >= 1) {
						return { ...item, quantity: item.quantity - 1 };
					}
					return item;
				})
				.filter(item => item.quantity > 0)
		);
	};

	const deleteFromCart = product => {
		setCart(cart.filter(item => item.id !== product.id));
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
				addToCart,
				incrementQuantity,
				decrementQuantity,
				deleteFromCart,
				quantityToCard
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

// const addToCart = (product, setCart, cart) => {
// 	setCart([...cart, { ...product, quantity: 1 }]);
// };

// const incrementQuantity = (product, setCart, cart) => {
// 	setCart(
// 		cart.map(item =>
// 			item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
// 		)
// 	);
// };

// const decrementQuantity = (product, setCart, cart) => {
// 	setCart(
// 		cart
// 			.map(item => {
// 				if (item.id === product.id && item.quantity >= 1) {
// 					return { ...item, quantity: item.quantity - 1 };
// 				}
// 				return item;
// 			})
// 			.filter(item => item.quantity > 0)
// 	);
// };

// const deleteFromCart = (product, setCart, cart) => {
// 	setCart(cart.filter(item => item.id !== product.id));
// };

export default CartProvider;
