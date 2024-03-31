import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import ProductItem from '../../components/ProductItem/ProductItem.js';
import productsApi from '../../api/products';
import Topbar from '../../components/Topbar/Topbar.js';
import './Products.css';

const Products = () => {
	const [productListData, setProductListData] = useState([]);

	useEffect(() => {
		const data = productsApi.getAllProducts();
		setProductListData(data);
	}, []);

	const [sortOption, setSortOption] = useState('');

	const handleSelectSortOptions = (eventKey, event) => {
		let sortedProducts;
		switch (eventKey) {
			case 'price-asc':
				setSortOption('Price (Low to High)');
				sortedProducts = [...productListData].sort((a, b) => a.price - b.price);
				break;
			case 'price-desc':
				sortedProducts = [...productListData].sort((a, b) => b.price - a.price);
				setSortOption('Price (High to Low)');
				break;
			case 'name-asc':
				setSortOption('Name (A to Z)');
				sortedProducts = [...productListData].sort((a, b) =>
					a.name.localeCompare(b.name)
				);
				break;
			// Add more sorting cases as needed
			default:
				sortedProducts = [...productListData]; // Maybe fetch again or sort in another way
		}
		setProductListData(sortedProducts);
	};
	return (
		<div className="product-page-container">
			<Topbar />
			<div className="product-list-header">
				<div className="filters">
					<button className="filter-button">All Products ▼</button>
					<button className="filter-button">Filter</button>
					<Dropdown className="" onSelect={handleSelectSortOptions}>
						<Dropdown.Toggle variant="secondary" id="dropdown-basic">
							{sortOption === '' ? 'Sort Products' : sortOption}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item eventKey="price-asc">
								Price (Low to High)
							</Dropdown.Item>
							<Dropdown.Item eventKey="price-desc">
								Price (High to Low)
							</Dropdown.Item>
							<Dropdown.Item eventKey="name-asc">Name (A to Z)</Dropdown.Item>
							{/* Add more Dropdown.Item as needed */}
						</Dropdown.Menu>
					</Dropdown>
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
				{productListData.map((product) => (
					<ProductItem key={product.id} {...product} />
				))}
			</div>
		</div>
	);
};

export default Products;
