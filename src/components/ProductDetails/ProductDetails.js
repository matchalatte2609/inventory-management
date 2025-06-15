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
						setProductInfo(productData || {});
						setProductMaterials(materialData || {});
						setProductPricing(pricingData || {});
						setProductShapes(shapesData || {});
						
						// Debug logging for new_ver
						console.log('Shapes data:', shapesData);
						console.log('new_ver value:', shapesData?.new_ver);
						console.log('new_ver type:', typeof shapesData?.new_ver);
						console.log('new_ver JSON:', JSON.stringify(shapesData?.new_ver));
						
						console.log('Pricing data:', pricingData);
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

	// Helper function to check if product is new version
	const isNewVersion = (newVerValue) => {
		if (!newVerValue) return false;
		
		// Convert to string and trim whitespace
		const strValue = String(newVerValue).trim();
		
		// Check for various representations of "1"
		return strValue === "1" || 
			   strValue === " 1 " || 
			   strValue === "1.0" ||
			   parseInt(strValue) === 1;
	};

	// Helper function to get status badge styling
	const getStatusBadgeClass = (status) => {
		if (!status) return 'text-muted';
		const normalizedStatus = status.toString().toLowerCase().trim();
		switch (normalizedStatus) {
			case 'active':
				return 'text-success';
			case 'inactive':
				return 'text-danger';
			default:
				return 'text-muted';
		}
	};

	// Helper function to safely get nested properties
	const safeGet = (obj, path, defaultValue = null) => {
		try {
			return obj && obj[path] !== undefined ? obj[path] : defaultValue;
		} catch {
			return defaultValue;
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
						{safeGet(productInfo, 'design_code', '')}
						{isNewVersion(safeGet(productShapes, 'new_ver')) && (
							<span className="text-danger ms-2" style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>
								(New version)
							</span>
						)}
						{safeGet(productInfo, 'status') && safeGet(productInfo, 'status') !== 'N/A' && (
							<span 
								className={`ms-2 ${getStatusBadgeClass(safeGet(productInfo, 'status'))}`} 
								style={{ fontSize: '0.8rem', fontWeight: 'bold' }}
							>
								[{safeGet(productInfo, 'status', '').toString().trim()}]
							</span>
						)}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h5>PRICING: </h5>
						{productPricing && Object.keys(productPricing)
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
					<p>Category: {safeGet(productInfo, 'category', 'N/A')}</p>
					<p>Diameter: {safeGet(productInfo, 'diameter') || 'N/A'}</p>
					<p>Ring Size: {safeGet(productInfo, 'ring_size') || 'N/A'}</p>
					<p>Base Thickness: {safeGet(productInfo, 'base_thickness') || 'N/A'} mm</p>
					<p>Base Width: {safeGet(productInfo, 'base_width') || 'N/A'} mm</p>
					<p>Prong's Height: {safeGet(productInfo, 'prongs_height') || 'N/A'} mm</p>
					<p>Status: 
						<span className={`ms-1 ${getStatusBadgeClass(safeGet(productInfo, 'status'))}`} style={{ fontWeight: 'bold' }}>
							{safeGet(productInfo, 'status') || 'N/A'}
						</span>
					</p>

					<h5>MATERIALS: </h5>
					<p>Main Gemstone Shape: {safeGet(productMaterials, 'main_gemstone_shape', 'N/A')}</p>
					<p>Main Gemstone Size: {safeGet(productMaterials, 'main_gemstone_size', 'N/A')}</p>
					<p>Gold 18K Weight: {safeGet(productMaterials, 'gold_18k_weight', 'N/A')} g</p>
					<p>Gold 14K Weight: {safeGet(productMaterials, 'gold_14k_weight', 'N/A')} g</p>
					<p>Plat 900 Weight: {safeGet(productMaterials, 'plat_900_weight') || 'N/A'} g</p>
					<p>Smooth Surface / Specially Patterned Surface: {safeGet(productMaterials, 'surface_plain_pattern', 'N/A')}</p>
					<p>Catalogue Color: {safeGet(productMaterials, 'catalogue_color', 'N/A')}</p>

					<h5>ACCENTED STONES:</h5>
					{productShapes && Object.keys(productShapes).length > 0 ? (
						Object.keys(productShapes)
						.filter(key => key !== 'ProductId')
						.map(key => (
							<div key={key}>
							<p className={key.includes('Shape') ? 'red-text' : ''}>
								{`${key}: ${productShapes[key] || 'N/A'}`}
							</p>
							</div>
						))
					) : (
						<p>No accented stones data available</p>
					)}

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