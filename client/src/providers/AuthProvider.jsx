import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/Auth.context';
import { auth } from '../config/firebase.config';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [permission, setPermission] = useState(false);
	console.log(user);
	console.log(permission);
	useEffect(() => {
		const unsubscribeAuth = auth.onAuthStateChanged(user => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => {
			unsubscribeAuth();
		};
	}, []);
	return (
		<AuthContext.Provider value={{ user, loading, permission, setPermission }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
