import styled from 'styled-components';
import { Swiper } from 'swiper/react';

const StyledCarousel = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 90%;
`;

const StyledSwiper = styled(Swiper)`
	width: 15rem;
	align-items: center;

	@media screen and (width>=768px) {
		width: 34.375rem;
	}

	@media screen and (width>=1024px) {
		width: 53.125rem;
	}

	@media screen and (width>=1440px) {
		width: 75rem;
	}
`;

const NavigationButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	width: 2.5rem;
	height: 6.25rem;
`;

const StyledChevron = styled.img`
	height: 100%;
	width: 100%;
`;

export { StyledCarousel, StyledSwiper, NavigationButton, StyledChevron };
