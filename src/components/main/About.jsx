/* eslint-disable no-unused-vars */
// About.jsx
import React from 'react';
import '../../styles/main/About.css'; // Make sure you add styles here

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="about-content">
                {/* Left Side: Information */}
                <div className="about-info">
                    <h1> About Me </h1>
                    <p>
                        I`m a web developer with a strong foundation in front-end
                        technologies like React, HTML, CSS, and JavaScript. I also have
                        experience with back-end development using Node.js and databases
                        like MySQL and MongoDB.
                    </p>
                    <p>
                        I am passionate about building scalable and efficient web
                        applications. With a keen eye for design and a strong
                        understanding of user experience, I strive to create
                        applications that are not only functional but also aesthetically
                        pleasing.
                    </p>
                    <p>
                        When I`m not coding, you can find me exploring new
                        technologies, contributing to open-source projects, or reading
                        about the latest trends in the tech world. I am constantly
                        seeking opportunities to learn and grow as a developer.
                    </p>
                </div>

                {/* Right Side: Photo */}
                <div className="about-photo">
                    <div className="photo-container">
                        <img src="/images/me-no-bg.png" alt="Your Name" className="photo" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
