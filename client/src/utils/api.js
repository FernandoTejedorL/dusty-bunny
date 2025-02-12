const URL = 'http://localhost:3000';
const API_URL = '/api/users/';
const API_PRODUCTS_URL = '/api/fluffs/';

const getAllData = async () => {
	const response = await fetch(URL + API_URL);
	const data = await response.json();
	return data;
};

const getAllProducts = async () => {
	const response = await fetch(URL + API_PRODUCTS_URL);
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

const findProduct = async id => {
	const response = await fetch(URL + API_PRODUCTS_URL + id);
	const product = await response.json();
	return product;
};

const updateFavById = async (userId, newFavs) => {
	try {
		const response = await fetch(URL + API_URL + userId, {
			method: 'PATCH',
			body: JSON.stringify({ favs: newFavs }),
			headers: { 'Content-Type': 'application/json' }
		});

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export {
	getAllData,
	getAllProducts,
	createData,
	findData,
	findProduct,
	updateFavById
};
