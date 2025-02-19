import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledCard = styled.div`
	display: flex;
	width: 90%;
	margin-block: 1rem;
	align-items: center;
	padding: 1rem;
	gap: 1rem;
	border-radius: 1rem;
	border: 0.0625rem solid ${COLORS.dark};
`;

const StyledPersona = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
	align-items: center;
	text-align: center;
`;

const StyledRole = styled.span`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.m};
`;

const StyledCV = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledImage = styled.img`
	width: 6.25rem;
	height: 6.25rem;
	border-radius: 1rem;
`;
export { StyledCard, StyledPersona, StyledRole, StyledCV, StyledImage };
