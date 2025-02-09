import { useState } from 'react';
import FilterGroup from '../../components/filterGroup/FilterGroup';
import { FILTERS } from '../../constants/filters';
import {
	StiledAllFilters,
	StyledAllComp,
	StyledChevron,
	StyledFiltersTile,
	StyledHeader,
	StyledMain
} from './shop.styles';
import { useAuth } from '../../hooks/useAuth';
import ShopCard from '../../components/shopCard/ShopCard';
import { useCart } from '../../hooks/useCart';
import ProductCard from '../../components/productCard/ProductCard';

const Shop = () => {
	const [maxPrice, setMaxPrice] = useState(100);
	const [filtersOpen, SetFiltersOpen] = useState(false);
	console.log(filtersOpen);
	const { products } = useAuth();
	const { cart } = useCart();
	console.log(cart);
	return (
		<StyledMain>
			<StyledHeader>Shop</StyledHeader>
			<StyledAllComp>
				<StiledAllFilters>
					<StyledFiltersTile onClick={() => SetFiltersOpen(!filtersOpen)}>
						<span>Filters</span>
						<StyledChevron
							$filtersOpen={filtersOpen}
							src='/assets/images/common/chevron-dwn.png'
							alt=''
						/>
					</StyledFiltersTile>

					<div>
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
							/>
							<div>
								<span>Precio máximo</span>
								<span>{maxPrice}€</span>
							</div>
						</div>
					</div>
				</StiledAllFilters>
				<div>
					{products.map(item => (
						<ShopCard key={item._id} item={item} />
					))}
				</div>
				<div>
					<span>Cart</span>
					<button>Go to cart</button>
					{cart.map(item => (
						<ProductCard
							key={item.id}
							image={item.image}
							name={item.name}
							price={item.price}
						/>
					))}
				</div>
			</StyledAllComp>
		</StyledMain>
	);
};

const RangeValue = setMaxPrice => {
	const value = event.target.value;
	setMaxPrice(value);
};

export default Shop;
