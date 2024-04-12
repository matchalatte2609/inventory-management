// const ProductDetails = ({ product }) => {
//     return (
//       <div className="product-details">
//         <h2>{product.name}</h2>
//         <p>Category: {product.category}</p>
//         <p>ID: {product.productID}</p>
//         <p>Stock Level: {product.stockLevel}</p>
//         <p>Status: {product.status}</p>
//         {/* ... include any other details you want to show */}
//       </div>
//     );
//   };

import { Button, Modal } from 'react-bootstrap';

const ProductDetails = ({
	showProductDetailModal,
	setShowProductDetailModal,
}) => {
	const productInfo = {
		id: '1',
		design_code: 'BTA0007',
		name: 'SICULA',
		category: 'BTA',
		diameter: '',
		ring_size: '',
	};
	const productMaterials = {
		ProductId: '1',
		main_gemstone_shape: 'Heart',
		main_gemstone_size: '5.0*6.0',
		gold_18k_weight: '2.68',
		gold_14k_weight: '2.46',
		plat_900_weight: '',
		plain_or_pattern: 'Pattern',
		diamond_weight: '',
		cz_weight: '',
	};
	return (
		<div>
			<Modal
				show={showProductDetailModal.show}
				onHide={() => {
					setShowProductDetailModal({ id: '', show: false });
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>{productInfo.name} - {productInfo.design_code}</Modal.Title>
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
