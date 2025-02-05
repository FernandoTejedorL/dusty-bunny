import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth.context';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedVendorRoute = () => {
	const { permission } = useContext(AuthContext);

	if (!permission) return <Navigate to='/' replace />;

	return <Outlet />;
};

export default ProtectedVendorRoute;
