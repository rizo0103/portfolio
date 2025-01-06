/* eslint-disable no-unused-vars */
import React from 'react';
import '../../styles/temps/Footer.css';
import { FaInstagram, FaTelegramPlane, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
        <footer className="footer">
            <div className="footer-left">
                <p className="motto"> Code your future, one line at a time. </p>
            </div>
            <div className="footer-right">
                <a href="https://www.instagram.com/shokirov06" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://t.me/s_m_a_3" target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane />
                </a>
                <a href="https://github.com/rizo0103" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="www.linkedin.com/in/muhammadrizo-shokirov-9a6988344">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
