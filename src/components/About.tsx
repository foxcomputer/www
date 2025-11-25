import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">
            About Us
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We're two developers who believe that computing should be <span className="text-foreground font-semibold">fun, accessible, and empowering</span>. 
              In a world of bloated software and vendor lock-in, we're building tools that respect your freedom and bring joy back to technology.
            </p>
            
            <p>
              Every project we create is <span className="text-foreground font-semibold">open source</span>, because we believe in transparency, 
              collaboration, and giving back to the community that has given us so much.
            </p>
            
            <div className="pt-8 border-t border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Philosophy</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong className="text-foreground">Simple over complex</strong> - We prefer elegant solutions to feature bloat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong className="text-foreground">Open over closed</strong> - All our code is free and open source</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong className="text-foreground">Users over profits</strong> - We build for people, not shareholders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong className="text-foreground">Fun over boring</strong> - Technology should spark joy, not frustration</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-8 text-center">
              <p className="text-foreground font-medium">
                Want to collaborate or just say hi?
              </p>
              <a 
                href="mailto:hello@fox.computer" 
                className="btn-rainbow-hover inline-block mt-4 px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02]"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
