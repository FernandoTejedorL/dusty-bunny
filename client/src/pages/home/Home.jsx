import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useAuth } from '../../hooks/useAuth';

const Home = () => {
	const { user } = useAuth();
	return (
		<div>
			<h2>HOME</h2>

			<img src='/assets/images/common/working.jpg' alt='' />

			{user && <button onClick={logout}>Log Out</button>}
		</div>
	);
};

const logout = async () => {
	await signOut(auth);
};

export default Home;
