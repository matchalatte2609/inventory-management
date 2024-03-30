import Topbar from '../Topbar/Topbar.js';
import ProductList from '../ProductList/ProductList.js';
const Homepage = () => {
	return (
		<div style={{ display: 'flex' }}>
			<Topbar />
			<ProductList products={[{ name: 'cac' }]} />
		</div>
	);
};

export default Homepage;
