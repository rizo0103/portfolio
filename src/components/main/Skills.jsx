/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import '../../styles/main/Skills.css';

const skills = [
    {
        name: 'React',
        description: 'A JavaScript library for building user interfaces.',
        image: '/images/skills/react.png',
    },
    {
        name: 'Node.js',
        description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
        image: '/images/skills/nodeJS.png',
    },
    {
        name: 'JavaScript',
        description: 'A high-level, interpreted programming language.',
        image: './images/skills/js.png',
    },
    {
        name: 'HTML5',
        description: 'Markup language for creating web pages.',
        image: '/images/skills/html.png',
    },
    {
        name: 'CSS3',
        description: 'Style sheet language used for describing the presentation of a document.',
        image: '/images/skills/css.png',
    },
    {
        name: 'MongoDB',
        description: 'NoSQL database for high-volume data storage.',
        image: '/images/skills/mongoDB.png',
    },
];

const Skills = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        let animationFrame;
        let direction = 1; // 1 for moving right, -1 for moving left
        let scrollAmount = 0;
    
        // Function to move the carousel
        const startInfiniteScroll = () => {
            scrollAmount += direction; // Increment or decrement scroll
            carousel.scrollLeft = scrollAmount;
            animationFrame = requestAnimationFrame(startInfiniteScroll);
        };
    
        // Change direction every 10 seconds
        const intervalId = setInterval(() => {
            direction *= -1; // Reverse direction
        }, 10000);
    
        // Start the scrolling
        animationFrame = requestAnimationFrame(startInfiniteScroll);
    
        // Cleanup function
        return () => {
            cancelAnimationFrame(animationFrame); // Stop animation
            clearInterval(intervalId); // Clear interval
        };
    }, []);
    
  
    return (
        <section id="skills" className="skills">
            <h1> Skills </h1>
            <div className="carousel-wrapper" ref={carouselRef}>
                <div className="carousel">
                    {skills.concat(skills).map((skill, index) => ( // Duplicate array for smooth loop
                        <div key={index} className="carousel-item">
                            <div className="card">
                                <div className="card-front">
                                    <img src={skill.image} alt={skill.name} />
                                    <h2> {skill.name} </h2>
                                </div>
                                <div className="card-back">
                                    <p> {skill.description} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
