import React from "react";
import { ArrowUpRight, BookOpen, Code2, Rocket, Flag } from "lucide-react";
import "../styles/Journey.css";

const journeyItems = [
  {
    year: "2024",
    title: "Started BCA (Hons)",
    description: "Beginning my journey in computer applications.",
    icon: BookOpen,
  },
  {
    year: "2024",
    title: "Explored Web Development",
    description: "Learned HTML, CSS, JavaScript and started building small projects.",
    icon: Code2,
  },
  {
    year: "2025",
    title: "Built Major Projects",
    description: "Developed hostel management system and explored AI and automation projects.",
    icon: Rocket,
  },
  {
    year: "2026",
    title: "Deepening My Skills",
    description: "Focusing on full-stack development, 3D web experiences and real-world problem solving.",
    icon: Code2,
  },
  {
    year: "2028",
    title: "BCA Graduation (Expected)",
    description: "Continuing to learn and build bigger, better projects.",
    icon: Flag,
  },
];

export default function Journey({ theme = "light" }) {
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
                  <ItemIcon size={14} strokeWidth={2} />
                </span>
                <div className="journey-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
