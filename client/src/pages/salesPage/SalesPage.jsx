import PageHeader from '../../components/pageHeader/PageHeader';
import SalesPageGraph from '../../components/salesPageGraph/SalesPageGraph';
import { useProducts } from '../../hooks/useProducts';
import { StyledGraphsContainer, StyledMain } from './salesPage.styles';

const SalesPage = () => {
	const { products } = useProducts();

	const orderedSold = products
		.filter(item => item.ordered !== 0)
		.sort((a, b) => b.ordered - a.ordered);

	const totalSold = orderedSold.reduce((acc, item) => acc + item.ordered, 0);

	const orderedFav = products
		.filter(item => item.fav !== 0)
		.sort((a, b) => b.fav - a.fav);
	const totalFav = orderedFav.reduce((acc, item) => acc + item.fav, 0);

	return (
		<StyledMain>
			<PageHeader text={'My Sales'} />
			<StyledGraphsContainer>
				<SalesPageGraph
					text={'Top Sales'}
					products={orderedSold}
					type={'ordered'}
					total={totalSold}
				/>
				<SalesPageGraph
					text={'Top Fav'}
					products={orderedFav}
					type={'fav'}
					total={totalFav}
				/>
			</StyledGraphsContainer>
		</StyledMain>
	);
};

export default SalesPage;
