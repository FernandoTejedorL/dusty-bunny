import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledFilterContainer = styled.div`
	display: flex;
	width: 90%;
	justify-content: space-between;
	font-weight: ${FONT_WEIGHT.regular};
	margin-block: 0.5rem;

	@media screen and (width>=1024px) {
		width: 100%;
		gap: 1rem;
	}
`;

const StyledEachInput = styled.div`
	display: flex;
	gap: 1rem;
`;

const StyledCheckBox = styled.input`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	accent-color: ${COLORS.lightViolet};
	width: 1.5rem;
	height: 1.5rem;
	border: 0.0625rem solid ${COLORS.dark};
	border-radius: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	&:checked {
		background-color: ${COLORS.white};
		border: 0.0625rem solid ${COLORS.dark};
	}
	&:checked::after {
		content: '🐰';
		position: absolute;
		top: 0.25rem;
		right: 0.1rem;
		color: ${COLORS.white};
	}
`;

export { StyledFilterContainer, StyledEachInput, StyledCheckBox };
