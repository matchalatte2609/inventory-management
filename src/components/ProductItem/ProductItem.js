import './ProductItem.css';

const ProductItem = ({
	name,
	category,
	id,
	design_code,
	diameter,
	ring_size,
}) => {
	// const calculateStockLevelPercentage = (stockLevel) => {
	// 	const maxStockLevel = 100; // This should be your actual maximum stock level
	// 	return (stockLevel / maxStockLevel) * 100;
	// };
	const imageUrl =
		'https://www.tierra.vn/files/solitaire-nch1101-t6kZ3niJjK.webp';
	return (
		<div className="product-item">
			<div className="product-image-container">
				<img className="product-image" src={imageUrl} alt={name} />
			</div>
			<div className="product-id">{design_code}</div>
			<div className="product-category">{category}</div>
			<div className="product-name">{name}</div>
			{/* <div className="product-stock-level">
				<div className="stock-level-bar-container">
					<div
						className="stock-level-bar"
						style={{ width: `${calculateStockLevelPercentage(stockLevel)}%` }}
					></div>
				</div>
				{stockLevel}
			</div> */}
			{/* <div className={`product-status ${status.toLowerCase()}`}>{status}</div> */}
			<div className="product-actions"></div>
		</div>
	);
};

export default ProductItem;
