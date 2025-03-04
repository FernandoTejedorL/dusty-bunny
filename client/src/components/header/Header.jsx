import { useEffect, useState } from 'react';

import Logo from '../logo/Logo';
import Menu from '../menu/Menu';

import {
	StyledBrand,
	StyledBranding,
	StyledHeader,
	StyledIcon
} from './header.styles';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add('overflow');
		} else {
			document.body.classList.remove('overflow');
		}
	}, [menuOpen]);

	return (
		<StyledHeader id='header'>
			<StyledBranding>
				<Logo />
				<StyledBrand>Dusty Bunny</StyledBrand>
			</StyledBranding>

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
