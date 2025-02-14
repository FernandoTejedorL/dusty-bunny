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
	StyledShop,
	StyledEmptyShop,
	StyledEmptyImage
};
