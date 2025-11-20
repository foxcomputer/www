import React from 'react';
import '../styles/Sections.css';

const projects = [
    {
        title: "VanillaMD",
        category: "Open Source",
        description: "VanillaMD: Simple Markdown rendering with a single script.",
        link: "https://github.com/foxcomputer/VanillaMD"
    }
];

export const Portfolio = () => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(projects.length, 3)}, 1fr)`,
        gap: '2rem',
        width: '100%'
    };

    return (
        <section id="work" className="section-container">
            <div className="container">
                <h2 className="section-title">Selected Work</h2>
                <div style={gridStyle}>
                    {projects.map((project, index) => (
                        <a href={project.link} key={index} className="card project-card" target="_blank" rel="noopener noreferrer">
                            <div className="card-content">
                                <span className="card-category">{project.category}</span>
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-description">{project.description}</p>
                            </div>
                            <div className="card-arrow">→</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
