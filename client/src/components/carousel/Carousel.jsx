import { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import {
	NavigationButton,
	StyledCarousel,
	StyledChevron,
	StyledSwiper
} from './carousel.styles';

import ProductCard from '../productCard/ProductCard';

const Carousel = ({ products }) => {
	const [swiperInstance, setSwiperInstance] = useState(null);

	const prevRef = useRef(null);
	const nextRef = useRef(null);

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
				breakpoints={{
					320: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
					1440: { slidesPerView: 4 }
				}}
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

export default Carousel;
