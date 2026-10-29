import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Code2,
  Layers3,
  Lightbulb,
  Download,
  Quote,
  MoveUpRight,
  TrendingUp,
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
    value: "React, Node.js, Express & MySQL",
  },
  {
    icon: Lightbulb,
    label: "CURRENT FOCUS",
    value: "Building practical web applications",
  },
];

export default function About() {
  return (
    <section className="about-page" id="about">
      <div className="about-background" />

      <div className="about-layout">
        <div className="about-copy">
          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            <span>ABOUT ME</span>
          </div>

          <h2 className="about-heading">
            Engineering
            <br />
            with Intent.
          </h2>

          <p className="about-intro">
            I'm <strong>Vishesh Gupta</strong>, a BCA (Hons) student
            interested in full-stack web development, backend systems,
            interactive interfaces, and solving real-world problems
            through software.
          </p>

          <p className="about-description">
            I enjoy turning ideas into functional, user-friendly, and
            visually appealing digital experiences using React,
            Node.js, Express.js, and MySQL.
          </p>

          <div className="about-facts">
            {aboutFacts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div className="about-fact" key={fact.label}>
                  <span className="about-fact-icon">
                    <Icon size={21} strokeWidth={1.6} />
                  </span>

                  <span className="about-fact-value">
                    {fact.value}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="about-actions">
            <a href="/cv.pdf" className="about-download" download>
              Download CV
              <ArrowRight size={18} />
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

            <div className="about-portrait-shade" />

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
            <Quote
              className="about-quote-icon"
              size={31}
              strokeWidth={1.5}
            />

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

            <p>Vishesh Gupta</p>
          </article>

          <article className="about-learning-card">
            <div className="about-learning-top">
              <h3>
                Always Learning.
                <br />
                Always Building.
              </h3>

              <div className="about-growth-bars" aria-label="Continuous growth">
                {[20, 30, 40, 50, 62].map((height, index) => (
                  <span
                    key={index}
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="about-learning-bottom">
              <div className="about-learning-caption">
                <span className="about-learning-number">01</span>

                <div>
                  <strong>Learn by Building.</strong>
                  <p>Turning concepts into working applications.</p>
                </div>
              </div>

              <a href="#projects" aria-label="Explore projects">
                <MoveUpRight size={22} />
              </a>
            </div>
          </article>

          <span className="about-side-decoration" />
        </div>
      </div>

      <div className="about-bottom">
        <span>CURIOUS BY NATURE. PRACTICAL BY DESIGN.</span>

        <a href="#projects">
          EXPLORE PROJECTS <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}