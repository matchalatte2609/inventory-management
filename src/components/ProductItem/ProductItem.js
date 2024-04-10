import './ProductItem.css';


const ProductItem = ({ name, category, productID, stockLevel, status, imageUrl }) => {
	const calculateStockLevelPercentage = (stockLevel) => {
		const maxStockLevel = 100; // This should be your actual maximum stock level
		return (stockLevel / maxStockLevel) * 100;
	  };
	
	return (
	  <div className="product-item">
			<div className="product-image-container">
			<img className="product-image" src={imageUrl} alt={name} />
			</div>
				<div className="product-name">{name}</div>
				<div className="product-category">{category}</div>
				<div className="product-id">{productID}</div>
				<div className="product-stock-level">
				<div className="stock-level-bar-container">
					<div 
					className="stock-level-bar" 
					style={{ width: `${calculateStockLevelPercentage(stockLevel)}%` }}
					></div>
				</div>
				{stockLevel}
				</div>
				<div className={`product-status ${status.toLowerCase()}`}>{status}</div>
				<div className="product-actions">
			</div>
	  </div>
	);
  };
  

export default ProductItem;
