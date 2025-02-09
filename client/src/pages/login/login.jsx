import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
	StyledButton,
	StyledContainer,
	StyledForm,
	StyledHeader,
	StyledImg,
	StyledInput,
	StyledInputAndTag,
	StyledMain
} from './login.styles';

const Login = () => {
	const navigate = useNavigate();
	const { user, loading } = useAuth();
	console.log(user);
	if (loading) return <h2>Loading...</h2>;
	return (
		<StyledMain>
			<StyledHeader>Sign In</StyledHeader>
			<StyledContainer>
				<StyledImg src='/assets/images/common/login.png' alt='' />
				<StyledForm onSubmit={event => loginUser(event, navigate)}>
					<StyledInputAndTag>
						<label htmlFor='email'>Email:</label>
						<StyledInput
							type='email'
							name='email'
							id='email'
							placeholder='email'
						/>
					</StyledInputAndTag>
					<StyledInputAndTag>
						<label htmlFor='password'>Password:</label>
						<StyledInput
							type='text'
							name='password'
							placeholder='password'
							id='password'
						/>
					</StyledInputAndTag>
					<StyledButton type='submit' value='Sign In' />
				</StyledForm>
			</StyledContainer>
		</StyledMain>
	);
};

const loginUser = async (event, navigate) => {
	event.preventDefault();
	const email = event.target.email.value;
	const password = event.target.password.value;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		console.log('User Logged');
		event.target.reset();
		navigate('/');
	} catch (error) {
		console.log('Error registering user', error.code, error.message);
	}
};

export default Login;
