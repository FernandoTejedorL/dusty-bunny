import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledButtonInput = styled.input`
	display: flex;
	align-items: center;
	height: 2.5rem;
	min-width: 150px;
	background-color: ${COLORS.lightViolet};
	border-radius: 0.5rem;
	border: 0.0625rem solid ${COLORS.dark};
	color: ${COLORS.dark};
	padding-inline: 0.5rem;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.deepViolet};
			color: ${COLORS.white};
			border: 1px solid ${COLORS.white};
		}
	}
`;

export { StyledButtonInput };
