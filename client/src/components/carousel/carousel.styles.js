import styled from 'styled-components';
import { Swiper } from 'swiper/react';

const StyledCarousel = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const StyledSwiper = styled(Swiper)`
	width: 350px;
	align-items: center;
`;

const NavigationButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	width: 40px;
	height: 100px;
`;

const StyledChevron = styled.img`
	height: 100%;
	width: 100%;
`;

export { StyledCarousel, StyledSwiper, NavigationButton, StyledChevron };
