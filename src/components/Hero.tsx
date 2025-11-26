import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-foreground">
          Computers can be <br />
          <span className="text-muted-foreground">fun again.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Two guys making cool open source stuff. We build tools that bring joy
          back to computing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="btn-rainbow-hover px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02] w-full sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="https://github.com/foxcomputer"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-medium bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 transition-all hover:scale-[1.02] w-full sm:w-auto"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      {/* Subtle Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
