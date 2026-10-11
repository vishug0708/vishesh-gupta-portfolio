import React, { useMemo, useState } from "react";
import {
  Atom,
  Braces,
  Code2,
  Database,
  FileCode2,
  Globe,
  Layers3,
  Monitor,
  Palette,
  Server,
  Terminal,
  Wrench,
  Boxes,
} from "lucide-react";
import "../styles/Skills.css";

const skillItems = [
  { name: "React.js", category: "Frontend", icon: Atom },
  { name: "JavaScript", category: "Frontend", icon: Braces },
  { name: "TypeScript", category: "Frontend", icon: Code2 },
  { name: "HTML5", category: "Frontend", icon: Globe },
  { name: "CSS3", category: "Frontend", icon: FileCode2 },
  { name: "Tailwind CSS", category: "Frontend", icon: Layers3 },
  { name: "Node.js", category: "Backend", icon: Server },
  { name: "Express.js", category: "Backend", icon: Terminal },
  { name: "MySQL", category: "Database", icon: Database },
  { name: "MongoDB", category: "Database", icon: Boxes },
  { name: "Three.js", category: "Creative", icon: Monitor },
  { name: "Git", category: "Tools", icon: Code2 },
  { name: "GitHub", category: "Tools", icon: Code2 },
  { name: "VS Code", category: "Tools", icon: Wrench },
];

const filters = ["All", "Frontend", "Backend", "Database", "Creative", "Tools"];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleSkills = useMemo(
    () =>
      activeFilter === "All"
        ? skillItems
        : skillItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="skills" className="skills-page page-section">
      <div className="skills-visual" aria-hidden="true" />
      <div className="skills-shade" aria-hidden="true" />

      <div className="skills-container">
        <header className="skills-heading">
          <p className="skills-eyebrow">SKILLS</p>
          <h2>Tools I Build With</h2>
          <p className="skills-intro">
            Technologies and tools I use to build modern web experiences.
          </p>
        </header>

        <div className="skills-filters" role="group" aria-label="Filter skills">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={`skills-filter ${activeFilter === filter ? "is-active" : ""}`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="skills-tiles">
          {visibleSkills.map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <article className="skills-tile" key={skill.name}>
                <div className={`skills-tile-icon skills-icon-${skill.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <SkillIcon size={35} strokeWidth={1.8} />
                </div>
                <h3>{skill.name}</h3>
              </article>
            );
          })}
        </div>

        <div className="skills-bottom-note">
          <span>CURIOUS BY NATURE. PRACTICAL BY DESIGN.</span>
          <a href="#journey">
            EXPLORE MY JOURNEY <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
