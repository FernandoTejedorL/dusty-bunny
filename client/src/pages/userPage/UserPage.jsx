import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { updateDataById } from '../../utils/api';
import { useParams } from 'react-router-dom';

const UserPage = () => {
	const { user, setUser, loading } = useAuth();
	const [edit, setEdit] = useState(false);
	const { id } = useParams();
	if (loading) return <h2>Loading...</h2>;

	console.log(user.favs);
	return (
		<div>
			<h2>Your Profile</h2>
			<div>
				<div>
					<img src='/assets/images/common/userpic.jpg' alt='user-pic' />
				</div>
				<form onSubmit={event => updateUser(id, event, setUser, setEdit)}>
					<div>
						<label htmlFor='name'>Name:</label>
						{!edit && <span>{user.name}</span>}
						{edit && (
							<input
								type='text'
								name='name'
								id='name'
								defaultValue={user.name}
							/>
						)}
					</div>
					<div>
						<label htmlFor='surname'>Surname:</label>
						{!edit && <span>{user.surname}</span>}
						{edit && (
							<input
								type='text'
								name='surname'
								id='surname'
								defaultValue={user.surname}
							/>
						)}
					</div>
					<div>
						<label htmlFor='address'>Address:</label>
						{!edit && <span>{user.address}</span>}
						{edit && (
							<input
								type='text'
								name='address'
								id='address'
								defaultValue={user.address}
							/>
						)}
					</div>
					{edit && (
						<>
							<input type='submit' value='Confirm' />
							<input
								type='button'
								value='Cancel'
								onClick={() => setEdit(false)}
							/>
						</>
					)}
				</form>
				{!edit && <button onClick={() => setEdit(true)}>Edit Profile</button>}
			</div>
		</div>
	);
};

const updateUser = async (id, event, setUser, setEdit) => {
	event.preventDefault();
	const newUser = {
		name: event.target.name.value,
		surname: event.target.surname.value,
		address: event.target.address.value
	};
	const data = await updateDataById(id, newUser);
	setUser(data);
	setEdit(false);
};

export default UserPage;
