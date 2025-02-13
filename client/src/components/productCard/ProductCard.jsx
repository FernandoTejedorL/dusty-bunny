import 'swiper/css';
import {
	StyledCardImage,
	StyledPrice,
	StyledSlide
} from './productCard.styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProductCard = ({ id, image, name, price }) => {
	const { user } = useAuth();
	const direction = user ? `/product/${id}` : '/redirect';
	return (
		<Link to={direction}>
			<StyledSlide>
				<StyledCardImage src={image} alt='' />
				<span>{name}</span>
				<StyledPrice>{price}€</StyledPrice>
			</StyledSlide>
		</Link>
	);
};

export default ProductCard;
