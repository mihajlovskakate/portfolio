import React from "react";
import projectData from "../projectData.js";


function Projects() {

    return (
        <section id="projects" className="projects-section">
            <h2>My projects</h2>
            <div className="project-container">
                {projectData.map((project) => (
                    <div className="row" key={project.id}>
                        <div className="col img" style={project.id % 2 === 0 ? { float: "right" } : { float: "left" }}>
                            <a href={project.link}> <img src={project.image} alt="galery" className="project-image" /></a>
                        </div>
                        <div className="col description" style={project.id % 2 === 0 ? { float: "right", textAlign: "right" } : { float: "left", textAlign: "left" }}>
                            <div className="project-title"><h3>{project.title}</h3></div>
                            <div className="project-details">
                                <p>{project.description}</p>
                                <p>Made with <i>{project.technologies}</i></p>
                                <a href={project.link}>Live site</a>&#65372;<a href={project.github}>Github</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
        </section>
    );
}

export default Projects