import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/Auth.context';
import { auth } from '../config/firebase.config';
import { findData } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribeAuth = auth.onAuthStateChanged(async user => {
			if (user) {
				const userData = await findData(user.uid);
				setUser(userData);
				navigate('/');
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => {
			unsubscribeAuth();
		};
	}, [navigate]);

	return (
		<AuthContext.Provider value={{ user, setUser, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
