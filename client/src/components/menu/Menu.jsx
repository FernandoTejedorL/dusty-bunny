import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../config/firebase.config';
import { useAuth } from '../../hooks/useAuth';
import ButtonSecondary from '../buttonSecondary/ButtonSecondary';

import {
	StyledButtonsContainer,
	StyledMenu,
	StyledNavLink,
	StyledUl
} from './menu.styles';

const Menu = ({ menuOpen, setMenuOpen }) => {
	const { user, loading } = useAuth();
	const navigate = useNavigate();

	if (loading) return <h2>LOADING...</h2>;

	return (
		<StyledMenu $showMenu={menuOpen} onClick={() => setMenuOpen(false)}>
			<nav>
				<StyledUl>
					<StyledNavLink to={'/'}>Home</StyledNavLink>
					<StyledNavLink to={'/shop'}>Shop</StyledNavLink>
					{!user && (
						<StyledButtonsContainer>
							<ButtonSecondary
								text={'Sign In'}
								action={() => navigate('/login')}
							/>
							<ButtonSecondary
								text={'Register'}
								action={() => navigate('/register')}
							/>
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
						<StyledButtonsContainer>
							<ButtonSecondary
								text={'Log Out'}
								action={() => logout(navigate)}
							/>
						</StyledButtonsContainer>
					)}
				</StyledUl>
			</nav>
		</StyledMenu>
	);
};

const logout = async navigate => {
	await signOut(auth);
	navigate('/');
};

export default Menu;
