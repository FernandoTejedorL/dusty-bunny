import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { updateDataById } from '../../utils/api';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import Carousel from '../../components/carousel/Carousel';
import {
	StyledAvatar,
	StyledButton,
	StyledConfirmCancel,
	StyledEditButton,
	StyledForm,
	StyledInput,
	StyledInputContainer,
	StyledLabel,
	StyledMain,
	StyledUserContainer
} from './userPage.styles';
import PageHeader from '../../components/pageHeader/PageHeader';

const UserPage = () => {
	const { user, setUser, loading } = useAuth();
	const { products } = useProducts();
	const [edit, setEdit] = useState(false);
	const { id } = useParams();

	if (loading) return <h2>Loading...</h2>;

	const favourites = user.favs || [];
	const favouritesToShow = productsToCarousel(favourites, products);

	return (
		<StyledMain>
			<PageHeader text={user.name + ' ' + user.surname} />
			<StyledUserContainer>
				<StyledAvatar src={user.avatar} alt='user-pic' />

				<StyledForm onSubmit={event => updateUser(id, event, setUser, setEdit)}>
					<StyledInputContainer>
						<StyledLabel htmlFor='name'>Name:</StyledLabel>
						{!edit && <span>{user.name}</span>}
						{edit && (
							<StyledInput
								type='text'
								name='name'
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
								name='surname'
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
								name='address'
								id='address'
								defaultValue={user.address}
							/>
						)}
					</StyledInputContainer>
					{edit && (
						<StyledConfirmCancel>
							<StyledButton type='submit' value='Confirm' />
							<StyledButton
								type='button'
								value='Cancel'
								onClick={() => setEdit(false)}
							/>
						</StyledConfirmCancel>
					)}
					{!edit && (
						<StyledEditButton onClick={() => setEdit(true)}>
							Edit Profile
						</StyledEditButton>
					)}
				</StyledForm>
			</StyledUserContainer>

			<Carousel products={favouritesToShow} />
		</StyledMain>
	);
};

const updateUser = async (id, event, setUser, setEdit) => {
	event.preventDefault();
	const newUser = {
		name: event.target.name.value,
		surname: event.target.surname.value,
		address: event.target.address.value
	};
	const data = await updateDataById(id, newUser);
	setUser(data);
	setEdit(false);
};

const productsToCarousel = (favourites, products) => {
	const favouritesOfUser = products.filter(product =>
		favourites.includes(product._id)
	);
	return favouritesOfUser;
};

export default UserPage;
