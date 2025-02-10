import { useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(() => {
		const savedCart = localStorage.getItem('cart');
		return savedCart ? JSON.parse(savedCart) : [];
	});

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const addToCart = item => {
		setCart(prevCart => [...prevCart, item]);
	};

	const deleteFromCart = id => {
		setCart(prevCart => prevCart.filter(item => item.id !== id));
	};
	return (
		<CartContext.Provider value={{ cart, setCart, addToCart, deleteFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
