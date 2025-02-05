import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { findData } from '../../utils/api';

const Login = () => {
	const navigate = useNavigate();
	const { user, loading, setPermission } = useContext(AuthContext);
	console.log(user);
	if (loading) return <h2>Loading...</h2>;
	return (
		<div>
			<h2>LOGIN PAGE</h2>
			<form onSubmit={event => loginUser(event, navigate, setPermission)}>
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

const loginUser = async (event, navigate, setPermission) => {
	event.preventDefault();
	const email = event.target.email.value;
	const password = event.target.password.value;
	try {
		const loggin = await signInWithEmailAndPassword(auth, email, password);
		console.log('User Logged');
		const permissions = await findData(loggin.user.uid);
		setPermission(permissions.vendor);
		event.target.reset();
		navigate('/');
		return loggin;
	} catch (error) {
		console.log('Error registering user', error.code, error.message);
	}
};

export default Login;
