import { NavLink } from 'react-router-dom';
import { StyledUl } from './menu.styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Menu = () => {
	const { user, permission } = useContext(AuthContext);
	return (
		<div>
			<nav>
				<StyledUl>
					<NavLink to={'/'}>Home</NavLink>
					<NavLink to={'/shop'}>Shop</NavLink>
					{!user && (
						<>
							<NavLink to={'/login'}>Login</NavLink>
							<NavLink to={'/register'}>Register</NavLink>
						</>
					)}
					{user && <NavLink to={'/product'}>Product</NavLink>}
					{!permission && user && (
						<>
							<NavLink to={'/user'}>User Page</NavLink>
							<NavLink to={'/orders'}>My Orders</NavLink>
							<NavLink to={'/cart'}>Cart</NavLink>
						</>
					)}
					{permission && (
						<>
							<NavLink to={'/vendor'}>Vendor Page</NavLink>
							<NavLink to={'/sales'}>Sales</NavLink>
							<NavLink to={'/seller'}>My Shop</NavLink>
						</>
					)}
				</StyledUl>
			</nav>
		</div>
	);
};

export default Menu;
