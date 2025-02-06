import { NavLink } from 'react-router-dom';
import { StyledUl } from './menu.styles';
import { useAuth } from '../../hooks/useAuth';

const Menu = () => {
	const { user, loading } = useAuth();
	console.log(user?.vendor);
	if (loading) return <h2>LOADING...</h2>;
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

					{user && !user?.vendor && (
						<>
							<NavLink to={'/user'}>User Page</NavLink>
							<NavLink to={'/orders'}>My Orders</NavLink>
							<NavLink to={'/cart'}>Cart</NavLink>
						</>
					)}

					{user && user?.vendor && (
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
