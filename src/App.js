import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { loginRequest } from './auth/msalConfig.js';
import { callMsGraph } from './auth/graph.js';
import { Button } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home/Home.js';
import Products from './pages/Products/Products.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Inventory from './pages/Inventory/Inventory.js';
import Login from './pages/Login/Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import other pages/components you want to route to

const App = () => {
	const { instance, accounts } = useMsal();
	const [graphData, setGraphData] = useState(null);

	const requestProfieData = async () => {
		instance
			.acquireTokenSilent({
				...loginRequest,
				account: accounts[0],
			})
			.then((response) => {
				callMsGraph(response.accessToken).then((response) =>
					setGraphData(response)
				);
			});
	};

	const handleLogin = () => {
		instance.loginRedirect(loginRequest).catch((e) => {
			console.log(e);
		});
	};
	const isAuthenticated = useIsAuthenticated();

	const [currentUser, setCurrentUser] = useState('');

	if (!isAuthenticated) return <Login onLogin={handleLogin} />;
	else
		return (
			// If logged in already
			<Router>
				<div className="app-container">
					<Sidebar username={accounts[0].name} />
					<div className="main-content">
						<Routes>
							{/* <Route path="/analytics" element={<Login />} /> */}
							<Route path="/home" element={<Home />} />
							<Route path="/products" element={<Products />} />
							<Route path="/inventory" element={<Inventory />} />
						</Routes>
					</div>
				</div>
				<div>
					<Button
						onClick={() => {
							instance.logoutRedirect({
								postLogoutRedirectUri: '/',
							});
						}}
					>
						Logout
					</Button>
				</div>
			</Router>
		);
};
export default App;
