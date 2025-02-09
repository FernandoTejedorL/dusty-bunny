import styled from 'styled-components';
import { Swiper } from 'swiper/react';

const StyledCarousel = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 90%;
`;

const StyledSwiper = styled(Swiper)`
	width: 240px;
	align-items: center;

	@media screen and (width>=768px) {
		width: 550px;
	}

	@media screen and (width>=1024px) {
		width: 850px;
	}
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
