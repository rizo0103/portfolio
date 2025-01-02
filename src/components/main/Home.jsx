// Home.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import '../../styles/temps/Section.css';

const Home = () => {
  return (
    <div>
        <section id="home" className="section">
            <h1> Home </h1>
            <p> Welcome to my portfolio! </p>
        </section>
        <section id="about" className="section">
            <h1> About </h1>
            <p> About me section </p>
        </section>
        <section id="projects" className="section">
            <h1> Projects </h1>
            <p> My projects </p>
        </section>
        <section id="skills" className="section">
            <h1> Skills </h1>
            <p> My skills </p>
        </section>
        <section id="contact" className="section">
            <h1> Contact </h1>
            <p> Contact me </p>
        </section>
    </div>
  );
};

export default Home;
