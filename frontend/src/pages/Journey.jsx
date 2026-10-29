import React from "react";
import { ArrowUpRight, BookOpen, Code2, Rocket, Flag } from "lucide-react";
import "../styles/Journey.css";

const journeyItems = [
  {
    year: "2024",
    title: "Started My Tech Journey",
    description: "Started exploring programming fundamentals and learning how websites work behind the scenes.",
    icon: BookOpen,
  },
  {
    year: "2025",
    title: "Explored Web Development",
    description: "Learned HTML, CSS and JavaScript, and began building small projects.",
    icon: Code2,
  },
  {
    year: "2026",
    title: "Building Real-World Projects",
    description: "Developing a Hostel Management System and exploring AI, automation and full-stack applications.",
    icon: Rocket,
  },
  {
    year: "2026",
    title: "Deepening My Skills",
    description: "Improving React, Node.js, Express.js and MySQL skills while building responsive web experiences.",
    icon: Code2,
  },
  {
    year: "2028",
    title: "BCA Graduation (Expected)",
    description: "Continuing to learn, solve real-world problems and build bigger, better projects.",
    icon: Flag,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="journey-page page-section">
      <div className="journey-background" aria-hidden="true" />
      <div className="journey-overlay" aria-hidden="true" />

      <div className="journey-container">
        <header className="journey-heading">
          <div className="journey-eyebrow">MY JOURNEY</div>
          <h2>Learning. Building. Growing.</h2>
          <p>A timeline of my academic journey and key milestones.</p>
        </header>

        <div className="journey-timeline">
          <div className="journey-timeline-line" aria-hidden="true" />
          {journeyItems.map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <article className="journey-item" key={`${item.title}-${index}`}>
                <span className="journey-marker" aria-hidden="true" />
                <span className="journey-year">{item.year}</span>
                <span className="journey-item-icon" aria-hidden="true">
                  <ItemIcon size={15} strokeWidth={1.8} />
                </span>
                <div className="journey-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {index === 2 && (
                    <a href="#projects" className="journey-item-link">
                      Explore projects <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
