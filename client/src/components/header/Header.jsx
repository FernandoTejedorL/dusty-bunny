import { useContext } from 'react';
import Menu from '../menu/Menu';
import { AuthContext } from '../../contexts/Auth.context';

const Header = () => {
	const { permission } = useContext(AuthContext);
	console.log(permission);
	return (
		<div>
			<h1>HEADER</h1>
			<Menu />
		</div>
	);
};

export default Header;
