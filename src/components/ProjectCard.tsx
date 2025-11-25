import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  stars: string;
  language?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link, stars, language }) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full border border-border bg-card/50 rounded-xl p-6 transition-all duration-300 hover:bg-card hover:border-primary/20 hover:shadow-lg"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="project-icon-rainbow p-2 rounded-lg bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>⭐ {stars}</span>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border"
          >
            {tag}
          </span>
        ))}
        {language && (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border">
            {language}
          </span>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
