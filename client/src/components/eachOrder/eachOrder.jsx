import OrderContent from '../orderContent/OrderContent';

const EachOrder = ({ item }) => {
	console.log(item);
	return (
		<div>
			<span>Order Number</span>
			<span>{item._id}</span>
			<span>Total Price</span>
			<span>{item.totalPrice}€</span>
			{item.orderContent.map(item => (
				<OrderContent key={item._id} content={item} />
			))}
		</div>
	);
};

export default EachOrder;
