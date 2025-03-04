import { Link } from 'react-router-dom';
import 'swiper/css';

import { useAuth } from '../../hooks/useAuth';

import {
	StyledCardImage,
	StyledPrice,
	StyledSlide
} from './productCard.styles';

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
