import React, { useState, useEffect } from 'react';

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

          <a 
            href="https://github.com/foxcomputer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium text-secondary-foreground border border-border"
          >
            <span>GitHub</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
