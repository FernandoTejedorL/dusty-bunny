//const URL = 'http://localhost:3000';
const URL = 'https://dusty-bunny-server.onrender.com';
const API_URL = '/api/users/';
const API_PRODUCTS_URL = '/api/fluffs/';
const API_ORDERS_URL = '/api/orders/';
const API_USER_ORDERS_URL = '/api/orders/user/';
const API_QUERY_URL = '/api/queries/';

//users

const getAllData = async () => {
	const response = await fetch(URL + API_URL);
	const data = await response.json();
	return data;
};

const createData = async newUser => {
	try {
		const response = await fetch(URL + API_URL, {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: { 'Content-Type': 'application/json' }
		});

		if (!response.ok) {
			return false;
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

const updateFavById = async (userId, newFavs) => {
	try {
		const userResponse = await fetch(URL + API_URL + userId);
		const userdata = await userResponse.json();
		let updatedFavs = userdata.favs;
		if (updatedFavs.includes(newFavs)) {
			updatedFavs = updatedFavs.filter(fav => fav !== newFavs);
		} else {
			updatedFavs.push(newFavs);
		}
		const response = await fetch(URL + API_URL + userId, {
			method: 'PATCH',
			body: JSON.stringify({ favs: updatedFavs }),
			headers: { 'Content-Type': 'application/json' }
		});

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

const updateDataById = async (id, newUser) => {
	try {
		const response = await fetch(URL + API_URL + id, {
			method: 'PATCH',
			body: JSON.stringify(newUser),
			headers: { 'Content-Type': 'application/json' }
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

//products

const getAllProducts = async () => {
	const response = await fetch(URL + API_PRODUCTS_URL);
	const data = await response.json();
	return data;
};

const findProduct = async id => {
	const response = await fetch(URL + API_PRODUCTS_URL + id);
	const product = await response.json();
	return product;
};

const addFavToProduct = async id => {
	try {
		const productResponse = await fetch(URL + API_PRODUCTS_URL + id);
		const productFound = await productResponse.json();
		const favNumber = productFound.fav + 1;
		const response = await fetch(URL + API_PRODUCTS_URL + id, {
			method: 'PATCH',
			body: JSON.stringify({ fav: favNumber }),
			headers: { 'Content-Type': 'application/json' }
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

const removeFavToProduct = async id => {
	try {
		const productResponse = await fetch(URL + API_PRODUCTS_URL + id);
		const productFound = await productResponse.json();
		const favNumber = productFound.fav - 1;
		const response = await fetch(URL + API_PRODUCTS_URL + id, {
			method: 'PATCH',
			body: JSON.stringify({ fav: favNumber }),
			headers: { 'Content-Type': 'application/json' }
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

const addQuantityToProduct = async cart => {
	try {
		const updatePromises = cart.map(async item => {
			// Obtener los datos de cada producto
			const productResponse = await fetch(URL + API_PRODUCTS_URL + item._id);
			const productFound = await productResponse.json();

			// Sumar la cantidad del carro a la actual
			const newOrdered = productFound.ordered + item.quantity;

			// Actualizar el quantoty del producto
			const response = await fetch(URL + API_PRODUCTS_URL + item._id, {
				method: 'PATCH',
				body: JSON.stringify({ ordered: newOrdered }),
				headers: { 'Content-Type': 'application/json' }
			});
			return await response.json();
		});

		// Esperar a que todas las actualizaciones se completen
		const results = await Promise.all(updatePromises);
		return results;
	} catch (error) {
		console.log(error);
	}
};

const updateProductById = async (id, newInfo) => {
	try {
		const response = await fetch(URL + API_PRODUCTS_URL + id, {
			method: 'PATCH',
			body: JSON.stringify(newInfo),
			headers: { 'Content-Type': 'application/json' }
		});

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

//orders

const findUserOrders = async id => {
	const response = await fetch(URL + API_USER_ORDERS_URL + id);
	const user = await response.json();
	return user;
};

const findOrder = async id => {
	const response = await fetch(URL + API_ORDERS_URL + id);
	const user = await response.json();
	return user;
};

const createOrder = async newOrder => {
	try {
		const response = await fetch(URL + API_ORDERS_URL, {
			method: 'POST',
			body: JSON.stringify(newOrder),
			headers: { 'Content-Type': 'application/json' }
		});

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

// Queries

const findAllQueries = async () => {
	const response = await fetch(URL + API_QUERY_URL);
	const queries = await response.json();
	return queries;
};

const createQuery = async newQuery => {
	try {
		const response = await fetch(URL + API_QUERY_URL, {
			method: 'POST',
			body: JSON.stringify(newQuery),
			headers: { 'Content-Type': 'application/json' }
		});

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

const updateQueryStatus = async (id, newInfo) => {
	try {
		const response = await fetch(URL + API_QUERY_URL);
		const queries = await response.json();
		const queryFound = queries.find(query => query._id === id);

		const newId = queryFound._id;
		const patchUrl = URL + API_QUERY_URL + newId;

		const secondResponse = await fetch(patchUrl, {
			method: 'PATCH',
			body: JSON.stringify(newInfo),
			headers: { 'Content-Type': 'application/json' }
		});

		const data = await secondResponse.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export {
	getAllData,
	createData,
	findData,
	updateFavById,
	updateDataById,
	getAllProducts,
	findProduct,
	addFavToProduct,
	removeFavToProduct,
	addQuantityToProduct,
	updateProductById,
	findUserOrders,
	findOrder,
	createOrder,
	findAllQueries,
	createQuery,
	updateQueryStatus
};
