import styled from 'styled-components';
import { FONT_SIZE } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledShopCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding: 0.5rem;
	width: 240px;
	font-size: ${FONT_SIZE.s};
	text-align: center;
	padding: 1.5rem;
	background-color: ${COLORS.card};
	border-radius: 1rem;
	box-shadow: 0 4px 4px;
`;

const StyledProductPic = styled.img`
	border-radius: 1rem;

	box-shadow: 0 4px 4px ${COLORS.deepViolet};
`;

const StyledNameAndPrice = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const StyledCardButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70%;
	background-color: ${COLORS.lightViolet};
	border: 1px solid ${COLORS.dark};
	border-radius: 0.5rem;
	padding: 0.5rem;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.deepViolet};
			border: 1px solid ${COLORS.white};
			color: ${COLORS.white};
		}
	}
`;

export {
	StyledShopCard,
	StyledProductPic,
	StyledNameAndPrice,
	StyledCardButton
};
