// Navbar.jsx
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../../styles/temps/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h1> YourLogo </h1>
                </div>
                <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <Link to="home" onClick={toggleMenu}> Home </Link>
                    <Link to="about" onClick={toggleMenu}> About </Link>
                    <Link to="projects" onClick={toggleMenu}> Projects </Link>
                    <Link to="skills" onClick={toggleMenu}> Skills </Link>
                    <Link to="contact" onClick={toggleMenu}> Contact </Link>
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <div className={`bar ${isOpen ? 'open' : ''}`}> </div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}> </div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}> </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
