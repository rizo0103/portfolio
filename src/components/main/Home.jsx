/* eslint-disable no-unused-vars */
import React from 'react';
import '../../styles/main/Home.css'; // Make sure you add styles here
import { Link } from 'react-scroll';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
  return (
        <div>
            {/* Hero Section */}
            <section id="home" className="section hero">
                <div className="hero-content">
                    <h1> Welcome to My portfolio! </h1>
                    <p> I am a passionate Web Developer, specializing in front-end and back-end development. </p>
                    <Link smooth={true} duration={500} to="about" className="cta-button"> Learn More About Me </Link>
                </div>
            </section>

            {/* About Section */}
            <About />

            {/* Projects Section */}
            <Projects />

            {/* Skills Section */}
            <Skills />
            
            {/* Contact Section */}
            <Contact />
        </div>
    );
};

export default Home;
