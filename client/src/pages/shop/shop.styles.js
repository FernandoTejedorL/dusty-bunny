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

const StyledHeader = styled.h2`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.header};
	line-height: 120%;
	text-align: center;
`;

const StyledAllComp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	width: 100%;

	@media screen and (width>=1024px) {
		flex-direction: row-reverse;
		align-items: flex-start;
	}
`;

const StyledAllFilters = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	border-radius: 1rem;
	border: 1px solid ${COLORS.dark};
`;

const StyledFiltersTile = styled.div`
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
	padding: 0.5rem;
	border-radius: 50%;
	height: 1.5rem;
	width: 1.5rem;
`;

const StyledChevron = styled.img`
	width: 25px;
	height: 10px;
	rotate: ${({ $filtersOpen }) => ($filtersOpen ? '180deg' : '0deg')};
`;

const StyledFilters = styled.div`
	display: ${({ $filtersOpen }) => ($filtersOpen ? 'flex' : 'none')};
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
`;

const StyledCart = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 50%;
	border-radius: 1rem;
	border: 1px solid ${COLORS.dark};
	margin-top: 2rem;

	@media screen and (width>=1024px) {
		width: 20%;
		margin-right: 2rem;
	}

	@media screen and (width>=1440px) {
		width: 20%;
	}
`;

const StyledEmptyImg = styled.img`
	height: 80%;
	width: 80%;
	border-radius: 1rem;
	margin-bottom: 2rem;
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

const StyledShop = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.5rem;
	padding: 2rem;
	margin: 2rem;
	border: 1px solid ${COLORS.dark};
	border-radius: 1rem;

	@media screen and (width>=768px) {
		gap: 3rem;
	}

	@media screen and (width>=1024px) {
		width: 80%;
		gap: 1rem;
	}

	@media screen and (width>=1440px) {
		width: 80%;
	}
`;

const StyledEmptyShop = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	width: 90%;
	height: 90%;
	font-family: ${FONT_FAMILY.pacifico};
	font-size: ${FONT_SIZE.m};
	line-height: 160%;
	text-align: center;
`;

const StyledEmptyImage = styled.img`
	border-radius: 1rem;
`;

export {
	StyledMain,
	StyledHeader,
	StyledAllComp,
	StyledAllFilters,
	StyledFiltersTile,
	StyledCartCounter,
	StyledChevron,
	StyledFilters,
	StyledCart,
	StyledEmptyImg,
	StyledCartContainer,
	StyledShop,
	StyledEmptyShop,
	StyledEmptyImage
};
