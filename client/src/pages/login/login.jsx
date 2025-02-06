import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
	const navigate = useNavigate();
	const { user, loading } = useAuth();
	console.log(user);
	if (loading) return <h2>Loading...</h2>;
	return (
		<div>
			<h2>LOGIN PAGE</h2>
			<form onSubmit={event => loginUser(event, navigate)}>
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' id='email' placeholder='email' />
				<label htmlFor='password'>Password</label>
				<input
					type='text'
					name='password'
					placeholder='password'
					id='password'
				/>
				<input type='submit' value='login' />
			</form>
		</div>
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
