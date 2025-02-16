import { useParams } from 'react-router-dom';
import { findUserOrders } from '../../utils/api';
import { useEffect, useState } from 'react';
import EachOrder from '../../components/eachOrder/eachOrder';

const Orders = () => {
	const { id } = useParams();
	const [orders, setOrders] = useState([]);
	const userId = id;

	useEffect(() => {
		ordersGot(userId, setOrders);
	}, [userId]);

	const ordersToMap = orders;

	return (
		<div>
			<h2>Orders Page</h2>
			<h3>{id}</h3>
			{ordersToMap.map(item => (
				<EachOrder key={item._id} item={item} />
			))}
		</div>
	);
};

const ordersGot = async (userId, setOrders) => {
	const orders = await findUserOrders(userId);
	setOrders(orders);
};

export default Orders;
