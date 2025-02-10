import { useEffect, useState } from 'react';
import FilterGroup from '../../components/filterGroup/FilterGroup';
import { FILTERS } from '../../constants/filters';
import {
	StyledAllFilters,
	StyledAllComp,
	StyledChevron,
	StyledFiltersTile,
	StyledHeader,
	StyledMain,
	StyledFilters,
	StyledShop,
	StyledCart,
	StyledCartContainer,
	StyledEmptyImg
} from './shop.styles';
import ShopCard from '../../components/shopCard/ShopCard';
import { useCart } from '../../hooks/useCart';
import ProductCard from '../../components/productCard/ProductCard';
import { useProducts } from '../../hooks/useProducts';

const Shop = () => {
	const [maxPrice, setMaxPrice] = useState(100);
	const [filtersOpen, SetFiltersOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const { products } = useProducts();
	const { cart } = useCart();
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [selectedFilters, setSelectedFilters] = useState([]);

	useEffect(() => {
		setFilteredProducts(products);
	}, [products]);

	console.log(cart);
	return (
		<StyledMain>
			<StyledHeader>Shop</StyledHeader>
			<StyledAllFilters>
				<StyledFiltersTile onClick={() => SetFiltersOpen(!filtersOpen)}>
					<span>Filters</span>
					<StyledChevron
						$filtersOpen={filtersOpen}
						src='/assets/images/common/chevron-dwn.png'
						alt=''
					/>
				</StyledFiltersTile>

				<StyledFilters $filtersOpen={filtersOpen}>
					{FILTERS.map(item => (
						<FilterGroup key={item.id} filter={item} />
					))}
					<div>
						<input
							onMouseUp={() => RangeValue(setMaxPrice)}
							type='range'
							name='price'
							id='price'
							min={0}
							max={100}
							defaultValue={100}
						/>
						<div>
							<span>Precio máximo</span>
							<span>{maxPrice}€</span>
						</div>
					</div>
				</StyledFilters>
			</StyledAllFilters>
			<StyledAllComp>
				<StyledCart>
					<StyledFiltersTile onClick={() => setCartOpen(!cartOpen)}>
						<span>Cart</span>
						<StyledChevron
							$filtersOpen={cartOpen}
							src='/assets/images/common/chevron-dwn.png'
							alt=''
						/>
					</StyledFiltersTile>
					<StyledCartContainer $cartOpen={cartOpen}>
						{cart.length === 0 && (
							<StyledEmptyImg src='/assets/images/common/empty.jpg' alt='' />
						)}
						{cart.length !== 0 && <button>Go to cart</button>}
						{cart.map(item => (
							<ProductCard
								key={item._id}
								image={item.image}
								name={item.name}
								price={item.price}
							/>
						))}
					</StyledCartContainer>
				</StyledCart>
				<StyledShop>
					{filteredProducts.map(item => (
						<ShopCard key={item._id} item={item} />
					))}
				</StyledShop>
			</StyledAllComp>
		</StyledMain>
	);
};

const RangeValue = setMaxPrice => {
	const value = event.target.value;
	setMaxPrice(value);
};

const applyFilters = (filters, filteredProducts, setFilteredProducts) => {
	let fluffs = filteredProducts;

	if (filters.length > 0) {
		fluffs = fluffs.filter(item => filters.includes(item.category));
	}
	setFilteredProducts(fluffs);
};

const filterGames = filter => {
	const newFilters = selectedFilters.includes(filter)
		? selectedFilters.filter(item => item !== filter) // Quitar filtro del array de filtro por platafora
		: [...selectedFilters, filter]; // Agregar filtro al array de filtro por plataforma

	setSelectedFilters(newFilters);
	applyFilters(newFilters, searchText);
};

export default Shop;
