const ShopCard = ({ item }) => {
	return (
		<div>
			<img src={item.image} alt='fluff-pic' />
			<div>
				<span>{item.name}</span>
				<span>{item.price}</span>
				<button>Add to Cart</button>
				<button>More info</button>
			</div>
		</div>
	);
};

export default ShopCard;
