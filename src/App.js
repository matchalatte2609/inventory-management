import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home.js';
import Products from './pages/Products/Products.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Inventory from './pages/Inventory/Inventory.js';
import Login from './pages/Login/Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import other pages/components you want to route to

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState('');
	const onLogin = (email, password) => {
		if (email.endsWith('@tierra.vn') && password === '01062016') {
			setLoggedIn(true);
			setCurrentUser(email.split('@')[0]);
		} else {
			alert('Username or Password is wrong');
			setLoggedIn(false);
		}
	};
	if (!loggedIn) return <Login onLogin={onLogin} />;
	else
		return (
			// If logged in already
			<Router>
				<div className="app-container">
					<Sidebar username={currentUser} />
					<div className="main-content">
						<Routes>
							{/* <Route path="/analytics" element={<Login />} /> */}
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
