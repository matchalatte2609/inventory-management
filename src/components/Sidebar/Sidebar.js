import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';
import logo from '../Assets/tierra-logo.png';
import homeIcon from '../Assets/home-icon.png';
import productsIcon from '../Assets/ring-icon.png';
import analyticsIcon from '../Assets/bar-chart-icon.png';
import transactionsIcon from '../Assets/transaction-icon.png';
import communityIcon from '../Assets/community-icon.png';
import settingsIcon from '../Assets/settings-icon.png';
import inventoryIcon from '../Assets/inventory-icon.png';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="logo-container">
				<img src={logo} alt="Company Logo" />
			</div>
			<div className="user-container">
				<div className="user-avatar">{/* Placeholder for user avatar */}</div>
				<div className="user-name">
					Nhi Nguyen {/* Replace with dynamic user name if needed */}
				</div>
			</div>
			<div className="nav-buttons">
				<Link to="/home" className="nav-btn">
					<img src={homeIcon} alt="Home" className="icon" /> Home
				</Link>
				<Link to="/products" className="nav-btn">
					<img src={productsIcon} alt="Products" className="icon" /> Products
				</Link>
				<Link to="/analytics" className="nav-btn">
					<img src={analyticsIcon} alt="Analytics" className="icon" /> Analytics
				</Link>
				<Link to="/transactions" className="nav-btn">
					<img src={transactionsIcon} alt="Transactions" className="icon" />
					Transactions
				</Link>
				<Link to="/inventory" className="nav-btn">
					<img src={inventoryIcon} alt="Inventory" className="icon" /> Inventory
				</Link>
				<Link to="/community" className="nav-btn">
					<img src={communityIcon} alt="Community" className="icon" /> Community
				</Link>
				<Link to="/settings" className="nav-btn">
					<img src={settingsIcon} alt="Settings" className="icon" /> Settings
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
