import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  X,
  Code2,
  Target,
  Layers3,
  CheckCircle2,
} from "lucide-react";
import "../styles/Projects.css";

const projects = [
  {
    number: "01",
    title: "Hostel Management System",
    status: "Completed",
    badgeType: "completed",
    category: "FULL-STACK APPLICATION",
    description:
      "Full hostel management system with student, room, fees, leave, and admin modules.",
    technologies: ["React", "Node.js", "MySQL"],
    image: "/images/projects/hostel-management.png",
    theme: "hostel",
    liveUrl: "https://hostel-management-frontend-phi.vercel.app",
    githubUrl: "https://github.com/vishug0708/hostel-management-frontend",
    motive:
      "Simplify hostel operations by bringing student records, room allocation, fees and leave management into one digital platform.",
    purpose:
      "Reduce manual paperwork and make hostel administration easier for administrators and students.",
    features: [
      "Student and room management",
      "Room allocation and availability",
      "Fee records and payment tracking",
      "Leave requests and gate-pass workflows",
      "Centralized hostel information",
    ],
    audience: "Hostel administrators, students and hostel staff",
    stageNote:
      "The project is actively hosted. Features and deployment availability may vary.",
  },
  {
    number: "02",
    title: "AI Cricket Recap Generator",
    status: "AI Development",
    badgeType: "ai",
    category: "AI / SPORTS MEDIA",
    description:
      "Personalized World Cup recaps using sports data, AI summaries, speech processing, and video editing.",
    technologies: ["React", "AI", "Python"],
    image: "/images/projects/cricket-recap.png",
    theme: "cricket",
    liveUrl: "",
    githubUrl: "https://github.com/vishug0708",
    motive:
      "Help cricket fans catch up on important match moments without watching the entire match.",
    purpose:
      "Explore how AI can turn match information and available media into concise, personalized recaps.",
    features: [
      "Match summary generation",
      "Player performance highlights",
      "Important moments and statistics",
      "Personalized recap concepts",
      "A responsive interface for browsing recaps",
    ],
    audience: "Cricket fans, sports communities and content creators",
    stageNote:
      "This project is planned/under development. Features shown are intended capabilities.",
  },
  {
    number: "03",
    title: "Railway Booking Website",
    status: "Planned",
    badgeType: "planned",
    category: "WEB APPLICATION",
    description:
      "A planned project for railway search, seat availability, and booking workflows.",
    technologies: ["React", "Node.js", "MySQL"],
    image: "/images/projects/railway-booking.png",
    theme: "railway",
    liveUrl: "",
    githubUrl: "https://github.com/vishug0708",
    motive:
      "Design a straightforward digital journey for searching trains and managing booking information.",
    purpose:
      "Explore the user experience and backend workflows involved in a railway reservation application.",
    features: [
      "Train search by source and destination",
      "Journey date and train information",
      "Passenger details and booking workflow",
      "Booking history concept",
      "Responsive booking interface",
    ],
    audience: "Travellers and users exploring online railway booking",
    stageNote:
      "This project is planned. Live train data and ticket booking workflows are conceptual.",
  },
  {
    number: "04",
    title: "Face Recognition Attendance",
    status: "Concept",
    badgeType: "concept",
    category: "COMPUTER VISION",
    description:
      "Exploring attendance automation using computer vision and real-time face recognition.",
    technologies: ["Python", "OpenCV", "AI"],
    image: "/images/projects/face-attendance.png",
    theme: "attendance",
    liveUrl: "",
    githubUrl: "https://github.com/vishug0708",
    motive:
      "Explore whether computer vision can help record attendance more efficiently in suitable environments.",
    purpose:
      "Learn about face detection, recognition workflows and attendance record management.",
    features: [
      "Face detection research",
      "Identity matching concept",
      "Attendance record generation",
      "Timestamped attendance workflow",
      "Privacy and access-control considerations",
    ],
    audience: "Educational institutions and developers exploring computer vision",
    stageNote:
      "This is a concept project exploring facial detection models and attendance logging.",
  },
];

function ProjectDetails({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="project-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="project-details-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="project-modal-header">
          <div>
            <p className="project-modal-eyebrow">
              PROJECT / {project.number} · {project.category}
            </p>
            <span className={`project-status badge-${project.badgeType || project.theme}`}>
              {project.status}
            </span>
          </div>

          <button
            type="button"
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>

        <div className="project-modal-content">
          <div className="project-modal-title-row">
            <div>
              <h2 id="project-modal-title">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>

          <div className="project-detail-section">
            <h3>
              <Target size={18} />
              Project Motive
            </h3>
            <p>{project.motive}</p>
          </div>

          <div className="project-detail-section">
            <h3>
              <Layers3 size={18} />
              Purpose & Use
            </h3>
            <p>{project.purpose}</p>
            <p className="project-audience">
              <strong>Designed for:</strong> {project.audience}
            </p>
          </div>

          <div className="project-detail-section">
            <h3>
              <CheckCircle2 size={18} />
              Key Features
            </h3>
            <ul className="project-detail-features">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-detail-section">
            <h3>
              <Code2 size={18} />
              Technologies
            </h3>
            <div className="project-technologies project-modal-tech">
              {project.technologies.map((technology) => (
                <span key={technology} className="project-tech-pill">
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="project-stage-note">
            <strong>Project status:</strong> {project.stageNote}
          </div>

          <div className="project-modal-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-visit-button"
              >
                Visit Live Website
                <ArrowUpRight size={16} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-modal-link"
              >
                View on GitHub
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>,
    document.body
  );
}

function ProjectCard({ project, onViewDetails }) {
  return (
    <article className={`project-card project-card-${project.theme}`}>
      <div className="project-image-wrap">
        <span className={`project-status badge-${project.badgeType || project.theme}`}>
          {project.status}
        </span>

        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.parentElement.classList.add(
              "project-image-missing"
            );
          }}
        />
      </div>

      <div className="project-card-body">
        <h3>{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology} className="project-tech-pill">
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card-footer">
          {project.liveUrl ? (
            <div className="project-card-actions">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-link"
              >
                <span>Live Demo</span>
                <ArrowRight size={14} />
              </a>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-link"
                >
                  <span>GitHub</span>
                  <ArrowRight size={14} />
                </a>
              )}
            </div>
          ) : (
            <button
              type="button"
              className="project-action-link project-details-btn"
              onClick={() => onViewDetails(project)}
            >
              <span>View Details</span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects({ theme = "light" }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-page page-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <div className="projects-heading-main">
            <p className="projects-eyebrow">FEATURED WORK</p>
            <h2>Selected Projects</h2>
            <p className="projects-intro">
              A showcase of my recent work, personal projects, and
              technical explorations.
            </p>
          </div>

          <a href="#contact" className="projects-view-all">
            <span>View All Projects</span>
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
