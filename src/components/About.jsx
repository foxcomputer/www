import React from 'react';
import '../styles/Sections.css';

export const About = () => {
    return (
        <section id="about" className="section-container about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title" style={{ textAlign: 'left' }}>The Philosophy</h2>
                        <p className="text-lg">
                            <strong>fox.computer</strong> is a personal brand, portfolio, and experimental digital playground built around a simple core idea:
                        </p>
                        <blockquote className="highlight-quote">
                            Technology should feel fun, expressive, and alive — never corporate or sterile.
                        </blockquote>
                        <p>
                            It represents a design-focused, curiosity-driven identity that mixes aesthetics, code, humor, and chaos into one cohesive vibe.
                        </p>
                    </div>
                    <div className="about-visual">
                        <div className="stat-card">
                            <span className="stat-value">100%</span>
                            <span className="stat-label">Hand-crafted</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-value">0%</span>
                            <span className="stat-label">Corporate</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
