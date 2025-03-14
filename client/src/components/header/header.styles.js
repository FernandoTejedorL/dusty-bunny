import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 1rem;
	border-bottom: 0.0625rem solid ${COLORS.dark};

	@media screen and (width>=1024px) {
		padding-inline: 1rem;
		height: 8.4375rem;
	}
`;

const StyledBranding = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const StyledBrand = styled.h1`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.xl};
	margin: 0;

	@media screen and (width>=1024px) {
		white-space: nowrap;
		margin-inline: 0rem;
	}
`;

const StyledIcon = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	cursor: pointer;

	@media screen and (width>=1024px) {
		display: none;
	}
`;
export { StyledBrand, StyledBranding, StyledHeader, StyledIcon };
