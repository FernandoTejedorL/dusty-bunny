import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterShop from '../../components/filterShop/FilterShop';
import PageHeader from '../../components/pageHeader/PageHeader';
import ShopCard from '../../components/shopCard/ShopCard';
import SideCart from '../../components/sideCart/SideCart';
import { FILTERS } from '../../constants/filters';
import { useAuth } from '../../hooks/useAuth';
import { useProducts } from '../../hooks/useProducts';
import {
	StyledAllComp,
	StyledAllFilters,
	StyledCheckFilters,
	StyledChevron,
	StyledEmptyImage,
	StyledEmptyShop,
	StyledFilterEachContainer,
	StyledFilters,
	StyledFiltersTile,
	StyledMain,
	StyledRangeInput,
	StyledRangeInputBar,
	StyledRangeText,
	StyledShop
} from './shop.styles';

const Shop = () => {
	const [filtersOpen, SetFiltersOpen] = useState(false);
	const { products } = useProducts();
	const { user } = useAuth();
	const navigate = useNavigate();

	const [filters, setFilters] = useState({
		category: [],
		size: [],
		diet: [],
		price: 37
	});

	const filteredProducts = filterProducts(products, filters);

	return (
		<StyledMain>
			<PageHeader text={'Shop'} />
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
					<StyledCheckFilters>
						{FILTERS.map(item => (
							<StyledFilterEachContainer key={item.id}>
								<span>{item.name}</span>
								<div>
									{item.values.map(value => (
										<FilterShop
											key={value}
											value={value}
											item={item}
											action={event =>
												manageFilters(event, filters, setFilters)
											}
										/>
									))}
								</div>
							</StyledFilterEachContainer>
						))}
					</StyledCheckFilters>
					<StyledRangeInput>
						<StyledRangeInputBar
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
						<StyledRangeText>
							<span>Max price</span>
							<span>{filters.price}€</span>
						</StyledRangeText>
					</StyledRangeInput>
				</StyledFilters>
			</StyledAllFilters>
			<StyledAllComp $userVendor={user?.vendor}>
				{user && !user.vendor && (
					<SideCart
						buttonText={'Go to Cart'}
						action={() => navigate('/cart')}
					/>
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
						<ShopCard
							key={item._id}
							item={item}
							text={'More Info'}
							action={() => navigate(`/product/${item._id}`)}
						/>
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
