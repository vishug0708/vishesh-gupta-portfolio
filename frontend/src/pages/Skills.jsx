import React, { useMemo, useState } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiThreedotjs,
  SiGit,
  SiGithub,
  SiMongodb,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import "../styles/Skills.css";

const skillItems = [
  { name: "React.js", category: "Frontend", icon: SiReact, color: "#00d8ff" },
  { name: "JavaScript", category: "Frontend", icon: SiJavascript, color: "#f7df1e", bg: "#f7df1e", textColor: "#000" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178c6" },
  { name: "HTML5", category: "Frontend", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", category: "Frontend", icon: FaCss3Alt, color: "#1572b6" },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", category: "Backend", icon: SiExpress, color: "currentColor" },
  { name: "MySQL", category: "Database", icon: SiMysql, color: "#00758f" },
  { name: "MongoDB", category: "Database", icon: SiMongodb, color: "#47a248" },
  { name: "Three.js", category: "Creative", icon: SiThreedotjs, color: "currentColor" },
  { name: "Git", category: "Tools", icon: SiGit, color: "#f05032" },
  { name: "GitHub", category: "Tools", icon: SiGithub, color: "currentColor" },
];

const filters = ["All", "Frontend", "Backend", "Database", "Creative", "Tools"];

export default function Skills({ theme = "light" }) {
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
                <div
                  className="skills-tile-icon"
                  style={{ color: skill.color !== "currentColor" ? skill.color : undefined }}
                >
                  <SkillIcon size={32} />
                </div>
                <h3>{skill.name}</h3>
              </article>
            );
          })}
        </div>

        <div className="skills-bottom-note">
          <span>CURIOUS BY NATURE. PRACTICAL BY DESIGN.</span>
          <a href="#journey">
            EXPLORE MY JOURNEY <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
