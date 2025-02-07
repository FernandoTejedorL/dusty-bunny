import 'swiper/css';
import { StyledSlide } from './productCard.styles';

const ProductCard = ({ name }) => {
	return (
		<StyledSlide>
			<img src={name} alt='' />
		</StyledSlide>
	);
};

export default ProductCard;
