/* eslint-disable no-unused-vars */
import React from 'react';
import '../../styles/main/Home.css'; // Make sure you add styles here
import { Link } from 'react-scroll';
import About from './About';

const Home = () => {
  return (
        <div>
        {/* Hero Section */}
        <section id="home" className="section hero">
            <div className="hero-content">
                <h1> Welcome to My Portfolio </h1>
                <p> I am a passionate Web Developer, specializing in front-end and back-end development. </p>
                <Link smooth={true} duration={500} to="about" className="cta-button"> Learn More About Me </Link>
            </div>
        </section>

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <section id="projects" className="section projects">
            <h1>My Projects</h1>
            <div className="project-list">
                <div className="project-card">
                    <h2>Project 1</h2>
                    <p>A brief description of your project.</p>
                    <a href="#">View Project</a>
                </div>
                <div className="project-card">
                    <h2>Project 2</h2>
                    <p>A brief description of another project.</p>
                    <a href="#">View Project</a>
                </div>
            </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills">
            <h1> Skills </h1>
            <ul>
                <li> React.js </li>
                <li> Node.js </li>
                <li> JavaScript </li>
                <li> CSS </li>
                <li> HTML5 </li>
                <li> MySQL </li>
            </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact">
            <h1>Contact Me</h1>
            <p>Feel free to reach out to me via email or connect on LinkedIn!</p>
            <a href="mailto:your-email@example.com" className="cta-button">Email Me</a>
        </section>
        </div>
    );
};

export default Home;
