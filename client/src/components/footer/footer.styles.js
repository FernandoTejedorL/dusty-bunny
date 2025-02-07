import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	width: 100%;
	border-top: 1px solid ${COLORS.dark};
	padding: 1rem;
	margin-top: 1rem;

	@media screen and (width>=1024px) {
		flex-direction: row;
	}
`;

const StyledFooterTop = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 1rem 1rem;

	@media screen and (width>=1024px) {
		flex-direction: column;
	}
`;

const StyledSocial = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
`;

const StyledFooterBot = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledLink = styled(Link)`
	color: ${COLORS.dark};
	font-weight: ${FONT_WEIGHT.regular};
	font-size: ${FONT_SIZE.s};
	margin: 1rem;

	@media (hover: hover) {
		&:hover {
			color: ${COLORS.deepViolet};
		}
	}
`;

const StyledCopy = styled.p`
	font-style: italic;
	font-size: 0.8rem;
	text-align: center;
`;

export {
	StyledFooter,
	StyledFooterTop,
	StyledSocial,
	StyledFooterBot,
	StyledLink,
	StyledCopy
};
