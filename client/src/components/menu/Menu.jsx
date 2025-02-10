import {
	StyledButton,
	StyledButtonsContainer,
	StyledLogOutButton,
	StyledMenu,
	StyledNavLink,
	StyledUl
} from './menu.styles';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';

const Menu = ({ menuOpen, setMenuOpen }) => {
	const { user, loading } = useAuth();
	if (loading) return <h2>LOADING...</h2>;
	return (
		<StyledMenu $showMenu={menuOpen} onClick={() => setMenuOpen(false)}>
			<nav>
				<StyledUl>
					<StyledNavLink to={'/'}>Home</StyledNavLink>
					<StyledNavLink to={'/shop'}>Shop</StyledNavLink>
					{!user && (
						<StyledButtonsContainer>
							<Link to={'/login'}>
								<StyledButton>Sign In</StyledButton>
							</Link>
							<Link to={'/register'}>
								<StyledButton>Register</StyledButton>
							</Link>
						</StyledButtonsContainer>
					)}

					{user && !user?.vendor && (
						<>
							<StyledNavLink to={'/user'}>User Page</StyledNavLink>
							<StyledNavLink to={'/orders'}>My Orders</StyledNavLink>
							<StyledNavLink to={'/cart'}>Cart</StyledNavLink>
						</>
					)}

					{user && user?.vendor && (
						<>
							<StyledNavLink to={'/vendor'}>My Profile</StyledNavLink>
							<StyledNavLink to={'/sales'}>My Sales</StyledNavLink>
							<StyledNavLink to={'/seller'}>My Shop</StyledNavLink>
						</>
					)}
					{user && (
						<StyledLogOutButton onClick={logout}>Log Out</StyledLogOutButton>
					)}
				</StyledUl>
			</nav>
		</StyledMenu>
	);
};

const logout = async () => {
	await signOut(auth);
};

export default Menu;
