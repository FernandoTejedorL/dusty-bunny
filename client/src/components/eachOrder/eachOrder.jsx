import { useState } from 'react';
import OrderContent from '../orderContent/OrderContent';
import {
	StyledEachInfo,
	StyledEachOrder,
	StyledEachTitle,
	StyledOrderContentContainer
} from './eachOrder.styles';

const EachOrder = ({ item }) => {
	const [showContent, setShowContent] = useState(false);
	return (
		<StyledEachOrder
			onClick={() => setShowContent(!showContent)}
			$showContent={showContent}
		>
			<StyledEachInfo>
				<StyledEachTitle>Order:</StyledEachTitle>
				<span>{item._id}</span>
			</StyledEachInfo>
			<StyledEachInfo>
				<StyledEachTitle>Total Price:</StyledEachTitle>
				<span>{item.totalPrice}€</span>
			</StyledEachInfo>
			{showContent && (
				<StyledOrderContentContainer>
					{item.orderContent.map(item => (
						<OrderContent key={item._id} content={item} />
					))}
				</StyledOrderContentContainer>
			)}
		</StyledEachOrder>
	);
};

export default EachOrder;
