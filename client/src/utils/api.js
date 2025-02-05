const URL = 'http://localhost:3000';
const API_URL = '/api/users/';

const getAllData = async () => {
	const response = await fetch(URL + API_URL);
	const data = await response.json();
	return data;
};

const createData = async (newUser, setMailOk) => {
	try {
		const response = await fetch(URL + API_URL, {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: { 'Content-Type': 'application/json' }
		});

		if (!response.ok) {
			setMailOk(false);
		} else {
			setMailOk(true);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

const findData = async id => {
	const response = await fetch(URL + API_URL + id);
	const user = await response.json();
	return user;
};

export { getAllData, createData, findData };
