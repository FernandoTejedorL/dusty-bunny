import { Link } from 'react-router-dom';

import { StyledLogo } from './logo.styles';

const Logo = () => {
	return (
		<>
			<Link to='/'>
				<StyledLogo src='/assets/images/common/logo.png' alt='' />
			</Link>
		</>
	);
};

export default Logo;
