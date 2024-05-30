import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { loginRequest } from './auth/msalConfig.js';
import { callMsGraph } from './auth/graph.js';
import './App.css';
import Home from './pages/Home/Home.js';
import Products from './pages/Products/Products.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Category from './pages/Category/Category.js';
import Login from './pages/Login/Login.js';
import Topbar from './components/Topbar/Topbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from './components/ScrollToTopBtn/ScrollToTopBtn.js';

// Import other pages/components you want to route to

const App = () => {
	const { instance, accounts } = useMsal();
	const [graphData, setGraphData] = useState(null);

	const sideNavRef = useRef(null);

	useEffect(() => {
		// Add event listener to the document object
		document.addEventListener('mousedown', handleClickOutside);

		// Remove event listener when the component unmounts
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	function handleClickOutside(event) {
		if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
			// Clicked outside the side navigation bar, close it
			// Implement your close side navigation bar logic here
		}
	}

	const requestProfileData = async () => {
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

	const handleLogout = () => {
		instance.logoutRedirect({
			postLogoutRedirectUri: '/',
		});
	};

	const isAuthenticated = useIsAuthenticated();

	if (!isAuthenticated) return <Login onLogin={handleLogin} />;
	else
		return (
			// If logged in already
			<Router>
				<div className="app-container">
					{/* <div className="sidebar" ref={sideNavRef}>
						<Sidebar username={accounts[0].name} handleLogout={handleLogout} />
					</div> */}
					<div>
						<Topbar username={accounts[0].name} handleLogout={handleLogout} />
					</div>
					<div className="main-content">
						<Routes>
							{/* <Route path="/analytics" element={<Login />} /> */}
							<Route path="/home" element={<Home />} />
							<Route path="/products" element={<Products />} />
							<Route path="/Category" element={<Category />} />
							<Route path="/" element={<Products />} />

						</Routes>
					</div>
					<ScrollToTopButton/>
				</div>
			</Router>
		);
};
export default App;
