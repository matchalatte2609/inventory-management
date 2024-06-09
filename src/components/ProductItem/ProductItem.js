import './ProductItem.css';

import { imageMapping } from '../imageMapping';


// const imageMapping = {
// 	'NCH1007': '/img_stock/NCH1007.JPG',
//   };

  const defaultImageUrl = 'https://www.tierra.vn/files/solitaire-nch1101-t6kZ3niJjK.webp';

const ProductItem = ({
	name,
	category,
	id,
	design_code,
	diameter,
	ring_size,
}) => {
	const imageUrl = imageMapping[design_code] || defaultImageUrl;
	return (
		<div className="product-item">
			<div className="product-image-container">
				<img className="product-image" src={imageUrl} alt={name} />
			</div>
			<div className="product-id">{design_code}</div>
			<div className="product-category">{category}</div>
			<div className="product-name">{name}</div>
			<div className="product-actions"></div>
		</div>
	);
};

export default ProductItem;
