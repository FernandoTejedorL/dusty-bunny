import Carousel from '../../components/carousel/Carousel';
import CommentCard from '../../components/commentCard/CommentCard';
import { OPINIONS } from '../../constants/opinions-info';
import {
	StyledBanner,
	StyledBrand,
	StyledCarouselContainer,
	StyledHookEnd,
	StyledHookStart,
	StyledMain,
	StyledOpinions,
	StyledOpinionsContainer
} from './home.styles';

const Home = () => {
	return (
		<StyledMain>
			<StyledBanner>
				<h3>The original fluff trading site</h3>
				<StyledBrand>Dusty Bunny</StyledBrand>
				<h3>We never have enough dust bunnies</h3>
			</StyledBanner>
			<StyledCarouselContainer>
				<StyledHookStart>Have a look at out little wonders!</StyledHookStart>
				<Carousel />
			</StyledCarouselContainer>
			<StyledOpinions>
				<StyledHookEnd>Our community speaks!</StyledHookEnd>
				<StyledOpinionsContainer>
					{OPINIONS.map(item => (
						<CommentCard
							key={item.id}
							name={item.name}
							comment={item.comment}
							type={item.type}
							image={item.image}
						/>
					))}
				</StyledOpinionsContainer>
			</StyledOpinions>
		</StyledMain>
	);
};

export default Home;
