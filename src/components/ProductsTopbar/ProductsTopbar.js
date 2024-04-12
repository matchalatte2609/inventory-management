import React, { useState } from 'react';
import productsApi from '../../api/products';
let products;
productsApi.getAllProducts().then((data) => {
	products = data;
});
const SearchBar = ({ setProductListData }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (event) => {
		const { value } = event.target;
		setSearchTerm(value);
		const foundProducts = products.filter((product) =>
			product.design_code.toLowerCase().includes(value.toLowerCase())
		);

		setProductListData(foundProducts);
	};

	return (
		<div>
			<input
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
