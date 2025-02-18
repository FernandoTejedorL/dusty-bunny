import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledSlide = styled(SwiperSlide)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	font-size: ${FONT_SIZE.m};
	text-align: center;
	padding: 1.5rem;
	height: 15.625rem;
	width: 90%;
	background-color: ${COLORS.card};
	border-radius: 1rem;
	margin-inline: auto;
	margin-block: 1rem;
	box-shadow: 0 0.25rem 0.25rem;
`;

const StyledCardImage = styled.img`
	height: 5.625rem;
	width: 5.625rem;
	border-radius: 1rem;
	box-shadow: 0 0.25rem 0.25rem;
`;

const StyledPrice = styled.span`
	font-weight: ${FONT_WEIGHT.bold};
`;

export { StyledSlide, StyledCardImage, StyledPrice };
