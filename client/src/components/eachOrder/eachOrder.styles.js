import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_WEIGHT } from '../../styles/fonts';

const StyledEachOrder = styled.div`
	display: inline-flex;
	flex-direction: column;
	gap: 2rem;
	padding: 2rem;
	margin: 2rem;
	border-radius: 1rem;
	border: 3px solid ${COLORS.dark};
	background-color: ${COLORS.white};
	width: 80%;
	box-shadow: ${({ $showContent }) =>
		$showContent ? `0 0 10px 4px ${COLORS.deepViolet};` : 'none'};

	@media screen and (width>=1024px) {
		width: 40%;
	}

	@media (hover: hover) {
		&:hover {
			background-color: ${({ $showContent }) =>
				$showContent ? 'none' : `${COLORS.lightViolet}`};
		}
	}
`;

const StyledEachInfo = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const StyledEachTitle = styled.span`
	font-weight: ${FONT_WEIGHT.bold};
`;

const StyledOrderContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export {
	StyledEachOrder,
	StyledEachInfo,
	StyledEachTitle,
	StyledOrderContentContainer
};
