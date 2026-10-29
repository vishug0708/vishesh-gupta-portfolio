import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Code2,
  Layers3,
  Lightbulb,
  Quote,
  MoveUpRight,
} from "lucide-react";
import "../styles/About.css";

const aboutFacts = [
  {
    icon: GraduationCap,
    label: "EDUCATION",
    value: "BCA (Hons), 2028",
  },
  {
    icon: Code2,
    label: "SPECIALIZATION",
    value: "Full-Stack Web Development",
  },
  {
    icon: Layers3,
    label: "TECH STACK",
    value: "React & Node.js Ecosystem",
  },
  {
    icon: Lightbulb,
    label: "FOCUS",
    value: "Project-Based Learning",
  },
];

export default function About({ theme = "light" }) {
  return (
    <section className="about-page" id="about">
      <div className="about-background" aria-hidden="true" />

      <div className="about-layout">
        <div className="about-copy">
          <div className="about-eyebrow">
            <span>ABOUT ME</span>
          </div>

          <h2 className="about-heading">
            Engineering
            <br />
            with Intent<span className="heading-accent">.</span>
          </h2>

          <p className="about-intro">
            I'm <strong>Vishu Gupta</strong>, a BCA (Hons) student passionate
            about full-stack web development, backend systems, interactive
            interfaces, and solving real-world problems through software.
          </p>

          <p className="about-description">
            I enjoy turning ideas into functional, user-friendly, and
            visually appealing digital experiences using modern web technologies.
          </p>

          <div className="about-facts">
            {aboutFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div className="about-fact" key={fact.value}>
                  <span className="about-fact-icon">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <span className="about-fact-value">{fact.value}</span>
                </div>
              );
            })}
          </div>

          <div className="about-actions">
            <a href="/cv.pdf" className="about-download" download>
              <span>Download CV</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="about-portrait-column">
          <div className="about-portrait-frame">
            <img
              className="about-profile-image"
              src="/images/profile-image.png"
              alt="Vishesh Gupta portrait"
            />
            <div className="about-portrait-top">
              <span>PROFILE / VG-01</span>
              <span>2026</span>
            </div>
            <div className="about-portrait-bottom">
              <span>VISHESH GUPTA</span>
              <span>DEVELOPER</span>
            </div>
          </div>
        </div>

        <div className="about-side-cards">
          <article className="about-quote-card">
            <Quote className="about-quote-icon" size={28} strokeWidth={1.5} />
            <h3>
              Good Code
              <br />
              Creates
              <br />
              Real
              <br />
              Opportunities.
            </h3>
            <span className="about-card-divider" />
            <p>Vishu Gupta</p>
          </article>

          <article className="about-learning-card">
            <div className="about-learning-top">
              <h3>
                Always Learning
                <br />
                Always Building.
              </h3>
              <div className="about-growth-bars" aria-label="Growth graph">
                {[18, 28, 38, 48, 60].map((h, i) => (
                  <span key={i} style={{ height: `${h}px` }} />
                ))}
              </div>
            </div>

            <div className="about-learning-bottom">
              <div className="about-avatar-stack">
                <span className="avatar-circle avatar-1">VG</span>
                <span className="avatar-circle avatar-2">DEV</span>
                <span className="avatar-circle avatar-3">AI</span>
              </div>
              <a href="#projects" className="about-learning-arrow" aria-label="Explore projects">
                <MoveUpRight size={18} />
              </a>
            </div>
          </article>
        </div>
      </div>

      <div className="about-bottom">
        <span>CURIOUS BY NATURE. PRACTICAL BY DESIGN.</span>
        <a href="#projects">
          EXPLORE PROJECTS <ArrowUpRight size={13} />
        </a>
      </div>
    </section>
  );
}