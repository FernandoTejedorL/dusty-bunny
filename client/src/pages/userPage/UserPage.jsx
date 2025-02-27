import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { updateDataById } from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { useForm } from 'react-hook-form';
import Carousel from '../../components/carousel/Carousel';
import {
	StyledAvatar,
	StyledConfirmCancel,
	StyledEditButton,
	StyledEmptyFavs,
	StyledEmptySpan,
	StyledForm,
	StyledInput,
	StyledInputContainer,
	StyledLabel,
	StyledMain,
	StyledUserContainer
} from './userPage.styles';
import PageHeader from '../../components/pageHeader/PageHeader';
import AvatarGrid from '../../components/avatarGrid/AvatarGrid';
import ButtonPrimary from '../../components/buttonPrimary/ButtonPrimary';
import ButtonInput from '../../components/buttonInputPrimary/ButtonInput';

const UserPage = () => {
	const { user, setUser, loading } = useAuth();
	const { products } = useProducts();
	const [edit, setEdit] = useState(false);
	const [currentAvatar, setCurrentAvatar] = useState(user.avatar);
	const { id } = useParams();
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	if (loading) return <h2>Loading...</h2>;
	const favourites = user.favs;
	const favouritesToShow = productsToCarousel(favourites, products);
	return (
		<StyledMain>
			<PageHeader text={user.name + ' ' + user.surname} />
			<StyledUserContainer>
				<StyledAvatar src={currentAvatar} alt='user-pic' />

				<StyledForm
					onSubmit={handleSubmit(data =>
						updateUser(data, setUser, id, setEdit)
					)}
				>
					{edit && (
						<AvatarGrid
							register={register}
							action={image => setCurrentAvatar(image)}
						/>
					)}
					<StyledInputContainer>
						<StyledLabel htmlFor='name'>Name:</StyledLabel>
						{!edit && <span>{user.name}</span>}
						{edit && (
							<StyledInput
								type='text'
								{...register('name')}
								id='name'
								defaultValue={user.name}
							/>
						)}
					</StyledInputContainer>
					<StyledInputContainer>
						<StyledLabel htmlFor='surname'>Surname:</StyledLabel>
						{!edit && <span>{user.surname}</span>}
						{edit && (
							<StyledInput
								type='text'
								{...register('surname')}
								id='surname'
								defaultValue={user.surname}
							/>
						)}
					</StyledInputContainer>
					<StyledInputContainer>
						<StyledLabel htmlFor='address'>Address:</StyledLabel>
						{!edit && <span>{user.address}</span>}
						{edit && (
							<StyledInput
								type='text'
								{...register('address')}
								id='address'
								defaultValue={user.address}
							/>
						)}
					</StyledInputContainer>
					{edit && (
						<StyledConfirmCancel>
							<ButtonInput value={'Confirm'} />
							<ButtonPrimary text={'Cancel'} action={() => setEdit(false)} />
						</StyledConfirmCancel>
					)}
					{!edit && (
						<StyledEditButton onClick={() => setEdit(true)}>
							Edit Profile
						</StyledEditButton>
					)}
				</StyledForm>
			</StyledUserContainer>
			{favourites.length === 0 && (
				<StyledEmptyFavs>
					<StyledEmptySpan>
						Your favourites will be here... so check the shop!!
					</StyledEmptySpan>
					<ButtonPrimary
						text={'Go to shop!'}
						action={() => navigate('/shop')}
					/>
				</StyledEmptyFavs>
			)}
			<Carousel products={favouritesToShow} />
		</StyledMain>
	);
};

const updateUser = async (data, setUser, id, setEdit) => {
	const { name, surname, address } = data;
	const newUser = {
		avatar: data.avatar,
		name,
		surname,
		address
	};
	const newData = await updateDataById(id, newUser);
	setUser(newData);
	setEdit(false);
};

const productsToCarousel = (favourites, products) => {
	const favouritesOfUser = products.filter(product =>
		favourites.includes(product._id)
	);
	return favouritesOfUser;
};

export default UserPage;
