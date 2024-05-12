import { useEffect, useState } from 'react';
import { Dropdown, Button, Modal, Form } from 'react-bootstrap';
import ProductItem from '../../components/ProductItem/ProductItem.js';
import productsApi from '../../api/products';
import Topbar from '../../components/ProductsTopbar/ProductsTopbar.js';
import './Products.css';
import ProductDetails from '../../components/ProductDetails/ProductDetails.js';

const Products = () => {
	const [productListData, setProductListData] = useState([]);

	useEffect(() => {
		productsApi.getAllProducts().then((data) => {
			setProductListData(data);
		});
	}, []);

	const [sortOption, setSortOption] = useState('');
	const [showProductDetailModal, setShowProductDetailModal] = useState({
		id: '',
		show: false,
	});
	const [showFilterModal, setShowFilterModal] = useState(false);
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');

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
			default:
				sortedProducts = [...productListData];
		}
		setProductListData(sortedProducts);
	};

	const applyPriceFilter = () => {
		const filteredProducts = productListData.filter((product) => {
			const price = parseFloat(product.price); // Assuming product.price is a string that represents a number
			return (
				(!minPrice || price >= parseFloat(minPrice)) &&
				(!maxPrice || price <= parseFloat(maxPrice))
			);
		});
		setProductListData(filteredProducts);
	};
	return (
		<div className="product-page-container">
			<Topbar setProductListData={setProductListData} />

			<div className="product-list-header">
				<div className="filters">
					{/* <button className="filter-button">All Products ▼</button> */}
					{/* Sort Button */}
					{/* <Dropdown className="" onSelect={handleSelectSortOptions}>
						<Dropdown.Toggle variant="secondary">
							{sortOption === '' ? 'Sort Products' : sortOption}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item eventKey="price-asc">
								Price (Low to High)
							</Dropdown.Item>
							<Dropdown.Item eventKey="price-desc">
								Price (High to Low)
							</Dropdown.Item>
							<Dropdown.Item eventKey="name-asc">Name (A to Z)</Dropdown.Item> */}
							{/* Add more Dropdown.Item as needed */}
						{/* </Dropdown.Menu>
					</Dropdown> */}
					{/* Filter Button */}
					{/* <Button
						variant="secondary"
						onClick={() => {
							setShowFilterModal(true);
						}}
					>
						Filter
					</Button> */}
					{/* Filter Modal */}
					<Modal
						show={showFilterModal}
						onHide={() => setShowFilterModal(false)}
					>
						<Modal.Header closeButton>
							<Modal.Title>Filter Products</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form>
								<Form.Group controlId="formMinPrice">
									<Form.Label>Minimum Price</Form.Label>
									<Form.Control
										type="number"
										placeholder="Enter minimum price"
										value={minPrice}
										onChange={(e) => setMinPrice(e.target.value)}
									/>
								</Form.Group>
								<Form.Group controlId="formMaxPrice">
									<Form.Label>Maximum Price</Form.Label>
									<Form.Control
										type="number"
										placeholder="Enter maximum price"
										value={maxPrice}
										onChange={(e) => setMaxPrice(e.target.value)}
									/>
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="warning">Reset Filters</Button>

							<Button
								variant="primary"
								onClick={() => {
									applyPriceFilter();
									setShowFilterModal(false);
								}}
							>
								Apply Filters
							</Button>

							<Button
								variant="danger"
								onClick={() => setShowFilterModal(false)}
							>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
					{/* <Button variant="secondary">Export</Button> */}
				</div>
				<ProductDetails
					{...{ showProductDetailModal, setShowProductDetailModal }}
				/>
				{/* <div className="product-headers">
					<span>PRODUCT</span>
					<span>PRICE</span>
					<span>SALE</span>
					<span>REVENUE</span>
					<span>STATUS</span>
					<span>ACTIONS</span>
				</div> */}
			</div>
			<div className="product-list">
				{productListData.map((product) => (
					<div
						onClick={() => {
							setShowProductDetailModal({ id: product.ProductId, show: true });
						}}
					>
						<ProductItem key={product.id} {...product} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
