import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	margin-top: 2rem;
`;

const StyledName = styled.h2`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.header};
	line-height: 120%;
	text-align: center;
`;

const StyledProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	margin-top: 2rem;

	@media screen and (width>=1024px) {
		flex-direction: row;
		align-items: flex-start;
		margin-bottom: 2rem;
	}
`;

const StyledImagesContainer = styled.div`
	display: flex;
	position: relative;
`;

const StyledImage = styled.img`
	height: 300px;
	width: 300px;
	border-radius: 1rem;
`;

const StyledFavIcon = styled.img`
	position: absolute;
	left: 20px;
	top: 20px;
	height: 48px;
	width: 48px;
`;

const StyledImageAndButtons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	@media screen and (width>=768px) {
		flex-direction: row;
		width: 100%;
	}

	@media screen and (width>=768px) {
		flex-direction: column;
		width: 100%;
	}
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	width: 90%;

	@media screen and (width>=768px) {
		width: 50%;
	}
`;

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70%;
	height: 2.5rem;
	background-color: ${COLORS.lightViolet};
	border-radius: 0.5rem;
	border: 1px solid ${COLORS.dark};
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

	@media screen and (width>=1024px) {
		width: 90%;
	}
`;

const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	width: 90%;
	margin-bottom: 2rem;
`;

export {
	StyledMain,
	StyledName,
	StyledProductContainer,
	StyledImagesContainer,
	StyledImage,
	StyledFavIcon,
	StyledImageAndButtons,
	StyledButtonsContainer,
	StyledButton,
	StyledInfoContainer
};
