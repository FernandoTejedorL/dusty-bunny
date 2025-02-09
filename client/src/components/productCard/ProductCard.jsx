import 'swiper/css';
import {
	StyledCardImage,
	StyledPrice,
	StyledSlide
} from './productCard.styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProductCard = ({ image, name, price }) => {
	const { user } = useAuth();
	const direction = user ? '/shop' : '/redirect';
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
