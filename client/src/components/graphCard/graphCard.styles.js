import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledGraphCard = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	width: 100%;
`;

const StyledGraphProduct = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 0.5rem;
	width: 10rem;
	cursor: pointer;
`;

const StyledGraphImage = styled.img`
	height: 4.6875rem;
	width: 4.6875rem;
	border-radius: 0.5rem;
`;
const StyledPercentBarContainer = styled.div`
	display: flex;
	width: 80%;
	gap: 1rem;
	align-items: flex-end;
	justify-content: space-between;
	height: 5rem;
`;

const StyledPercentBar = styled.div`
	width: 0;
	height: 5rem;
	background: linear-gradient(
		to right,
		${COLORS.deepViolet} ${({ $percent }) => $percent / 4}%,
		${COLORS.lightViolet} ${({ $percent }) => $percent}%,
		transparent ${({ $percent }) => $percent}%
	);
	animation: bar-animation 2s forwards;

	@keyframes bar-animation {
		to {
			width: 100%;
		}
	}
`;

const StyledDataDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: fit-content;
	gap: 1.5rem;
`;

const StyledTextInPercent = styled.span`
	margin-right: 1rem;
`;

export {
	StyledGraphCard,
	StyledGraphProduct,
	StyledGraphImage,
	StyledPercentBar,
	StyledPercentBarContainer,
	StyledDataDiv,
	StyledTextInPercent
};
