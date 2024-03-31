import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.js';
import Products from './pages/Products/Products.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Topbar from './components/Topbar/Topbar.js';
// Import other pages/components you want to route to

const App = () => {
	return (
		<Router>
			<div className="app-container">
				<Sidebar />
				<div className="main-content">
					<Routes>
						{/* Replace <Home /> with your actual home component */}
						<Route path="/home" element={<Home />} />
						<Route path="/products" element={<Products />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};
export default App;
