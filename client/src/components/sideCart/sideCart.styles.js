import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledCart = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 50%;
	border-radius: 1rem;
	border: 0.0625rem solid ${COLORS.dark};
	margin-top: 2rem;

	@media screen and (width>=1024px) {
		width: 20%;
		margin-right: 2rem;
	}

	@media screen and (width>=1440px) {
		width: 20%;
	}
`;

const StyledCloserTile = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 1rem;
	cursor: pointer;
`;

const StyledCartCounter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${COLORS.white};
	background-color: ${COLORS.dark};
	padding-top: 0.16rem;
	line-height: 0rem;
	border-radius: 50%;
	height: 2rem;
	width: 2rem;

	@media screen and (width>=1024px) {
		display: none;
	}
`;

const StyledChevron = styled.img`
	width: 1.5625rem;
	height: 0.625rem;
	rotate: ${({ $cartOpen }) => ($cartOpen ? '180deg' : '0deg')};

	@media screen and (width>=1024px) {
		display: none;
	}
`;

const StyledCartContainer = styled.div`
	display: ${({ $cartOpen }) => ($cartOpen ? 'flex' : 'none')};
	flex-direction: column;
	gap: 1rem;
	align-items: center;

	@media screen and (width>=1024px) {
		display: flex;
	}
`;

const StyledEmptyImg = styled.img`
	height: 80%;
	width: 80%;
	border-radius: 1rem;
	margin-bottom: 2rem;
`;

const StyledCartButton = styled.button`
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

export {
	StyledCart,
	StyledCartButton,
	StyledCartContainer,
	StyledCartCounter,
	StyledChevron,
	StyledCloserTile,
	StyledEmptyImg
};
