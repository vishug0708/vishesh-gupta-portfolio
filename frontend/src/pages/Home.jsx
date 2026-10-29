import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Play, X } from "lucide-react";
import "../styles/Home.css";

export default function Home() {
  const [introOpen, setIntroOpen] = useState(false);

  useEffect(() => {
    if (!introOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIntroOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [introOpen]);

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

          <button
            type="button"
            className="hero-button hero-button-outline"
            onClick={() => setIntroOpen(true)}
          >
            <Play size={17} fill="currentColor" />
            Watch Intro
          </button>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        <span className="hero-scroll-icon">
          <ArrowDown size={17} />
        </span>
        <span>Scroll to explore</span>
      </a>

      {introOpen && (
        <div
          className="hero-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio introduction video"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIntroOpen(false);
          }}
        >
          <div className="hero-video-dialog">
            <button
              type="button"
              className="hero-video-close"
              onClick={() => setIntroOpen(false)}
              aria-label="Close intro video"
            >
              <X size={22} />
            </button>
            <video
              className="hero-intro-video"
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              <source src="/videos/intro.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
            <p className="hero-video-hint">
              Add your introduction video at <code>public/videos/intro.mp4</code>.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}