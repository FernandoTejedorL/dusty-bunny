import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ButtonPrimary from '../../components/buttonPrimary/ButtonPrimary';
import EachOrder from '../../components/eachOrder/eachOrder';
import PageHeader from '../../components/pageHeader/PageHeader';
import { findUserOrders } from '../../utils/api';

import {
	StyledAllComp,
	StyledEmptyImg,
	StyledEmptyOrders,
	StyledEmptySpan,
	StyledMain
} from './orders.styles';

const Orders = () => {
	const { id } = useParams();
	const [orders, setOrders] = useState([]);
	const userId = id;

	useEffect(() => {
		ordersGot(userId, setOrders);
	}, [userId]);

	const navigate = useNavigate();
	const ordersToMap = orders;

	return (
		<StyledMain>
			<PageHeader text={'My Orders'} />
			{orders.length === 0 && (
				<StyledEmptyOrders>
					<StyledEmptyImg src='/assets/images/common/empty.jpg' alt='empty' />
					<StyledEmptySpan>You have nothing ordered yet...</StyledEmptySpan>
					<ButtonPrimary text={'Go to shop'} action={() => navigate('/shop')} />
				</StyledEmptyOrders>
			)}
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
