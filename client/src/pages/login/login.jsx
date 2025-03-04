import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonInput from '../../components/buttonInputPrimary/ButtonInput';
import PageHeader from '../../components/pageHeader/PageHeader';
import Spinner from '../../components/spinner/Spinner';
import { auth } from '../../config/firebase.config';
import { useAuth } from '../../hooks/useAuth';

import {
	StyledContainer,
	StyledForm,
	StyledImg,
	StyledInput,
	StyledInputAndTag,
	StyledMain
} from './login.styles';

const Login = () => {
	const navigate = useNavigate();
	const { loading } = useAuth();
	const [completed, setComplete] = useState(false);

	if (loading) return <h2>Loading...</h2>;

	return (
		<StyledMain>
			<Spinner completed={completed} />
			<PageHeader text={'Sign In'} />
			<StyledContainer>
				<StyledImg src='/assets/images/common/login.png' alt='' />
				<StyledForm onSubmit={event => loginUser(event, setComplete, navigate)}>
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
							type='password'
							name='password'
							placeholder='password'
							id='password'
						/>
					</StyledInputAndTag>
					<ButtonInput value={'Sign In'} />
				</StyledForm>
			</StyledContainer>
		</StyledMain>
	);
};

const loginUser = async (event, setComplete, navigate) => {
	event.preventDefault();
	const email = event.target.email.value;
	const password = event.target.password.value;
	setComplete(true);
	try {
		await signInWithEmailAndPassword(auth, email, password);
		console.log('User Logged');
		event.target.reset();
		setComplete(false);
		navigate('/');
	} catch (error) {
		console.log('Error registering user', error.code, error.message);
	}
};

export default Login;
