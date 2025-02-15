import { useParams } from 'react-router-dom';
import { findUserOrders } from '../../utils/api';

const Orders = () => {
	const { id } = useParams();
	const userId = id;
	const orders = ordersGot(userId);
	console.log(orders);

	return (
		<div>
			<h2>Orders Page</h2>
			<h3>{id}</h3>
		</div>
	);
};

const ordersGot = async userId => {
	const orders = await findUserOrders(userId);
	console.log(orders);
};

export default Orders;
