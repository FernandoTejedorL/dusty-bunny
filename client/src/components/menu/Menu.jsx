import { NavLink } from 'react-router-dom';
import { StyledUl } from './menu.styles';

const Menu = () => {
	return (
		<div>
			<nav>
				<StyledUl>
					<NavLink to={'/'}>Home</NavLink>
					<NavLink to={'/register'}>Register</NavLink>
					<NavLink to={'/login'}>Login</NavLink>
					<NavLink to={'/shop'}>Shop</NavLink>
					<NavLink to={'/product'}>Product</NavLink>
					<NavLink to={'/user'}>User Page</NavLink>
					<NavLink to={'/orders'}>My Orders</NavLink>
					<NavLink to={'/cart'}>Cart</NavLink>
					<NavLink to={'/vendor'}>Vendor Page</NavLink>
					<NavLink to={'/sales'}>Sales</NavLink>
					<NavLink to={'/seller'}>My Shop</NavLink>
				</StyledUl>
			</nav>
		</div>
	);
};

export default Menu;
