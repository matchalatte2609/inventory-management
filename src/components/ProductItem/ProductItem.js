import './ProductItem.css';

const ProductItem = ({ id, name, price, sold, revenue, imageUrl, status }) => (
	<div className="product-item" key={id}>
		<img src={imageUrl} alt={name} className="product-image" />
		<div className="product-info">
			<div className="product-name">{name}</div>
			<div className="product-price">{price}</div>
			<div className="product-sold">{sold}</div>
			<div className="product-revenue">{revenue}</div>
			<div className="product-status">{status}</div>
		</div>
		<div className="product-actions">
			<button className="button">Edit</button>
			<button className="button">Delete</button>
		</div>
	</div>
);

export default ProductItem;
