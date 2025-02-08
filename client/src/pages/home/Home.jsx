import Carousel from '../../components/carousel/Carousel';
import CommentCard from '../../components/commentCard/CommentCard';
import { OPINIONS } from '../../constants/opinions-info';

const Home = () => {
	return (
		<>
			<div>
				<h3>The original fluff trading site</h3>
				<h2>Dusty Bunny</h2>
				<h3>We never have enough dust bunnies</h3>
			</div>
			<div>
				<h4>Have a look at out little wonders...</h4>
				<Carousel />
			</div>
			<div>
				<h4>Our community speaks...</h4>
				{OPINIONS.map(item => (
					<CommentCard
						key={item.id}
						name={item.name}
						comment={item.comment}
						type={item.type}
						image={item.image}
					/>
				))}
			</div>
		</>
	);
};

export default Home;
