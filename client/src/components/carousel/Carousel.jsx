import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import { getAllProducts } from '../../utils/api';
import ProductCard from '../productCard/ProductCard';
import {
	NavigationButton,
	StyledCarousel,
	StyledChevron,
	StyledSwiper
} from './carousel.styles';

const Carousel = () => {
	const [products, setProducs] = useState([]);
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	useEffect(() => {
		fetchProducts(setProducs);
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
				slidesPerView={3}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current
				}}
				onBeforeInit={swiper => {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
			>
				{products.map(item => (
					<SwiperSlide key={item._id}>
						<ProductCard name={item.image} />
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

const fetchProducts = async setProducs => {
	const data = await getAllProducts();
	setProducs(data);
};

export default Carousel;
