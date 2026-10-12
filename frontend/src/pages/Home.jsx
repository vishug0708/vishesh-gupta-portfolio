import React from "react";
import { ArrowDown, ArrowRight, Play } from "lucide-react";
import "../styles/Home.css";

export default function Home() {
  return (
    <section className="home-page" id="home">
      <div className="hero-background-image" />

      <div className="hero-overlay" />

      <div className="hero-copy">
        <p className="hero-eyebrow">Hi, I'm</p>

        <h1>Vishesh Gupta</h1>

        <h2>
          Building Digital
          <br />
          Experiences.
        </h2>

        <p className="hero-description">
          Full-stack developer exploring the intersection
          <br className="desktop-break" />
          of engineering, design, and interactive experiences.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-button hero-button-light">
            Explore My Work
            <ArrowRight size={20} />
          </a>

          <a href="#contact" className="hero-button hero-button-outline">
            Contact Me
          </a>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        <span className="hero-scroll-icon">
          <ArrowDown size={17} />
        </span>
        <span>Scroll to explore</span>
      </a>

      <a href="#projects" className="hero-watch">
        <span className="hero-play">
          <Play size={22} fill="currentColor" />
        </span>
        <span>Explore my work</span>
      </a>
    </section>
  );
}