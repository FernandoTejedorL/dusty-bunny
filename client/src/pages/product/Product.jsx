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
import Info from '../../components/info/Info';

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
							<button>Go to Shop</button>
						</Link>
						<Link to={`/user/${user._id}`}>
							<button>Go to User Page</button>
						</Link>
					</div>
				</div>
				<div>
					<Info product={product} />
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
