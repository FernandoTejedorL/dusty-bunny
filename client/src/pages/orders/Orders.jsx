import { useParams } from 'react-router-dom';
import { findUserOrders } from '../../utils/api';
import { useEffect, useState } from 'react';
import EachOrder from '../../components/eachOrder/eachOrder';
import { StyledAllComp, StyledHeader, StyledMain } from './orders.styles';

const Orders = () => {
	const { id } = useParams();
	const [orders, setOrders] = useState([]);
	const userId = id;

	useEffect(() => {
		ordersGot(userId, setOrders);
	}, [userId]);

	const ordersToMap = orders;

	return (
		<StyledMain>
			<StyledHeader>Orders Page</StyledHeader>
			<StyledAllComp>
				{ordersToMap.map(item => (
					<EachOrder key={item._id} item={item} />
				))}
			</StyledAllComp>
		</StyledMain>
	);
};

const ordersGot = async (userId, setOrders) => {
	const orders = await findUserOrders(userId);
	setOrders(orders);
};

export default Orders;
