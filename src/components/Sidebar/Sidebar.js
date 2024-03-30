import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';
import logo from '../Assets/tierra-logo.png';
// Import icons - replace these with the actual paths to your icon images
import homeIcon from '../Assets/home-icon.png';
import productsIcon from '../Assets/ring-icon.png';
import analyticsIcon from '../Assets/bar-chart-icon.png';
import transactionsIcon from '../Assets/transaction-icon.png';
import communityIcon from '../Assets/community-icon.png';
import settingsIcon from '../Assets/settings-icon.png';

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
				<Link to="/home" className="nav-btn active">
					<img src={homeIcon} alt="Home" className="icon" /> Home
				</Link>
				<Link to="/products" className="nav-btn">
					<img src={productsIcon} alt="Products" className="icon" /> Products
				</Link>
				<button className="nav-btn">
					<img src={analyticsIcon} alt="Analytics" className="icon" /> Analytics
				</button>
				<button className="nav-btn">
					<img src={transactionsIcon} alt="Transactions" className="icon" />{' '}
					Transactions
				</button>
				<button className="nav-btn">
					<img src={communityIcon} alt="Community" className="icon" /> Community
				</button>
				<button className="nav-btn">
					<img src={settingsIcon} alt="Settings" className="icon" /> Settings
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
