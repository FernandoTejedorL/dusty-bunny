import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedUserRoute = () => {
	const { user } = useAuth();

	if (user?.vendor) return <Navigate to='/' replace />;

	return <Outlet />;
};

export default ProtectedUserRoute;
