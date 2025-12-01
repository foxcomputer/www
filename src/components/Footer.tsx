import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/vite.svg" alt="Fox Computer" className="w-6 h-6 rounded" />
            <span className="font-semibold text-foreground">fox.computer</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} foxcomputer
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/foxcomputer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              GitHub
            </a>
            <a href="mailto:hello@fox.computer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
