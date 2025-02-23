import GraphCard from '../graphCard/GraphCard';
import {
	StyledGraphCard,
	StyledGraphsContainer
} from './salesPageGraph.styles';

const SalesPageGraph = ({ text, products, type, total }) => {
	return (
		<StyledGraphCard>
			<h3>{text}</h3>
			<StyledGraphsContainer>
				{products.map(item => (
					<GraphCard key={item.name} product={item} type={type} total={total} />
				))}
			</StyledGraphsContainer>
		</StyledGraphCard>
	);
};

export default SalesPageGraph;
