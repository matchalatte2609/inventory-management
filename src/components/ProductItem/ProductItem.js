import './ProductItem.css';

const ProductItem = ({ name, price, sold, revenue }) => {
	return (
		<div className="product-item">
			<span>{name}</span>
			<span>{price}</span>
			<span>{sold}</span>
			<span>{revenue}</span>
		</div>
	);
};

export default ProductItem;
