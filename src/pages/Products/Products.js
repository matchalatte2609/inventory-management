import ProductItem from '../../components/ProductItem/ProductItem.js';
import { useEffect, useState } from 'react';
import productsApi from '../../api/products';
import Topbar from '../../components/Topbar/Topbar.js';
import './Products.css';

const Products = () => {
	const [productsListData, setProductListData] = useState([]);
	useEffect(() => {
		const data = productsApi.getAllProducts();
		setProductListData(data);
	});
	return (
		<div className="product-page-container">
			<Topbar />
			<div className="product-list-header">
				<div className="filters">
					<button className="filter-button">All Products ▼</button>
					<button className="filter-button">Filter</button>
					<button className="filter-button">Sort</button>
					<button className="filter-button">Export</button>
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
				{productsListData.map((product) => (
					<ProductItem key={product.id} {...product} />
				))}
			</div>
		</div>
	);
};

export default Products;
