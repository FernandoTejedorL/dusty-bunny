import PageHeader from '../../components/pageHeader/PageHeader';
import { useProducts } from '../../hooks/useProducts';

const SalesPage = () => {
	const { products } = useProducts();

	const soldProducts = products.filter(item => item.ordered !== 0);
	const totalSold = soldProducts.reduce((acc, item) => acc + item.ordered, 0);
	const favProducts = products.filter(item => item.fav !== 0);
	const totalFav = favProducts.reduce((acc, item) => acc + item.fav, 0);

	console.log(soldProducts);
	console.log(totalSold);
	console.log(favProducts);
	console.log(totalFav);

	return (
		<main>
			<PageHeader text={'My Sales'} />
		</main>
	);
};

export default SalesPage;
