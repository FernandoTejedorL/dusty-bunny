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
	const { cart, setCart } = useCart();
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [selectedFilters, setSelectedFilters] = useState({
		category: [],
		size: [],
		diet: []
	});
	console.log(selectedFilters.category);
	useEffect(() => {
		setFilteredProducts(products);
	}, [products]);

	useEffect(() => {
		setSelectedFilters({
			category: [],
			size: [],
			diet: []
		});
	}, []);

	useEffect(() => {
		productsToShow(products, selectedFilters, setFilteredProducts);
	}, [products, selectedFilters]);

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
						<FilterGroup
							filtersSet={filtersSet}
							selectedFilters={selectedFilters}
							setSelectedFilters={setSelectedFilters}
							filteredProducts={filteredProducts}
							key={item.id}
							item={item}
						/>
					))}
					<div>
						<input
							onMouseUp={event => {
								RangeValue(setMaxPrice);
								filterByPrice(products, event, setFilteredProducts);
							}}
							type='range'
							name='price'
							id='price'
							min={0}
							max={37}
							defaultValue={37}
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
						{cart.length !== 0 && (
							<button onClick={() => setCart([])}>Vaciar</button>
						)}
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

const filtersSet = (value, type, setSelectedFilters) => {
	setSelectedFilters(prevFilters => {
		const updatedTypeFilters = prevFilters[type].includes(value)
			? prevFilters[type].filter(item => item !== value)
			: [...prevFilters[type], value];

		return {
			...prevFilters,
			[type]: updatedTypeFilters
		};
	});
};

const productsToShow = (
	filteredProducts,
	selectedFilters,
	setFilteredProducts
) => {
	let newInfo = filteredProducts;
	if (selectedFilters.category.length > 0) {
		newInfo = newInfo.filter(item =>
			item.category.includes(selectedFilters.category)
		);
	}
	if (selectedFilters.category.length > 0) {
		newInfo = newInfo.filter(item => item.size.includes(selectedFilters.size));
	}
	if (selectedFilters.category.length > 0) {
		newInfo = newInfo.filter(item => item.diet.includes(selectedFilters.diet));
	}
	setFilteredProducts(newInfo);
};

const filterByPrice = (products, event, setFilteredProducts) => {
	const newProducts = products.filter(item => item.price < event.target.value);
	setFilteredProducts(newProducts);
};

export default Shop;
