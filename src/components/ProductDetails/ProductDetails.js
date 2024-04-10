const ProductDetails = ({ product }) => {
    return (
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>Category: {product.category}</p>
        <p>ID: {product.productID}</p>
        <p>Stock Level: {product.stockLevel}</p>
        <p>Status: {product.status}</p>
        {/* ... include any other details you want to show */}
      </div>
    );
  };
  
  export default ProductDetails;
  