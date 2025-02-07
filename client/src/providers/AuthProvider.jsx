import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/Auth.context';
import { auth } from '../config/firebase.config';
import { findData, getAllProducts } from '../utils/api';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	console.log(user);

	useEffect(() => {
		const unsubscribeAuth = auth.onAuthStateChanged(async user => {
			if (user) {
				const userData = await findData(user.uid);
				setUser(userData);
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => {
			unsubscribeAuth();
		};
	}, []);

	useEffect(() => {
		fetchProducts(setProducts);
	}, []);

	return (
		<AuthContext.Provider value={{ user, loading, products }}>
			{children}
		</AuthContext.Provider>
	);
};

const fetchProducts = async setProducs => {
	const data = await getAllProducts();
	setProducs(data);
};

export default AuthProvider;
