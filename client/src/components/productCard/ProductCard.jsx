import 'swiper/css';
import {
	StyledCardImage,
	StyledPrice,
	StyledSlide
} from './productCard.styles';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, name, price }) => {
	return (
		<Link to={'/redirect'}>
			<StyledSlide>
				<StyledCardImage src={image} alt='' />
				<span>{name}</span>
				<StyledPrice>{price}€</StyledPrice>
			</StyledSlide>
		</Link>
	);
};

export default ProductCard;
