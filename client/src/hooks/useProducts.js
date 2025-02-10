import { useContext } from 'react';
import { ProductsContext } from '../contexts/Products.context';

export const useProducts = () => {
	return useContext(ProductsContext);
};
