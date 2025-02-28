import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-block: 2rem;
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

const StyledEmptyOrders = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

const StyledEmptyImg = styled.img`
	height: 200px;
	width: 200px;
	border-radius: 1rem;
`;

const StyledEmptySpan = styled.span`
	font-family: ${FONT_FAMILY.pacifico};
	font-size: ${FONT_SIZE.m};
`;

export {
	StyledMain,
	StyledAllComp,
	StyledEmptyOrders,
	StyledEmptyImg,
	StyledEmptySpan
};
