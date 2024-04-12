import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.js';
import Products from './pages/Products/Products.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Inventory from './pages/Inventory/Inventory.js';
import Login from "./pages/Login/Login.js";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import other pages/components you want to route to

const App = () => {
	return (
		// If logged in already
		<Router>
			<div className="app-container">
				<Sidebar />
				<div className="main-content">
					<Routes>
						<Route path="/analytics" element={<Login />} />
						<Route path="/home" element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/inventory" element={<Inventory />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};
export default App;
