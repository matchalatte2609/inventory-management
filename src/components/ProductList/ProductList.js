import ProductItem from '../ProductItem/ProductItem.js';
import './ProductList.css';

const ProductList = ({ products }) => {
	return (
		<div className="product-page-container">
			<div className="product-list-header">
				<div className="filters">
					<button className="button filter-button">All Products ▼</button>
					<button className="button filter-button">Filter</button>
					<button className="button filter-button">Sort</button>
					<button className="button filter-button">Export</button>
				</div>
				<div className="product-headers">
					<span>PRODUCT</span>
					<span>PRICE</span>
					<span>SALE</span>
					<span>REVENUE</span>
					<span>STATUS</span>
					<span>ACTIONS</span>
				</div>
			</div>
			<div className="product-list">
				{products.map((product) => (
					<ProductItem key={product.id} {...product} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
