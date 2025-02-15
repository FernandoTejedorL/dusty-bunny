import { useParams } from 'react-router-dom';
import { findUserOrders } from '../../utils/api';
import { useEffect, useState } from 'react';

const Orders = () => {
	const { id } = useParams();
	const [orders, setOrders] = useState([]);
	const userId = id;

	useEffect(() => {
		ordersGot(userId, setOrders);
	}, [userId]);

	console.log(orders);

	return (
		<div>
			<h2>Orders Page</h2>
			<h3>{id}</h3>
		</div>
	);
};

const ordersGot = async (userId, setOrders) => {
	const orders = await findUserOrders(userId);
	console.log(orders);
	setOrders(orders);
};

export default Orders;
