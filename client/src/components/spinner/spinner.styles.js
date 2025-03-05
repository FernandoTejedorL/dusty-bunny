import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledSpinner = styled.div`
	position: fixed;
	top: 30vh;
	width: 50%;
	height: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
`;

const StyledSpinnerImage = styled.img`
	height: 6.25rem;
	width: 6.25rem;
`;

const StyledSpinnerText = styled.span`
	text-align: center;
	font-family: ${FONT_FAMILY.pacifico};
	font-size: ${FONT_SIZE.m};
	color: ${COLORS.dark};
	text-shadow: 0.1rem 0.1rem white;
`;

export { StyledSpinner, StyledSpinnerImage, StyledSpinnerText };
