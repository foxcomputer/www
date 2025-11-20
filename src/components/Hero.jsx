import React from 'react';
import '../styles/Hero.css';

export const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-content">
          <button className="nav-logo" onClick={scrollToTop}>
            fox.computer
          </button>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#log">Log</a>
            <a href="#about">About</a>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-card">
            <span className="hero-card__align hero-card__align--tl" aria-hidden>
              <span className="hero-card__align__cross" aria-hidden></span>
            </span>
            <span className="hero-card__align hero-card__align--br" aria-hidden>
              <span className="hero-card__align__cross" aria-hidden></span>
            </span>

            <div className="hero-card__inner">
              <div className="fox-mascot">🦊</div>
              <h1 className="hero-main-title">
                fox.computer
              </h1>

              <h2 className="hero-subtitle-text">
                Technology should feel fun, expressive, and alive.
              </h2>

              <p className="hero-description">
                A digital playground for design, code, and chaos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
