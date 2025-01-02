/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/main/Skills.css";

const skills = [
  {
    name: "React",
    image: "react-image.jpg",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "Node.js",
    image: "nodejs-image.jpg",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    name: "JavaScript",
    image: "javascript-image.jpg",
    description: "A high-level, interpreted programming language.",
  },
  // Add more skills here
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h1>Skills</h1>
            <div className="skills-library">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-inner">
                            <div className="skill-front">
                                <h2>{skill.name}</h2>
                            </div>
                            <div className="skill-back">
                                <img src={skill.image} alt={skill.name} />
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
