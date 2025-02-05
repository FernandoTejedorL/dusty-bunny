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
import VendorPage from '../pages/vendorPage/VendorPage';
import VendorShop from '../pages/vendorShop/VendorShop';
import ProtectedRoute from './ProtectedRoutes';
import ProtectedVendorRoute from './ProtectedVendorRoutes';
import ProtectedUserRoute from './ProtectedUserRoutes';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='redirect' element={<Redirect />} />
				<Route path='register' element={<Register />} />
				<Route path='login' element={<Login />} />
				<Route path='shop' element={<Shop />} />
				<Route element={<ProtectedRoute />}>
					<Route element={<ProtectedVendorRoute />}>
						<Route path='vendor' element={<VendorPage />} />
						<Route path='sales' element={<SalesPage />} />
						<Route path='seller' element={<VendorShop />} />
					</Route>
					<Route element={<ProtectedUserRoute />}>
						<Route path='user' element={<UserPage />} />
						<Route path='orders' element={<Orders />} />
						<Route path='cart' element={<CartPage />} />
					</Route>
					<Route path='product' element={<Product />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
