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
import { useAuth } from '../../hooks/useAuth';

const Carousel = () => {
	const { products } = useAuth();
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
	}, [swiperInstance, prevRef.current, nextRef.current]);

	useEffect(() => {
		const handleResize = () => {
			setSlidesPerView(getSlidesPerView());
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	console.log(products);
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
				spaceBetween={10}
				slidesPerView={slidesPerView}
				onSwiper={setSwiperInstance}
				onSlideChange={() => console.log('slide change')}
				//centeredSlides={true}
			>
				{products.map(item => (
					<SwiperSlide key={item._id}>
						<ProductCard
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
	if (width >= 1024) return 3;
};

export default Carousel;
