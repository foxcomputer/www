import React from 'react';
import '../styles/Sections.css';

const logs = [
    {
        date: "2025-11-20",
        title: "Rebranding to fox.computer",
        excerpt: "Finally decided to consolidate everything under one chaotic but cute identity. No more corporate portfolio sites."
    },
    {
        date: "2025-11-15",
        title: "Exploring WebGL Micro-interactions",
        excerpt: "Trying to make the cursor feel like it has mass and friction. Physics in UI is underrated."
    },
    {
        date: "2025-11-01",
        title: "Why I switched to Vanilla CSS",
        excerpt: "Tailwind is great, but sometimes you just want to write raw CSS variables and feel the power."
    }
];

export const DevLog = () => {
    return (
        <section id="log" className="section-container">
            <div className="container">
                <h2 className="section-title">Dev Log</h2>
                <div className="log-list">
                    {logs.map((log, index) => (
                        <article key={index} className="log-item">
                            <div className="log-date">{log.date}</div>
                            <div className="log-content">
                                <h3 className="log-title">{log.title}</h3>
                                <p className="log-excerpt">{log.excerpt}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevLog;
