import { useAuth } from '../../hooks/useAuth';

const UserPage = () => {
	const { user } = useAuth();

	console.log(user);

	return (
		<div>
			<h2>{user?.name}</h2>
			<img src='/assets/images/common/working.jpg' alt='' />
		</div>
	);
};

export default UserPage;
