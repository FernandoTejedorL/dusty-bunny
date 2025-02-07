import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import {
	StyledCopy,
	StyledFooter,
	StyledFooterBot,
	StyledFooterToBig,
	StyledFooterTop,
	StyledLink,
	StyledSocial
} from './footer.styles';

const Footer = () => {
	return (
		<StyledFooter>
			<StyledFooterToBig>
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
				</StyledFooterBot>
			</StyledFooterToBig>
			<StyledCopy>
				All fluff, no dusting. Stealing our ideas might leave you in a pile of
				lint! <span>© 2025 Dusty Bunny</span>
			</StyledCopy>
		</StyledFooter>
	);
};

export default Footer;
