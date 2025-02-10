import WorkInProgress from '../../components/workInProgress/WorkInProgress';
import { useAuth } from '../../hooks/useAuth';

const UserPage = () => {
	const { user } = useAuth();

	return (
		<div>
			<h2>{user?.name}</h2>
			<WorkInProgress />
		</div>
	);
};

export default UserPage;
