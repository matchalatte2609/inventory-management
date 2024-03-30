import ProductItem from '../ProductItem/ProductItem.js';
const ProductList = ({ products }) => {
	return (
		<div className="product-list">
			{products.map((product) => (
				<ProductItem key={product.id} {...product} />
			))}
		</div>
	);
};

export default ProductList;
