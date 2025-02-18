import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';
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
	border: 0.0625rem solid ${COLORS.dark};

	@media screen and (width>=1024px) {
		width: 80%;
	}
`;

const StyledFiltersTile = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 1rem;
	cursor: pointer;
`;

const StyledChevron = styled.img`
	width: 1.5625rem;
	height: 0.625rem;
	rotate: ${({ $filtersOpen }) => ($filtersOpen ? '180deg' : '0deg')};
`;

const StyledFilters = styled.div`
	display: ${({ $filtersOpen }) => ($filtersOpen ? 'flex' : 'none')};
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 1rem;
	padding: 1rem;

	@media screen and (width>=1024px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

const StyledFilterEachContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 100%;
	gap: 1rem;
	font-weight: ${FONT_WEIGHT.bold};
	margin-top: 0.5rem;
`;

const StyledRangeInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
`;

const StyledRangeInputBar = styled.input`
	appearance: none;
	-webkit-appearance: none;
	width: 100%;
	height: 0.625rem;
	border-radius: 0.3125rem;
	background-color: ${COLORS.lightViolet};
	margin: 1.25rem 0;
	cursor: pointer;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 1.875rem;
		height: 1.875rem;
		border-radius: 50%;
		background-color: transparent;
		background-image: url('/assets/images/common/bunny.png');
		background-size: cover;
		background-position: right;
		background-repeat: no-repeat;
		cursor: pointer;
		position: relative;
		top: -0.1875rem;
	}
`;

const StyledRangeText = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const StyledShop = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.5rem;
	padding: 2rem;
	margin: 2rem;
	border: 0.0625rem solid ${COLORS.dark};
	border-radius: 1rem;

	@media screen and (width>=768px) {
		gap: 3rem;
	}

	@media screen and (width>=1024px) {
		width: ${({ $user }) => ($user ? '80%' : '100%')};
		gap: 1rem;
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
	StyledChevron,
	StyledFilters,
	StyledFilterEachContainer,
	StyledRangeInput,
	StyledRangeInputBar,
	StyledRangeText,
	StyledShop,
	StyledEmptyShop,
	StyledEmptyImage
};
