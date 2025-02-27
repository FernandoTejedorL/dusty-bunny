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

	@media screen and (width>=1024px) {
		justify-content: space-between;
		width: 200px;
		height: ${({ $user }) => ($user ? '370px' : '240px')};
	}
`;

const StyledProductPic = styled.img`
	border-radius: 1rem;

	box-shadow: 0 4px 4px ${COLORS.deepViolet};
`;

const StyledNameAndPrice = styled.div`
	display: flex;
	gap: 1rem;
	width: 90%;
	justify-content: space-between;
	align-items: center;
	text-align: left;
`;

const StyledCardButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70%;
	background-color: ${COLORS.lightViolet};
	border: 0.0625rem solid ${COLORS.dark};
	border-radius: 0.5rem;
	padding: 0.5rem;
	cursor: pointer;

	@media screen and (width>=1024px) {
		width: 80%;
	}

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.deepViolet};
			border: 0.0625rem solid ${COLORS.white};
			color: ${COLORS.white};
		}
	}
`;

const StyledMoreInfo = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: ${COLORS.white};
	border: 0.0625rem solid ${COLORS.dark};
	border-radius: 0.5rem;
	padding: 0.5rem;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.lightViolet};
			border: 0.0625rem solid ${COLORS.white};
			color: ${COLORS.white};
		}
	}
`;

const StyledQuantityEditors = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 70%;

	@media screen and (width>=1024) {
		width: 100%;
	}
`;

const StyledQuantityButtons = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${COLORS.lightViolet};
	border: 0.0625rem solid ${COLORS.dark};
	border-radius: 0.5rem;
	padding: 0.5rem;
	cursor: pointer;
`;

const StyledQuantity = styled.span`
	@media screen and (width>=1024px) {
		margin-inline: 1rem;
	}
`;

export {
	StyledShopCard,
	StyledProductPic,
	StyledNameAndPrice,
	StyledCardButton,
	StyledQuantityEditors,
	StyledQuantityButtons,
	StyledQuantity,
	StyledMoreInfo
};
