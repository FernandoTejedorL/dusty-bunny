import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_WEIGHT } from '../../styles/fonts';

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2.5rem;
	min-width: 9.375rem;
	background-color: ${COLORS.white};
	border-radius: 0.5rem;
	border: 0.0625rem solid ${COLORS.dark};
	color: ${COLORS.dark};
	font-weight: ${FONT_WEIGHT.bold};
	padding: 0.5rem;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.deepViolet};
			color: ${COLORS.white};
			border: 0.0625rem solid ${COLORS.white};
		}
	}
`;

export { StyledButton };
