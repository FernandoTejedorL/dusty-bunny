import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import {
	StyledCopy,
	StyledFooter,
	StyledFooterBot,
	StyledFooterToBig,
	StyledFooterTop,
	StyledLink,
	StyledSocial,
	StyledTermsSpan,
	StyledToTop
} from './footer.styles';
import Modal from '../modal/Modal';
import TAndC from '../tAndC/TAndC';
import { useState } from 'react';

const Footer = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<StyledFooter>
			<StyledToTop
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			>
				🔝
			</StyledToTop>
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
						<StyledTermsSpan onClick={() => setShowModal(true)}>
							T&C
						</StyledTermsSpan>
					</div>
				</StyledFooterBot>
			</StyledFooterToBig>
			<StyledCopy>
				All fluff, no dusting. Stealing our ideas might leave you in a pile of
				lint! <span>© 2025 Dusty Bunny</span>
			</StyledCopy>

			{showModal && (
				<Modal>
					<TAndC setShowModal={setShowModal} />
				</Modal>
			)}
		</StyledFooter>
	);
};

export default Footer;
