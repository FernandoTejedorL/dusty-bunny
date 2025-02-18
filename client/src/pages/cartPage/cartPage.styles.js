import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';
import { Link } from 'react-router-dom';
import { COLORS } from '../../styles/colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

const StyledPrice = styled.h3`
	font-size: ${FONT_SIZE.l};
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

const StyledGoTo = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${COLORS.lightViolet};
	border: 0.0625rem solid ${COLORS.dark};
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
	StyledMain,
	StyledPrice,
	StyledAllComp,
	StyledCartShop,
	StyledEmptyBig,
	StyledJulio,
	StyledGoTo,
	StyledComment
};
