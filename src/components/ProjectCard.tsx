import React from 'react';
import ExternalLinkIcon from "@hackernoon/pixel-icon-library/icons/SVG/regular/external-link.svg?react"
import GitHubIcon from "@hackernoon/pixel-icon-library/icons/SVG/brands/github.svg?react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  stars: string;
  language?: string;
  icon?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link, stars, language, icon }) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full border border-border bg-card/50 rounded-xl p-6 transition-all duration-300 hover:bg-card hover:border-primary/20 hover:shadow-lg"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="project-icon-rainbow p-2 rounded-lg bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            {icon || <ExternalLinkIcon className="w-5 h-5" />}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <GitHubIcon className="w-4 h-4" />
          <span>{stars}</span>
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
