// export const CART_ACTIONS = {
// 	ADD_TO_CART: 'ADD_TO_CART',
// 	DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
// 	DELETE_FROM_CART: 'DELETE_FROM_CART',
// 	INCREMENT_QUANTITY: 'INCREMENT_QUANTITY'
// };

import { CART_ACTIONS } from '../constants/cart-actions';

export const actionAddToCart = item => {
	return {
		type: CART_ACTIONS.ADD_TO_CART,
		payload: { ...item, quantity: 1 }
	};
};

export const actionIncrementQuantity = item => {
	return {
		type: CART_ACTIONS.INCREMENT_QUANTITY,
		payload: { ...item }
	};
};

export const actionDecrementQuantity = (item, quantity) => {
	return {
		type:
			quantity > 1
				? CART_ACTIONS.DECREMENT_QUANTITY
				: CART_ACTIONS.DELETE_FROM_CART,
		payload: { ...item }
	};
};

export const actionDeleteFromCart = item => {
	return {
		type: CART_ACTIONS.DELETE_FROM_CART,
		payload: { ...item }
	};
};

export const emptyCart = () => {
	return {
		type: CART_ACTIONS.EMPTY_CART
	};
};
