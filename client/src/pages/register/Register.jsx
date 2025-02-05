import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { createData } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { StyledRegisterForm } from './register.styles';

const Register = () => {
	const navigate = useNavigate();
	const { user, loading } = useContext(AuthContext);
	console.log(user);
	if (loading) return <h2>Loading...</h2>;
	return (
		<div>
			<h2>REGISTER</h2>
			<StyledRegisterForm onSubmit={event => registerUser(event, navigate)}>
				<div>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' placeholder='Name' />
				</div>
				<div>
					<label htmlFor='surname'>Surname</label>
					<input type='text' name='surname' placeholder='Surname' />
				</div>
				<div>
					<label htmlFor='address'>Address</label>
					<input type='text' name='address' placeholder='Address' />
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' placeholder='Email' />
				</div>
				<div>
					<label htmlFor='pass'>Password</label>
					<input type='text' name='password' placeholder='Password' />
				</div>
				<div>
					<label htmlFor='userProfile'>User</label>
					<input type='radio' name='profile' value={false} id='userProfile' />
				</div>
				<div>
					<label htmlFor='vendorProfile'>Admin</label>
					<input type='radio' name='profile' value={true} id='vendorProfile' />
				</div>
				<input type='submit' value='Register' />
			</StyledRegisterForm>
		</div>
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
