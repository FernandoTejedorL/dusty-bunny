import { useState } from 'react';
import Menu from '../menu/Menu';
import { StyledBrand, StyledHeader, StyledIcon } from './header.styles';
import Logo from '../logo/Logo';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<StyledHeader>
			<Logo />
			<StyledBrand>Dusty Bunny</StyledBrand>

			{!menuOpen && (
				<StyledIcon
					onClick={() => setMenuOpen(true)}
					src='/assets/images/common/hamburger.svg'
					alt=''
				/>
			)}
			{menuOpen && (
				<StyledIcon
					onClick={() => setMenuOpen(false)}
					src='/assets/images/common/close.svg'
					alt=''
				/>
			)}
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</StyledHeader>
	);
};

export default Header;
