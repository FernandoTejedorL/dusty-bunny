import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledSlide = styled(SwiperSlide)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-size: ${FONT_SIZE.m};
	text-align: center;
	padding: 1.5rem;
	height: 15.625rem;
	width: 12.6875rem;
	background-color: ${COLORS.card};
	border-radius: 1rem;
	margin-inline: auto;
	margin-block: 1rem;
	box-shadow: 0 4px 4px;
`;

const StyledCardImage = styled.img`
	height: 6.25rem;
	width: 6.25rem;
	border-radius: 1rem;
`;

const StyledPrice = styled.span`
	font-weight: ${FONT_WEIGHT.bold};
`;

export { StyledSlide, StyledCardImage, StyledPrice };
