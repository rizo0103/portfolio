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
                    <h1> Shokiri Muhammadrizo </h1>
                </div>
                <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <Link to="home" smooth={true} onClick={toggleMenu}> Home </Link>
                    <Link to="about" smooth={true} onClick={toggleMenu}> About </Link>
                    <Link to="projects" smooth={true} onClick={toggleMenu}> Projects </Link>
                    <Link to="skills" smooth={true} onClick={toggleMenu}> Skills </Link>
                    <Link to="contact" smooth={true} onClick={toggleMenu}> Contact </Link>
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
