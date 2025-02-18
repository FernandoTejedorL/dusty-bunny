import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

const StyledProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

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
	height: 18.75rem;
	width: 18.75rem;
	border-radius: 1rem;
`;

const StyledFavIcon = styled.img`
	position: absolute;
	left: 1.25rem;
	top: 1.25rem;
	height: 3rem;
	width: 3rem;
	cursor: pointer;
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
			border: 0.0625rem solid ${COLORS.white};
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
	StyledProductContainer,
	StyledImagesContainer,
	StyledImage,
	StyledFavIcon,
	StyledImageAndButtons,
	StyledButtonsContainer,
	StyledButton,
	StyledInfoContainer
};
