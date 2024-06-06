import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LogOut from '../pages/LogOut'; // Impor komponen LogOut

const PopUpLogout = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogout = () => {
      setShowLogoutModal(true);
    };
  
    const handleCloseLogoutModal = () => {
      setShowLogoutModal(false);
    };
  
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Your App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* Your navigation links */}
          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Tampilkan popup konfirmasi logout */}
        <LogOut show={showLogoutModal} handleClose={handleCloseLogoutModal} />
      </Navbar>
    );
};

export default PopUpLogout