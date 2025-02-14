import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { createData } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import {
	StyledButton,
	StyledCheckbox,
	StyledContainer,
	StyledHeader,
	StyledImg,
	StyledInput,
	StyledInputAndTag,
	StyledMain,
	StyledRadioPack,
	StyledRadiosContainer,
	StyledRegisterForm
} from './register.styles';
import { useAuth } from '../../hooks/useAuth';
import AvatarGrid from '../../components/avatarGrid/AvatarGrid';

const Register = () => {
	const navigate = useNavigate();
	const { loading } = useAuth();
	if (loading) return <h2>Loading...</h2>;
	return (
		<StyledMain>
			<StyledHeader>REGISTER</StyledHeader>
			<StyledContainer>
				<StyledImg src='/assets/images/common/register.jpg' alt='' />
				<StyledRegisterForm onSubmit={event => registerUser(event, navigate)}>
					<AvatarGrid />
					<StyledInputAndTag>
						<label htmlFor='name'>Name:</label>
						<StyledInput type='text' name='name' placeholder='Name' />
					</StyledInputAndTag>
					<StyledInputAndTag>
						<label htmlFor='surname'>Surname:</label>
						<StyledInput type='text' name='surname' placeholder='Surname' />
					</StyledInputAndTag>
					<StyledInputAndTag>
						<label htmlFor='address'>Address:</label>
						<StyledInput type='text' name='address' placeholder='Address' />
					</StyledInputAndTag>
					<StyledInputAndTag>
						<label htmlFor='email'>Email:</label>
						<StyledInput type='email' name='email' placeholder='Email' />
					</StyledInputAndTag>
					<StyledInputAndTag>
						<label htmlFor='pass'>Password:</label>
						<StyledInput type='text' name='password' placeholder='Password' />
					</StyledInputAndTag>
					<StyledRadiosContainer>
						<StyledRadioPack>
							<label htmlFor='userProfile'>User</label>
							<StyledCheckbox
								type='radio'
								name='profile'
								value={false}
								id='userProfile'
							/>
						</StyledRadioPack>
						<StyledRadioPack>
							<label htmlFor='vendorProfile'>Vendor</label>
							<StyledCheckbox
								type='radio'
								name='profile'
								value={true}
								id='vendorProfile'
							/>
						</StyledRadioPack>
					</StyledRadiosContainer>
					<StyledButton type='submit' value='Register' />
				</StyledRegisterForm>
			</StyledContainer>
		</StyledMain>
	);
};

const registerUser = async (event, navigate) => {
	event.preventDefault();
	const email = event.target.email.value;
	const password = event.target.password.value;
	try {
		const firebaseUser = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		console.log(firebaseUser.user.uid);
		const newUser = {
			_id: firebaseUser.user.uid,
			avatar: event.target.avatar.value,
			name: event.target.name.value,
			surname: event.target.surname.value,
			address: event.target.address.value,
			email: event.target.email.value,
			vendor: event.target.profile.value
		};
		await createData(newUser);
		console.log('User Registered');
		event.target.reset();
		navigate('/');
	} catch (error) {
		console.log('Error registering user', error.code, error.message);
	}
};

export default Register;
