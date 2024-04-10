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
				<div className="product-header">
					<div>Product Name</div>
					<div>Category</div>
					<div>Product ID</div>
					<div>Stock Level</div>
					<div>Status</div>
					<div>Actions</div>
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
