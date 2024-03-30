import './App.css';
import Products from './pages/Products/Products.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Topbar from './components/Topbar/Topbar.js';

const App = () => {
	return (
		<div className="app-container">
			<Sidebar />
			<div className="main-content">
				<Topbar />
				<Products />
			</div>
		</div>
	);
};
export default App;
