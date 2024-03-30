import Topbar from '../Topbar/Topbar.js';
import ProductList from '../ProductList/ProductList.js';
import Sidebar from '../Sidebar/Sidebar.js';

const Homepage = () => {
	return (
		<div className="app-container">
			<Sidebar />
			<div className="main-content">
				<Topbar />
				<ProductList
					products={[
						{ name: 'prod1', price: 1000, revenue: 3000, sales: 3 },
						{ name: 'prod2' },
					]}
				/>
			</div>
		</div>
	);
};

export default Homepage;
