import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import brandIcon from '../Assets/tierra-logo.png';
import homeIcon from '../Assets/home-icon.png';
import productsIcon from '../Assets/ring-icon.png';
import analyticsIcon from '../Assets/bar-chart-icon.png';
import transactionsIcon from '../Assets/transaction-icon.png';
import communityIcon from '../Assets/community-icon.png';
import settingsIcon from '../Assets/settings-icon.png';
import inventoryIcon from '../Assets/inventory-icon.png';
import menuIcon from '../Assets/menu-icon.png'; // Ensure you have an icon for menu toggle

import './Topbar.css';

const Topbar = ({ username, handleLogout }) => {
	const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand>
					<img src={brandIcon} className='brand-icon' alt="brandIcon" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to={'/home'} href="#home">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to={'/products'}>
							Products
						</Nav.Link>
						<Nav.Link as={Link} to={'/category'}>
							Categorizing
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Topbar;
