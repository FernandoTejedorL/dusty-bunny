import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/Auth.context';
import { auth } from '../config/firebase.config';
import { findData } from '../utils/api';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [permission, setPermission] = useState(false);
	console.log(user);
	console.log(permission);

	useEffect(() => {
		// para que no se cambien los permisos al escribir la ruta de forma manual
		const userPermitted = async user => {
			try {
				const userData = await findData(user.uid); // Llamar a MongoDB
				setPermission(userData.vendor); // Asignar si tiene permisos o no
			} catch (error) {
				console.error(
					'Error obteniendo datos del usuario desde MongoDB:',
					error
				);
				setPermission(false); // Asegurar que permission sea false si hay un error??
			}
		};

		const unsubscribeAuth = auth.onAuthStateChanged(async user => {
			if (user) {
				setUser(user);
				await userPermitted(user); // Llamamos a Mongo para obtener el permiso
			} else {
				setUser(null);
				setPermission(false);
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
