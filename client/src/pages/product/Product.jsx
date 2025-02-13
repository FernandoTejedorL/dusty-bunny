import { useEffect, useState } from 'react';
import { findData, findProduct, updateFavById } from '../../utils/api';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import {
	StyledFavIcon,
	StyledImage,
	StyledImagesContainer,
	StyledMain,
	StyledName
} from './product.styles';
import { useAuth } from '../../hooks/useAuth';
import ProductInfo from '../../components/productInfo/ProductInfo';

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [fav, setFav] = useState(false);
	const { addToCart } = useCart();
	const { user, setUser } = useAuth();
	const userId = user._id;

	useEffect(() => {
		fetchProductById(setProduct, id);
	}, [id]);

	checkFav(userId, product, setFav);
	console.log(user);
	console.log('PRODUCT ', product._id);

	return (
		<StyledMain>
			<StyledName>{product.name}</StyledName>
			<div>
				<div>
					<StyledImagesContainer>
						<StyledImage src={product.image} alt='' />
						{!fav && (
							<StyledFavIcon
								onClick={() => {
									favProduct(userId, product, setUser);
								}}
								src='/assets/images/common/nofav.svg'
								alt=''
							/>
						)}
						{fav && (
							<StyledFavIcon
								onClick={() => {
									favProduct(userId, product, setUser);
								}}
								src='/assets/images/common/fav.svg'
								alt=''
							/>
						)}
					</StyledImagesContainer>
					<div>
						<button onClick={() => addToCart(product)}>Add To Cart</button>
						<Link to={'/shop'}>
							<button>Back to Shop</button>
						</Link>
					</div>
				</div>
				<div>
					<ProductInfo product={product} />
				</div>
			</div>
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
