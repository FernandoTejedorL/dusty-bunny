import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import {
	NavigationButton,
	StyledCarousel,
	StyledChevron,
	StyledSwiper
} from './carousel.styles';
import 'swiper/css';
import 'swiper/css/navigation';
//import { useProducts } from '../../hooks/useProducts';

const Carousel = ({ products }) => {
	const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const [swiperInstance, setSwiperInstance] = useState(null);

	useEffect(() => {
		if (
			swiperInstance &&
			swiperInstance.navigation &&
			prevRef.current &&
			nextRef.current
		) {
			swiperInstance.params.navigation.prevEl = prevRef.current;
			swiperInstance.params.navigation.nextEl = nextRef.current;
			swiperInstance.navigation.init();
			swiperInstance.navigation.update();
		}
	}, [swiperInstance, prevRef, nextRef]);

	useEffect(() => {
		const handleResize = () => {
			setSlidesPerView(getSlidesPerView());
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<StyledCarousel>
			<NavigationButton ref={prevRef} $position='left'>
				<StyledChevron
					src='/assets/images/common/chevron-lft.png'
					alt='previous'
				/>
			</NavigationButton>
			<StyledSwiper
				modules={[Navigation]}
				loop={true}
				spaceBetween={10}
				slidesPerView={slidesPerView}
				navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
				onSwiper={setSwiperInstance}
			>
				{products.map(item => (
					<SwiperSlide key={item._id}>
						<ProductCard
							id={item._id}
							image={item.image}
							name={item.name}
							price={item.price}
						/>
					</SwiperSlide>
				))}
			</StyledSwiper>
			<NavigationButton ref={nextRef} $position='right'>
				<StyledChevron
					src='/assets/images/common/chevron-right.png'
					alt='next'
				/>
			</NavigationButton>
		</StyledCarousel>
	);
};

const getSlidesPerView = () => {
	const width = window.innerWidth;
	if (width < 768) return 1;
	if (width < 1024) return 2;
	if (width < 1440) return 3;
	if (width >= 1440) return 4;
};

export default Carousel;
