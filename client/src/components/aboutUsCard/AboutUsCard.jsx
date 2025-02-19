const AboutUsCard = ({ item }) => {
	return (
		<div>
			<img src={item.image} alt='image' />
			<span>{item.role}</span>
			<span>{item.catchphrase}</span>
			<div>
				<span>{item.name}</span>
				<span>{item.subrole}</span>
				<p>{item.career}</p>
			</div>
		</div>
	);
};

export default AboutUsCard;
