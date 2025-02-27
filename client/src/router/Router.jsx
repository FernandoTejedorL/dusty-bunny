import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import CartPage from '../pages/cartPage/CartPage';
import Login from '../pages/login/login';
import Orders from '../pages/orders/Orders';
import Product from '../pages/product/Product';
import Redirect from '../pages/redirect/Redirect';
import Register from '../pages/register/Register';
import SalesPage from '../pages/salesPage/SalesPage';
import Shop from '../pages/shop/Shop';
import UserPage from '../pages/userPage/UserPage';
import ProtectedVendorRoute from './ProtectedVendorRoutes';
import ProtectedUserRoute from './ProtectedUserRoutes';
import ProtectedRoute from './ProtectedRoutes';
import AboutUs from '../pages/aboutUs/AboutUs';
import Contact from '../pages/contact/Contact';
import { useAuth } from '../hooks/useAuth';
import Queries from '../pages/queries/Queries';

const Router = () => {
	const { loading } = useAuth();
	if (loading) return <h2>Loading...</h2>;

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/redirect' element={<Redirect />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/contact' element={<Contact />} />
				<Route element={<ProtectedVendorRoute />}>
					<Route path='/sales' element={<SalesPage />} />
					<Route path='/queries' element={<Queries />} />
				</Route>
				<Route element={<ProtectedUserRoute />}>
					<Route path='/user/:id' element={<UserPage />} />
					<Route path='/orders/:id' element={<Orders />} />
					<Route path='/cart' element={<CartPage />} />
				</Route>
				<Route element={<ProtectedRoute />}>
					<Route path='/product/:id' element={<Product />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
