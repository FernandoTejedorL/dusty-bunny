import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';
import { Link } from 'react-router-dom';
import { COLORS } from '../../styles/colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2.4375rem;
	gap: 2.4375rem;

	@media screen and (width>=768px) {
		background-image: url('/assets/images/common/banner.jpg');
		background-size: cover;
	}

	@media screen and (width>=1024px) {
		gap: 5rem;
	}
`;

const StyledQuestion = styled.h2`
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.header};
	line-height: 120%;
	text-align: center;
`;

const StyledRedirectContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	gap: 2.4375rem;

	@media screen and (width>=768px) {
		flex-direction: row;
		justify-content: space-evenly;
	}

	@media screen and (width>=1024px) {
		align-items: flex-start;
	}
`;

const StyledImageAndText = styled(Link)`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 220px;
	cursor: pointer;
`;

const StyledImgRedirect = styled.img`
	height: 13.75rem;
	width: 13.75rem;
	border-radius: 1rem;
	box-shadow: 0 4px 10px 4px;
`;

const StyledActionText = styled.span`
	position: absolute;
	left: 50%;
	translate: -50%;
	top: 0.5rem;
	font-family: ${FONT_FAMILY.chewy};
	font-size: ${FONT_SIZE.header};
	color: ${COLORS.white};
	white-space: nowrap;
	-webkit-text-stroke: 2px ${COLORS.dark};
`;

const StyledCheer = styled.p`
	display: none;

	@media screen and (width>=1024px) {
		display: block;
		line-height: 200%;
		font-size: ${FONT_SIZE.m};
		text-align: center;
	}
`;

export {
	StyledMain,
	StyledQuestion,
	StyledRedirectContainer,
	StyledImageAndText,
	StyledImgRedirect,
	StyledActionText,
	StyledCheer
};
