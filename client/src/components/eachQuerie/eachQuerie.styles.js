import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledEachQuery = styled.div`
	display: flex;
	flex-direction: column;
	font-family: ${FONT_FAMILY.chewy};
	gap: 2rem;
	padding: 1.5rem;
	margin: 2rem;
	border-radius: 1rem;
	border: 0.1875rem solid ${COLORS.dark};
	background-color: ${({ $read }) =>
		$read ? `${COLORS.white}` : `${COLORS.turquoise}`};
	width: 80%;
	box-shadow: ${({ $showDetails }) =>
		$showDetails ? `0 0 10px 4px ${COLORS.deepViolet};` : 'none'};

	@media screen and (width>=1024px) {
		width: 40%;
	}

	@media (hover: hover) {
		&:hover {
			background-color: ${({ $showDetails }) =>
				$showDetails ? 'none' : `${COLORS.lightViolet}`};
		}
	}
`;

const StyledQueryTile = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: ${FONT_SIZE.m};
`;

const StyledSubTile = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const StyledQueryDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	font-family: ${FONT_FAMILY.grandstander};
`;

const StyledQueryTag = styled.span`
	font-size: ${FONT_SIZE.m};
	font-weight: ${FONT_WEIGHT.bold};
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;

	@media screen and (width>=768px) {
		flex-direction: row;
		justify-content: center;
	}
`;

export {
	StyledEachQuery,
	StyledQueryTile,
	StyledSubTile,
	StyledQueryDetails,
	StyledQueryTag,
	StyledButtonsContainer
};
