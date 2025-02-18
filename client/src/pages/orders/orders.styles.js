import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-block: 2rem;
`;

const StyledHeader = styled.h2`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.header};
	line-height: 120%;
	text-align: center;
	margin-bottom: 1rem;
`;

const StyledAllComp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	@media screen and (width>=1024px) {
		flex-direction: row;
		align-items: start;
		justify-content: center;
		flex-wrap: wrap;
	}
`;

export { StyledMain, StyledHeader, StyledAllComp };
