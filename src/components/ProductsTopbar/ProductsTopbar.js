import React, { useState } from 'react';
import productsApi from '../../api/products';
import searchIcon from "../Assets/magnifying-glass.png";
import './ProductsTopbar.css'

const SearchBar = ({ setProductListData }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [products, setProducts] = useState([]);

	// Load products when component mounts
	React.useEffect(() => {
		productsApi.getAllProducts()
			.then((data) => {
				setProducts(Array.isArray(data) ? data : []);
			})
			.catch((error) => {
				console.error('Error fetching products for search:', error);
				setProducts([]);
			});
	}, []);

	const handleSearch = (event) => {
		const { value } = event.target;
		setSearchTerm(value);

		// Safety check: ensure products is an array
		if (!Array.isArray(products)) {
			console.warn('Products is not an array:', products);
			return;
		}

		const foundProducts = products.filter((product) =>
			product.design_code && product.design_code.toLowerCase().includes(value.toLowerCase())
		);

		setProductListData(foundProducts);
	};

	return (
		<div className='search-bar'>
			<img src = {searchIcon} 
			 	 alt='search-icon'
				 className='search-icon' />
			<input
				className='search-input'
				type="text"
				placeholder="Search by Design Code..."
				value={searchTerm}
				onChange={handleSearch}
				style={{ margin: '10px', padding: '8px' }}
			/>
			{/* {result && (
				<div>
					<h4>Product Details:</h4>
					<p>Name: {result.name}</p>
					<p>Design Code: {result.design_code}</p>
					<p>Category: {result.category}</p>
				</div>
			)}
			{!result && searchTerm && <p>No product found with that design code.</p>} */}
		</div>
	);
};

export default SearchBar;
