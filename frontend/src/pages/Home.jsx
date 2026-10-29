import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Play, X } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "../styles/Home.css";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/vishug0708", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/visheshgupta07", icon: FaLinkedin },
  { name: "Instagram", href: "https://www.instagram.com/vishug_7", icon: FaInstagram },
  { name: "YouTube", href: "https://youtube.com", icon: FaYoutube },
];

export default function Home({ theme = "light" }) {
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

      <div className="hero-container">
        <div className="hero-copy">
          <p className="hero-eyebrow">Hi, I'm</p>

          <h1 className="hero-name">Vishesh Gupta</h1>

          <h2 className="hero-title">
            Building{" "}
            <span className="hero-highlight">
              Digital
              <svg
                className="hero-underline-swoosh"
                viewBox="0 0 160 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 11C40 4 95 3 156 12"
                  stroke="#2563eb"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            Experiences.
          </h2>

          <p className="hero-description">
            Full-stack developer exploring the intersection
            <br className="desktop-break" />
            of engineering, design, and interactive experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">
              <span>Explore My Work</span>
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="hero-button hero-button-secondary">
              <span>Contact Me</span>
            </a>
          </div>

          <a href="#about" className="hero-scroll">
            <span className="hero-scroll-icon">
              <ArrowDown size={15} />
            </span>
            <span>Scroll to explore</span>
          </a>
        </div>

        <div className="hero-social-strip" aria-label="Social links">
          <span className="hero-social-label">Follow</span>
          {socialLinks.map((social) => {
            const SocialIcon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                title={social.name}
                className="hero-social-link"
              >
                <SocialIcon size={16} />
              </a>
            );
          })}
        </div>
      </div>

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