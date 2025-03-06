import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledWIP = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	-webkit-text-stroke: 0.0625rem ${COLORS.white};
	width: 80%;
	font-family: ${FONT_FAMILY.chewy};
	font-weight: ${FONT_WEIGHT.bold};
	font-size: ${FONT_SIZE.xl};
	margin-inline: auto;
	background-color: ${COLORS.lightViolet};
	padding: 1rem;
	border-radius: 1rem;
`;


const StyledWipImage = styled.img`
	border-radius: 1rem;
`;

export { StyledWIP, StyledWipImage };
