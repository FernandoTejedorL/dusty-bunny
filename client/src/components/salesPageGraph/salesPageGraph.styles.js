import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledGraphCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 0.5rem;
	border-radius: 1rem;
	font-family: ${FONT_FAMILY.pacifico};
	font-size: ${FONT_SIZE.m};
	width: 100%;
	border: 0.0625rem solid ${COLORS.dark};
`;

const StyledGraphsContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-size: ${FONT_SIZE.s};
	gap: 1.5rem;
	width: 100%;
`;

export { StyledGraphCard, StyledGraphsContainer };
