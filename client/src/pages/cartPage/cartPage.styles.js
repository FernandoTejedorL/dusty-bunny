import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';
import { Link } from 'react-router-dom';
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

const StyledCartShop = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledEmptyBig = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	height: 90%;
	width: 90%;
	padding: 2rem;
	text-align: center;
`;

const StyledJulio = styled.img`
	height: 200px;
	width: 200px;
	border-radius: 1rem;
`;

const StyledGoTo = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${COLORS.lightViolet};
	border: 1px solid ${COLORS.dark};
	border-radius: 0.5rem;
	padding: 0.5rem;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.deepViolet};
			border: 1px solid ${COLORS.white};
			color: ${COLORS.white};
		}
	}
`;

export {
	StyledMain,
	StyledHeader,
	StyledAllComp,
	StyledCartShop,
	StyledEmptyBig,
	StyledJulio,
	StyledGoTo
};
