import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import {
	StyledCopy,
	StyledFooter,
	StyledFooterBot,
	StyledFooterTop,
	StyledLink,
	StyledSocial
} from './footer.styles';

const Footer = () => {
	return (
		<StyledFooter>
			<StyledFooterTop>
				<Logo />
				<StyledSocial>
					<Link>
						<img src='/assets/images/common/instagram.svg' alt='ig' />
					</Link>
					<Link>
						<img src='/assets/images/common/x.svg' alt='x' />
					</Link>
					<Link>
						<img src='/assets/images/common/youtube.svg' alt='youtube' />
					</Link>
				</StyledSocial>
			</StyledFooterTop>
			<StyledFooterBot>
				<div>
					<StyledLink to='/contact'>Contact</StyledLink>
					<StyledLink to='/about'>About Us</StyledLink>
					<StyledLink to='/careers'>Careers</StyledLink>
				</div>
				<StyledCopy>
					All fluff, no dusting. Stealing our ideas might leave you in a pile of
					lint! <br />© 2025 Dusty Bunny
				</StyledCopy>
			</StyledFooterBot>
		</StyledFooter>
	);
};

export default Footer;
