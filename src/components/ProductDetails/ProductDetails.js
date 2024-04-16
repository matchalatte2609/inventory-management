import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import productsApi from '../../api/products.js';
import materialsApi from '../../api/materials.js';

const ProductDetails = ({
	showProductDetailModal,
	setShowProductDetailModal,
}) => {
	const [productInfo, setProductInfo] = useState({});
	const [productMaterials, setProductMaterials] = useState({});
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

					if (isMounted) {
						setProductInfo(productData);
						setProductMaterials(materialData);
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
						{productInfo.name} - {productInfo.design_code}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h5>Details</h5>
					<p>Category: {productInfo.category}</p>
					<p>Diameter: {productInfo.diameter || 'N/A'}</p>
					<p>Ring Size: {productInfo.ring_size || 'N/A'}</p>

					<h5>Materials</h5>
					<p>Main Gemstone Shape: {productMaterials.main_gemstone_shape}</p>
					<p>Main Gemstone Size: {productMaterials.main_gemstone_size}</p>
					<p>Gold 18K Weight: {productMaterials.gold_18k_weight}</p>
					<p>Gold 14K Weight: {productMaterials.gold_14k_weight}</p>
					<p>Plat 900 Weight: {productMaterials.plat_900_weight || 'N/A'}</p>
					<p>Pattern: {productMaterials.plain_or_pattern}</p>
					<p>Diamond Weight: {productMaterials.diamond_weight || 'N/A'}</p>
					<p>CZ Weight: {productMaterials.cz_weight || 'N/A'}</p>
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
					<Button
						variant="primary"
						onClick={() => {
							setShowProductDetailModal({ id: '', show: false });
						}}
					>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
export default ProductDetails;
