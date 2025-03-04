import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

import { auth } from '../../config/firebase.config';
import { useAuth } from '../../hooks/useAuth';

import {
	StyledButton,
	StyledButtonsContainer,
	StyledLogOutButton,
	StyledMenu,
	StyledNavLink,
	StyledUl
} from './menu.styles';

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
							<StyledNavLink to={`/user/${user._id}`}>User Page</StyledNavLink>
							<StyledNavLink to={`/orders/${user._id}`}>
								My Orders
							</StyledNavLink>
							<StyledNavLink to={'/cart'}>Cart</StyledNavLink>
						</>
					)}

					{user && user?.vendor && (
						<>
							<StyledNavLink to={'/sales'}>My Sales</StyledNavLink>
							<StyledNavLink to={'/queries'}>My Messages</StyledNavLink>
						</>
					)}
					{user && (
						<Link to={'/'}>
							<StyledLogOutButton onClick={logout}>Log Out</StyledLogOutButton>
						</Link>
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
