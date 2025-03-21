import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledMain = styled.main`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

const StyledPrice = styled.h3`
	font-size: ${FONT_SIZE.l};
`;

const StyledSent = styled.div`
	position: absolute;
	top: 2.5rem;
	width: 80%;
	border: 0.0625rem solid ${COLORS.dark};
	text-align: center;
	border-radius: 1rem;
	padding: 2rem;
	background-color: ${COLORS.lightViolet};
	box-shadow: 0 0 0.625rem 0.25rem ${COLORS.deepViolet};
	z-index: 20;
`;

const StyledClose = styled.img`
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
	height: 0.9375rem;
	width: 0.9375rem;
	cursor: pointer;
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
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.5rem;
	padding: 2rem;
	margin: ${({ $empty }) => ($empty ? '0' : '2rem')};
	border: ${({ $empty }) =>
		$empty ? 'none' : `0.0625rem solid ${COLORS.dark}`};
	border-radius: 1rem;

	@media screen and (width>=768px) {
		gap: 3rem;
	}

	@media screen and (width>=1024px) {
		width: 80%;
		gap: 1rem;
	}
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
	height: 12.5rem;
	width: 12.5rem;
	border-radius: 1rem;
`;

const StyledComment = styled.h3`
	font-family: ${FONT_FAMILY.pacifico};
	font-size: ${FONT_SIZE.m};
	letter-spacing: 0.0625rem;
	line-height: 130%;

	@media screen and (width>=1024px) {
		font-size: ${FONT_SIZE.l};
	}
`;

export {
	StyledAllComp,
	StyledCartShop,
	StyledClose,
	StyledComment,
	StyledEmptyBig,
	StyledJulio,
	StyledMain,
	StyledPrice,
	StyledSent
};
