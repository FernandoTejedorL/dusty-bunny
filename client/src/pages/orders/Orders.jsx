import { useParams } from 'react-router-dom';
import { findUserOrders } from '../../utils/api';
import { useEffect, useState } from 'react';
import EachOrder from '../../components/eachOrder/eachOrder';
import { StyledAllComp, StyledMain } from './orders.styles';
import PageHeader from '../../components/pageHeader/PageHeader';

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
			<PageHeader text={'My Orders'} />
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
