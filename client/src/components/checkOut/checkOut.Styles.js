import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledCheckOutContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	width: 80%;
	height: 70%;
	background-color: ${COLORS.white};
	padding: 2rem;
	border: 3px solid ${COLORS.dark};
	border-radius: 1rem;
`;

const StyledHeader = styled.h2`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.header};
	line-height: 120%;
	text-align: center;
`;

const StyledCheckOutData = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
`;

const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;
`;

const StyledEachInfo = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const StyledEachTotalInfo = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	border-top: 0.0625rem solid ${COLORS.dark};
	font-weight: ${FONT_WEIGHT.bold};
	font-size: ${FONT_SIZE.m};
	padding-top: 16px;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-top: 1rem;
`;

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40%;
	background-color: ${COLORS.lightViolet};
	border: 1px solid ${COLORS.dark};
	border-radius: 0.5rem;
	padding: 0.5rem;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.deepViolet};
			border: 0.0625rem solid ${COLORS.white};
			color: ${COLORS.white};
		}
	}
`;

export {
	StyledCheckOutContent,
	StyledHeader,
	StyledCheckOutData,
	StyledInfoContainer,
	StyledEachInfo,
	StyledEachTotalInfo,
	StyledButtonsContainer,
	StyledButton
};
