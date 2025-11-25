import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'VanillaMD',
      description: 'Simple Markdown rendering with a single function. No build step required, just drop it in and go.',
      tags: ['Markdown', 'JavaScript', 'Zero-config'],
      language: 'JavaScript',
      link: 'https://github.com/foxcomputer/vanillamd',
      stars: '42',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      )
    },
    {
      title: 'More Coming Soon',
      description: 'We are working on more exciting open source tools. Stay tuned!',
      tags: ['WIP', 'FOSS'],
      link: 'https://github.com/foxcomputer',
      stars: '0'
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Open source tools built with passion and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
