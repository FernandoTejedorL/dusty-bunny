import { useEffect, useState } from 'react';
import { ProductsContext } from '../contexts/Products.context';
import { getAllProducts } from '../utils/api';

const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts(setProducts);
	}, []);

	return (
		<ProductsContext.Provider value={{ products, setProducts }}>
			{children}
		</ProductsContext.Provider>
	);
};

const fetchProducts = async setProducs => {
	const data = await getAllProducts();
	setProducs(data);
};

export default ProductsProvider;
