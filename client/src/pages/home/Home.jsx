import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Home = () => {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<h2>HOME</h2>
			{user && <button onClick={logout}>Log Out</button>}
		</div>
	);
};

const logout = async () => {
	await signOut(auth);
};

export default Home;
