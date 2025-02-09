import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
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
`;

const StiledAllFilters = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 0.5rem;
	border: 1px solid ${COLORS.dark};
`;

const StyledFiltersTile = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

const StyledChevron = styled.img`
	width: 25px;
	height: 10px;
	rotate: ${({ $filtersOpen }) => ($filtersOpen ? '180deg' : '0deg')};
`;

export {
	StyledMain,
	StyledHeader,
	StyledAllComp,
	StiledAllFilters,
	StyledFiltersTile,
	StyledChevron
};
