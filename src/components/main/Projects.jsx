/* eslint-disable no-unused-vars */
// components/main/Projects.jsx
import React from 'react';
import '../../styles/main/Projects.css'; // Import the styles for this section

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <h1>My Projects</h1>
            <div className="project-list">
                <div className="project-card">
                    <div className="project-inner">
                        {/* Front side */}
                        <div className="project-front">
                            <img src="/images/black-impulse.png" alt="Anime site" className="project-image" />
                        </div>
                        {/* Back side */}
                        <div className="project-back" onClick={() => window.open("https://black-impulse.netlify.app", "_blank")}>
                            <h2> Anime web site </h2>
                            <p> 
                                It`s a simple web site for anime watchers, 
                                that was created in native JS. <br /><br /> 
                                Click it to see full web site 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-inner">
                        {/* Front side */}
                        <div className="project-front">
                            <img src="/images/eJournalAdminPanel.png" alt="eJournalAdminPanel" className="project-image" />
                        </div>
                        {/* Back side */}
                        <div className="project-back">
                            <h2> Admin panel for electronic journal </h2>
                            <p> 
                                This is a web site created in react, 
                                that alows administrators to control teachers 
                                and see activities of different groups. <br /><br /> 
                                I did not deploy the project yet {':('}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
