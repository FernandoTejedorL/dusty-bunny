import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Home = () => {
	const { user, setPermission } = useContext(AuthContext);
	return (
		<div>
			<h2>HOME</h2>
			{user && <button onClick={() => logout(setPermission)}>Log Out</button>}
		</div>
	);
};

const logout = async setPermission => {
	await signOut(auth);
	setPermission(false);
};

export default Home;
