import { useState } from 'react';
import FilterShop from '../../components/filterShop/FilterShop';
import ShopCard from '../../components/shopCard/ShopCard';
import { FILTERS } from '../../constants/filters';
import { useCart } from '../../hooks/useCart';
import { useProducts } from '../../hooks/useProducts';
import {
	StyledAllComp,
	StyledAllFilters,
	StyledCart,
	StyledCartButton,
	StyledCartContainer,
	StyledCartCounter,
	StyledChevron,
	StyledEmptyImage,
	StyledEmptyImg,
	StyledEmptyShop,
	StyledFilters,
	StyledFiltersTile,
	StyledHeader,
	StyledMain,
	StyledShop
} from './shop.styles';
import { useAuth } from '../../hooks/useAuth';
import CartCard from '../../components/cartCard/CartCard';

const Shop = () => {
	const [filtersOpen, SetFiltersOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const { products } = useProducts();
	const { cart } = useCart();
	const { user } = useAuth();

	const [filters, setFilters] = useState({
		category: [],
		size: [],
		diet: [],
		price: 37
	});

	const filteredProducts = filterProducts(products, filters);

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
						<div key={item.id}>
							<span>{item.name}</span>
							{item.values.map(value => (
								<FilterShop
									key={value}
									value={value}
									item={item}
									action={event => manageFilters(event, filters, setFilters)}
								/>
							))}
						</div>
					))}
					<div>
						<input
							onChange={event =>
								setFilters({ ...filters, price: event.target.value })
							}
							type='range'
							name='price'
							id='price'
							min={0}
							max={37}
							defaultValue={37}
						/>
						<div>
							<span>Precio máximo</span>
							<span>{filters.price}€</span>
						</div>
					</div>
				</StyledFilters>
			</StyledAllFilters>
			<StyledAllComp>
				{user && (
					<StyledCart>
						<StyledFiltersTile onClick={() => setCartOpen(!cartOpen)}>
							<StyledCartCounter>{cart.length}</StyledCartCounter>
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
							{cart.length !== 0 && (
								<StyledCartButton>Go to cart</StyledCartButton>
							)}
							{cart.map(item => (
								<CartCard
									key={item._id}
									id={item._id}
									image={item.image}
									name={item.name}
								/>
							))}
						</StyledCartContainer>
					</StyledCart>
				)}
				<StyledShop $user={user}>
					{filteredProducts.length === 0 && (
						<StyledEmptyShop>
							<StyledEmptyImage
								src='/assets/images/common/notfound.jpg'
								alt='not-found'
							/>
							<p>
								Oh no! It looks like the perfect fluff is playing hide and seek.
								Try adjusting your filters...
							</p>
						</StyledEmptyShop>
					)}
					{filteredProducts.map(item => (
						<ShopCard key={item._id} item={item} />
					))}
				</StyledShop>
			</StyledAllComp>
		</StyledMain>
	);
};

const filterProducts = (products, filters) => {
	// if no filtros return products
	let newInfo = products;
	if (filters.category.length > 0) {
		newInfo = newInfo.filter(item =>
			filters.category.some(selected => item.category.includes(selected))
		);
	}
	if (filters.size.length > 0) {
		newInfo = newInfo.filter(item =>
			filters.size.some(selected => item.size.includes(selected))
		);
	}
	if (filters.diet.length > 0) {
		newInfo = newInfo.filter(item =>
			filters.diet.some(selected => item.diet.includes(selected))
		);
	}

	newInfo = newInfo.filter(item => item.price <= filters.price);

	return newInfo;
};

const manageFilters = (event, filters, setFilters) => {
	const newFilters = { ...filters };
	const { name, checked, value } = event.target;
	setFilters({
		...newFilters,
		[name]: checked
			? [...filters[name], value]
			: [...filters[name].filter(item => item !== value)]
	});
};

export default Shop;
