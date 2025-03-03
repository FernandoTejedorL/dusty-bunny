import { CART_ACTIONS } from '../constants/cart-actions';

const storageCart = localStorage.getItem('cart');

export const initialState = JSON.parse(storageCart) || [];

export const cartReducer = (cartState, { type, payload }) => {
	switch (type) {
		case CART_ACTIONS.ADD_TO_CART: {
			return [...cartState, payload];
		}

		case CART_ACTIONS.DECREMENT_QUANTITY: {
			const cartUpdated = cartState.map(item => {
				if (item._id === payload._id) {
					item.quantity--;
				}

				return item;
			});

			return cartUpdated;
		}

		case CART_ACTIONS.INCREMENT_QUANTITY: {
			const cartUpdated = cartState.map(item => {
				if (item._id === payload._id) {
					item.quantity++;
				}

				return item;
			});

			return cartUpdated;
		}

		case CART_ACTIONS.DELETE_FROM_CART: {
			const updateCart = cartState.filter(item => item._id !== payload._id);
			return updateCart;
		}

		case CART_ACTIONS.EMPTY_CART: {
			return [];
		}

		default:
			throw new Error('INVALID ACTION');
	}
};
