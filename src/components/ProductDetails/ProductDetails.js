import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import productsApi from '../../api/products.js';
import materialsApi from '../../api/materials.js';
import shapesApi from '../../api/product_shapes.js';
import pricingApi from '../../api/product_pricing.js';
import './ProductDetails.css';

const ProductDetails = ({
	showProductDetailModal,
	setShowProductDetailModal,
}) => {
	const [productInfo, setProductInfo] = useState({});
	const [productMaterials, setProductMaterials] = useState({});
	const [productPricing, setProductPricing] = useState({});
	const [productShapes, setProductShapes] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		let isMounted = true;
		setLoading(true);

		const fetchData = async () => {
			try {
				if (showProductDetailModal.show && showProductDetailModal.id) {
					const productData = await productsApi.getProductById(
						showProductDetailModal.id
					);
					const materialData = await materialsApi.getProductMaterialsById(
						showProductDetailModal.id
					);
					const shapesData = await shapesApi.getProductShapesById(
						showProductDetailModal.id
					);
					const pricingData = await pricingApi.getProductPricesById(
						showProductDetailModal.id
					);
					if (isMounted) {
						setProductInfo(productData);
						setProductMaterials(materialData);
						setProductPricing(pricingData);
						setProductShapes(shapesData);
						console.log(productPricing);
					}
				}
			} catch (err) {
				if (isMounted) {
					setError('Failed to fetch data. Please try again.');
					console.error(err);
				}
			} finally {
				if (isMounted) {
					setLoading(false);
				}
			}
		};

		fetchData();

		return () => {
			isMounted = false;
		};
	}, [showProductDetailModal]);

	// Helper function to get status badge styling
	const getStatusBadgeClass = (status) => {
		const normalizedStatus = status?.toString().toLowerCase().trim();
		switch (normalizedStatus) {
			case 'active':
				return 'text-success';
			case 'inactive':
				return 'text-danger';
			default:
				return 'text-muted';
		}
	};

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Modal
				show={showProductDetailModal.show}
				onHide={() => {
					setShowProductDetailModal({ id: '', show: false });
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>
						{productInfo.design_code}
						{productShapes.new_ver === " 1 " && (
							<span className="text-danger ms-2" style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>
								(New version)
							</span>
						)}
						{productInfo.status && (
							<span 
								className={`ms-2 ${getStatusBadgeClass(productInfo.status)}`} 
								style={{ fontSize: '0.8rem', fontWeight: 'bold' }}
							>
								[{productInfo.status}]
							</span>
						)}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h5>PRICING: </h5>
						{Object.keys(productPricing)
							.filter((key) => key !== 'ProductId')
							.map(key => {
								// Ensure the value is a number.
								const priceValue = Number(productPricing[key]);
							
								// Check if the value is a number and not NaN.
								if (!isNaN(priceValue)) {
								return (
									<p key={key}>{key}: {priceValue.toLocaleString('en-US', {
									style: 'decimal',
									minimumFractionDigits: 0
									})} VND</p>
								);
								} else {
								// Log an error or handle it as needed
								console.error(`Invalid price format for key ${key}: ${productPricing[key]}`);
								return <p key={key}>{key}: {productPricing[key]}</p>; // Show original value or handle differently
								}
							})
							}

					<h5>DETAILS: </h5>
					<p>Category: {productInfo.category}</p>
					<p>Diameter: {productInfo.diameter || 'N/A'}</p>
					<p>Ring Size: {productInfo.ring_size || 'N/A'}</p>
					<p>Base Thickness: {productInfo.base_thickness || 'N/A'} mm</p>
					<p>Base Width: {productInfo.base_width || 'N/A'} mm</p>
					<p>Prong's Height: {productInfo.prongs_height || 'N/A'} mm</p>
					<p>Status: 
						<span className={`ms-1 ${getStatusBadgeClass(productInfo.status)}`} style={{ fontWeight: 'bold' }}>
							{productInfo.status || 'N/A'}
						</span>
					</p>

					<h5>MATERIALS: </h5>
					<p>Main Gemstone Shape: {productMaterials.main_gemstone_shape}</p>
					<p>Main Gemstone Size: {productMaterials.main_gemstone_size}</p>
					<p>Gold 18K Weight: {productMaterials.gold_18k_weight} g</p>
					<p>Gold 14K Weight: {productMaterials.gold_14k_weight} g</p>
					<p>Plat 900 Weight: {productMaterials.plat_900_weight || 'N/A'} g</p>
					<p>Smooth Surface / Specially Patterned Surface: {productMaterials.surface_plain_pattern}</p>
					<p>Catalogue Color: {productMaterials.catalogue_color}</p>
					{/* <p>
						Accented Stone Weight: {productMaterials.diamond_weight || 'N/A'}
					</p>
					<p>CZ Weight: {productMaterials.cz_weight || 'N/A'}</p> */}

					<h5>ACCENTED STONES:</h5>
					{Object.keys(productShapes)
					.filter(key => key !== 'ProductId')
					.map(key => (
						<div key={key}>
						<p className={key.includes('Shape') ? 'red-text' : ''}>
							{`${key}: ${productShapes[key]}`}
						</p>
						</div>
					))
					}

				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={() => {
							setShowProductDetailModal({ id: '', show: false });
						}}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
export default ProductDetails;