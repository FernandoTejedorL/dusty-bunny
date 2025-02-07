import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 1.0625rem;
	border-bottom: 1px solid ${COLORS.dark};
`;

const StyledLogo = styled.img`
	width: 4.375rem;
	height: 3.3125rem;
`;

const StyledBrand = styled.h1`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.xl};
	margin: 0;
`;

const StyledIcon = styled.img`
	width: 40px;
	height: 40px;
	cursor: pointer;
`;
export { StyledHeader, StyledLogo, StyledBrand, StyledIcon };
