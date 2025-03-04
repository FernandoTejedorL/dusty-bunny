import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { actionAddToCart } from '../../actions/cart-actions';
import EditInfo from '../../components/editInfo/EditInfo';
import Info from '../../components/info/Info';
import PageHeader from '../../components/pageHeader/PageHeader';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import {
	addFavToProduct,
	findData,
	findProduct,
	removeFavToProduct,
	updateFavById
} from '../../utils/api';

import ButtonPrimary from '../../components/buttonPrimary/ButtonPrimary';
import {
	StyledButtonsContainer,
	StyledFavIcon,
	StyledImage,
	StyledImageAndButtons,
	StyledImagesContainer,
	StyledInfoContainer,
	StyledMain,
	StyledProductContainer
} from './product.styles';

const Product = () => {
	const { id } = useParams();
	const { user, setUser } = useAuth();
	const navigate = useNavigate();
	const [product, setProduct] = useState({});
	const { cartState, dispatch } = useCart();
	const [fav, setFav] = useState(false);
	const [edit, setEdit] = useState(false);

	const userId = user._id;

	useEffect(() => {
		fetchProductById(setProduct, id);
	}, [id]);

	const isInCart = cartState.some(item => item._id === product._id);

	checkFav(userId, product, setFav);

	return (
		<StyledMain>
			<PageHeader text={product.name} />
			<StyledProductContainer>
				<StyledImageAndButtons>
					{user.vendor && (
						<StyledButtonsContainer>
							{!edit && (
								<ButtonPrimary
									text={'Edit Product'}
									action={() => setEdit(true)}
								/>
							)}
							{edit && (
								<ButtonPrimary
									text={'Cancel Editting'}
									action={() => setEdit(false)}
								/>
							)}
						</StyledButtonsContainer>
					)}
					<StyledImagesContainer>
						<StyledImage src={product.image} alt='' />
						{!fav && !user.vendor && (
							<StyledFavIcon
								onClick={() => {
									favProduct(userId, product, setUser);
									addFavToProduct(id);
								}}
								src='/assets/images/common/nofav.svg'
								alt=''
							/>
						)}
						{fav && !user.vendor && (
							<StyledFavIcon
								onClick={() => {
									favProduct(userId, product, setUser);
									removeFavToProduct(id);
								}}
								src='/assets/images/common/fav.svg'
								alt=''
							/>
						)}
					</StyledImagesContainer>
					<StyledButtonsContainer>
						{!isInCart && !user.vendor && (
							<ButtonPrimary
								text={'Add To Cart'}
								action={() => dispatch(actionAddToCart(product))}
							/>
						)}
						{!edit && (
							<ButtonPrimary
								text={'Go to Shop'}
								action={() => navigate('/shop')}
							/>
						)}
						{!user.vendor && (
							<ButtonPrimary
								text={'Go to User Page'}
								action={() => navigate(`/user/${user._id}`)}
							/>
						)}
					</StyledButtonsContainer>
				</StyledImageAndButtons>

				<StyledInfoContainer>
					{user.vendor && edit && (
						<EditInfo
							product={product}
							setProduct={setProduct}
							setEdit={setEdit}
							id={id}
						/>
					)}

					{!edit && <Info product={product} />}
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
