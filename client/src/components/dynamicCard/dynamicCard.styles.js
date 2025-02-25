import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledDynamicCard = styled.div`
	display: none;

	@media screen and (width>=1024px) {
		display: flex;
		flex-direction: column;
		position: absolute;
		left: 5vw;
		top: 30%;
		width: 350px;
		height: 250px;
		border: 0.0625rem solid ${COLORS.dark};
		border-radius: 1rem;
		padding: 1rem;
		box-shadow: 0 0 0.625rem 0.25rem ${COLORS.deepViolet};
		background: linear-gradient(
			to bottom right,
			${COLORS.deepViolet},
			${COLORS.saumon},
			${COLORS.lightViolet} 60%,
			${COLORS.turquoise}
		);
	}
`;

const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.5rem;
	align-items: flex-end;
	font-family: ${FONT_FAMILY.chewy};
	height: 6.25rem;
	width: 100%;
`;

const StyledInput = styled.span`
	font-family: ${FONT_FAMILY.pacifico};
	font-size: ${FONT_SIZE.m};
	opacity: ${({ $on }) => ($on ? '100%' : '50%')};
	align-self: ${({ $align }) => ($align ? 'flex-start' : 'none')};
`;

export { StyledDynamicCard, StyledInfoContainer, StyledInput };
