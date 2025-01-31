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

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='redirect' element={<Redirect />} />
				<Route path='register' element={<Register />} />
				<Route path='login' element={<Login />} />
				<Route path='shop' element={<Shop />} />
				<Route path='product' element={<Product />} />
				<Route path='user' element={<UserPage />} />
				<Route path='orders' element={<Orders />} />
				<Route path='cart' element={<CartPage />} />
				<Route path='vendor' element={<VendorPage />} />
				<Route path='sales' element={<SalesPage />} />
				<Route path='seller' element={<VendorShop />} />
			</Route>
		</Routes>
	);
};

export default Router;
