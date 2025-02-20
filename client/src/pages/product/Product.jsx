import { useEffect, useState } from 'react';
import { findData, findProduct, updateFavById } from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import {
	StyledButton,
	StyledButtonsContainer,
	StyledFavIcon,
	StyledImage,
	StyledImageAndButtons,
	StyledImagesContainer,
	StyledInfoContainer,
	StyledMain,
	StyledProductContainer
} from './product.styles';
import { useAuth } from '../../hooks/useAuth';
import Info from '../../components/info/Info';
import PageHeader from '../../components/pageHeader/PageHeader';

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [fav, setFav] = useState(false);
	const { cart, addToCart } = useCart();
	const { user, setUser } = useAuth();
	const userId = user._id;
	const navigate = useNavigate();

	useEffect(() => {
		fetchProductById(setProduct, id);
	}, [id]);

	const isInCart = cart.some(item => item._id === product._id);

	checkFav(userId, product, setFav);

	return (
		<StyledMain>
			<PageHeader text={product.name} />
			<StyledProductContainer>
				<StyledImageAndButtons>
					<StyledImagesContainer>
						<StyledImage src={product.image} alt='' />
						{!fav && !user.vendor && (
							<StyledFavIcon
								onClick={() => {
									favProduct(userId, product, setUser);
								}}
								src='/assets/images/common/nofav.svg'
								alt=''
							/>
						)}
						{fav && !user.vendor && (
							<StyledFavIcon
								onClick={() => {
									favProduct(userId, product, setUser);
								}}
								src='/assets/images/common/fav.svg'
								alt=''
							/>
						)}
					</StyledImagesContainer>
					<StyledButtonsContainer>
						{!isInCart && !user.vendor && (
							<StyledButton onClick={() => addToCart(product)}>
								Add To Cart
							</StyledButton>
						)}

						<StyledButton onClick={() => navigate('/shop')}>
							Go to Shop
						</StyledButton>

						{!user.vendor && (
							<StyledButton onClick={() => navigate(`/user/${user._id}`)}>
								Go to User Page
							</StyledButton>
						)}
					</StyledButtonsContainer>
				</StyledImageAndButtons>
				<StyledInfoContainer>
					<Info product={product} />
				</StyledInfoContainer>
			</StyledProductContainer>
		</StyledMain>
	);
};

const fetchProductById = async (setProduct, _id) => {
	const data = await findProduct(_id);
	setProduct(data);
};

const favProduct = async (userId, product, setUser) => {
	const newFavs = product._id;
	const userUpdated = await updateFavById(userId, newFavs);
	setUser(userUpdated);
};

const checkFav = async (userId, product, setFav) => {
	const user = await findData(userId);
	if (user.favs.includes(product._id)) {
		setFav(true);
	} else {
		setFav(false);
	}
};

export default Product;
