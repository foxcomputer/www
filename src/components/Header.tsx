
import React, { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import GitHubIcon from "@hackernoon/pixel-icon-library/icons/SVG/brands/github.svg?react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 pt-6 ${
        scrolled ? '' : ''
      }`}
    >
      <div className={`container mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
        scrolled ? 'py-3 bg-background/80 backdrop-blur-md border border-border shadow-lg' : 'py-4 bg-background/60 backdrop-blur-sm border border-border/50'
      }`}>
        <div className="px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/vite.svg" alt="Fox Computer" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-xl tracking-tight text-foreground">fox.computer</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">Projects</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            
            <a 
              href="https://github.com/foxcomputer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium text-secondary-foreground border border-border"
            >
              <span>GitHub</span>
              <GitHubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
