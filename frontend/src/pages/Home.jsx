import React from "react";
import { ArrowDown, ArrowRight, MessageCircle, Play } from "lucide-react";
import "../styles/Home.css";

export default function Home() {
  return (
    <section className="home-page" id="home">
      <div className="hero-background-image" aria-hidden="true" />

      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-copy">
        <p className="hero-eyebrow">Hi, I'm</p>

        <h1>Vishu Gupta</h1>

        <h2>
          Building Digital
          <br />
          Experiences.
        </h2>

        <p className="hero-description">
          Full-stack developer exploring the intersection
          <br className="desktop-break" />
          of engineering, design, and real-world problem solving.
        </p>

        <div className="hero-tech-tags" aria-label="Core technologies">
          <span>React.js</span>
          <span>Node.js</span>
          <span>MySQL</span>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="hero-button hero-button-light">
            Explore My Work
            <ArrowRight size={20} />
          </a>

          <a href="#contact" className="hero-button hero-button-outline">
            Contact Me
            <MessageCircle size={17} />
          </a>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        <span className="hero-scroll-icon">
          <ArrowDown size={17} />
        </span>
        <span>Scroll to explore</span>
      </a>

      <div className="hero-side-words" aria-hidden="true">
        <span>Code</span>
        <span>Design</span>
        <span>Develop</span>
        <span>Improve</span>
        <span>Repeat</span>
      </div>

      <a href="#projects" className="hero-watch">
        <span className="hero-play">
          <Play size={22} fill="currentColor" />
        </span>
        <span>Explore my work</span>
      </a>
    </section>
  );
}