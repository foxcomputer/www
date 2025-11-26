import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  topics: string[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/orgs/foxcomputer/repos?sort=updated&per_page=100');
        const data = await response.json();
        
        // Filter out forks and private repos, sort by stars
        const publicRepos = data
          .filter((repo: GitHubRepo) => !repo.hasOwnProperty('fork') || !(repo as any).fork)
          .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count);
        
        setProjects(publicRepos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Custom icon for VanillaMD
  const getProjectIcon = (repoName: string) => {
    if (repoName.toLowerCase() === 'vanillamd') {
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      );
    }
    return undefined;
  };

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

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-muted-foreground">Loading projects...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                title={project.name}
                description={project.description || 'No description available'}
                tags={project.topics.slice(0, 3)}
                link={project.html_url}
                stars={project.stargazers_count.toString()}
                language={project.language}
                icon={getProjectIcon(project.name)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
