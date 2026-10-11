
import React from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Layers3,
  Terminal,
  Download,
  Send,
  Menu,
  Mail
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";
import "./index.css";

const projects = [
  {
    number: "01",
    title: "Hostel Management System",
    category: "FULL-STACK DEVELOPMENT",
    description: "A management platform for students, rooms, fees, leave requests and administration.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    status: "In Development",
    icon: "⌘"
  },
  {
    number: "02",
    title: "AI Cricket Recap Generator",
    category: "AI / MEDIA",
    description: "A concept for personalized cricket recaps, match moments and highlight generation.",
    technologies: ["React", "AI", "Python", "FFmpeg"],
    status: "Planned",
    icon: "◉"
  },
  {
    number: "03",
    title: "Railway Booking Website",
    category: "WEB APPLICATION",
    description: "A modern railway search and booking experience with an intuitive interface.",
    technologies: ["React", "Node.js", "MySQL"],
    status: "Planned",
    icon: "↗"
  },
  {
    number: "04",
    title: "Face Recognition Attendance",
    category: "COMPUTER VISION",
    description: "Exploring attendance automation using face recognition and computer vision.",
    technologies: ["Python", "OpenCV", "AI"],
    status: "Concept",
    icon: "◎"
  }
];

const skills = [
  { name: "React.js", symbol: "⚛" },
  { name: "JavaScript", symbol: "JS" },
  { name: "TypeScript", symbol: "TS" },
  { name: "HTML5", symbol: "5" },
  { name: "CSS3", symbol: "3" },
  { name: "Tailwind CSS", symbol: "≈" },
  { name: "Node.js", symbol: "⬡" },
  { name: "Express.js", symbol: "Ex" },
  { name: "MySQL", symbol: "◈" },
  { name: "Three.js", symbol: "△" },
  { name: "Git", symbol: "◆" },
  { name: "GitHub", symbol: "◉" }
];

const journey = [
  {
    year: "2024",
    title: "Started BCA (Hons)",
    description: "Began my journey in computer applications."
  },
  {
    year: "2024",
    title: "Explored Web Development",
    description: "Learned HTML, CSS and JavaScript and built small projects."
  },
  {
    year: "2025",
    title: "Built Major Projects",
    description: "Worked on management systems and explored AI-powered concepts."
  },
  {
    year: "2026",
    title: "Deepening My Skills",
    description: "Focusing on full-stack development and real-world applications."
  },
  {
    year: "2028",
    title: "Graduation Expected",
    description: "Continuing to learn and build more substantial projects."
  }
];

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

function Navbar() {
  const links = ["Home", "About", "Projects", "Skills", "Journey", "Contact"];

  return (
    <header className="navbar">
      <a href="#home" className="logo" aria-label="Vishu Gupta home">
        VG<span>.</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>

      <a href="#contact" className="button button-light nav-button">
        Let's Talk <ArrowUpRight size={15} />
      </a>

      <a href="#projects" className="mobile-nav-icon" aria-label="Explore projects">
        <Menu size={22} />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-planet" />
        <div className="hero-planet-glow" />
        <div className="hero-rock hero-rock-one" />
        <div className="hero-rock hero-rock-two" />
        <div className="hero-ground" />
        <div className="hero-grid-lines" />
      </div>

      <div className="hero-content">
        <SectionLabel>HI, I'M</SectionLabel>
        <h1>Vishu Gupta</h1>
        <h2>Building Digital<br />Experiences.</h2>
        <p>
          Full-stack developer exploring the intersection
          of engineering, design, and interactive experiences.
        </p>

        <div className="hero-buttons">
          <a className="button button-light" href="#projects">
            Explore My Work <ArrowRight size={16} />
          </a>
          <a className="button button-outline" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-social">
        <span>FOLLOW</span>
        <a href="https://github.com/" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={14} /> Scroll to explore
      </a>

      <div className="hero-caption">
        <span className="play-button">▶</span>
        <span>
          DESIGN WITH INTENT<br />
          <small>Code with purpose.</small>
        </span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-panel" id="about">
      <div className="about-content">
        <SectionLabel>ABOUT ME</SectionLabel>
        <h2>Engineering<br />with Intent.</h2>

        <p className="body-copy">
          I'm Vishu Gupta, a BCA (Hons) student interested in full-stack
          web development, backend systems, interactive interfaces and
          solving real-world problems through software.
        </p>

        <div className="about-facts">
          <div><GraduationCap /><span>BCA (Hons), 2028</span></div>
          <div><Code2 /><span>Full-Stack Web Development</span></div>
          <div><Layers3 /><span>React & Node.js Ecosystem</span></div>
          <div><Terminal /><span>Project-Based Learning</span></div>
        </div>

        <a className="button button-light" href="#contact">
          Download CV <Download size={15} />
        </a>
      </div>

      <div className="portrait-card">
        <div className="portrait-light" />
        <div className="portrait-placeholder">VG</div>
        <span>ADD YOUR PORTRAIT</span>
      </div>

      <div className="about-side">
        <article className="quote-card">
          <span className="quote-symbol">“</span>
          <h3>Good Code<br />Creates Real<br />Opportunities.</h3>
          <span className="quote-author">— Vishu Gupta</span>
        </article>

        <article className="learning-card">
          <p>Always Learning.<br />Always Building.</p>
          <div className="learning-bars">
            {[12, 20, 27, 35, 43].map((height) => (
              <i key={height} style={{ height }} />
            ))}
          </div>
          <a href="#skills" className="round-link" aria-label="Explore skills">
            <ArrowRight />
          </a>
        </article>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects section-panel" id="projects">
      <div className="section-heading">
        <div>
          <SectionLabel>FEATURED WORK</SectionLabel>
          <h2>Selected Projects</h2>
          <p>A showcase of projects, experiments and ideas in progress.</p>
        </div>

        <a className="text-link" href="#contact">
          Discuss a Project <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.number}>
            <div className={`project-art project-art-${index + 1}`}>
              <span className="project-number">{project.number}</span>
              <span className="project-art-icon">{project.icon}</span>
              <span className="project-status">{project.status}</span>
            </div>

            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="technology-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills section-panel" id="skills">
      <div className="skills-background">
        <div className="skills-planet" />
        <div className="skills-laptop">
          <div className="laptop-code">
            {Array.from({ length: 9 }, (_, index) => (
              <i
                key={index}
                style={{ width: `${35 + ((index * 17) % 55)}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="skills-content">
        <SectionLabel>SKILLS</SectionLabel>
        <h2>Tools I Build With</h2>
        <p>Technologies and tools I use to build modern web experiences.</p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <span className="skill-symbol">{skill.symbol}</span>
              <span>{skill.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="journey section-panel" id="journey">
      <div className="journey-content">
        <SectionLabel>MY JOURNEY</SectionLabel>
        <h2>Learning. Building. Growing.</h2>
        <p>A timeline of my academic journey and development milestones.</p>

        <div className="timeline">
          {journey.map((item, index) => (
            <article className="timeline-item" key={`${item.year}-${index}`}>
              <span className="timeline-dot" />
              <time>{item.year}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="workspace-art">
        <div className="workspace-monitor">
          <div className="workspace-code">
            {Array.from({ length: 8 }, (_, index) => (
              <i
                key={index}
                style={{ width: `${45 + ((index * 13) % 45)}%` }}
              />
            ))}
          </div>
        </div>
        <div className="workspace-message">
          DISCIPLINE<br />BUILDS<br />FREEDOM<span>VG.</span>
        </div>
        <div className="workspace-desk" />
      </div>
    </section>
  );
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Contact API is not connected yet. Backend integration is required.");
  }

  return (
    <section className="contact section-panel" id="contact">
      <div className="contact-content">
        <SectionLabel>CONTACT</SectionLabel>
        <h2>Have an Idea?<br />Let's Build It.</h2>
        <p>
          Interested in meaningful web experiences and collaborating
          on challenging projects? Get in touch.
        </p>

        <div className="contact-links">
          <a href="mailto:your-email@example.com">
            <Mail />
            <span>
              <b>Email</b>
              <small>your-email@example.com</small>
            </span>
            <ArrowUpRight />
          </a>

          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
            <span>
              <b>GitHub</b>
              <small>github.com/your-username</small>
            </span>
            <ArrowUpRight />
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
            <span>
              <b>LinkedIn</b>
              <small>linkedin.com/in/your-profile</small>
            </span>
            <ArrowUpRight />
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            minLength={2}
            maxLength={100}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            maxLength={254}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Tell me about your idea..."
          minLength={10}
          maxLength={3000}
          required
        />

        <button className="button button-light submit-button" type="submit">
          Send Message <Send size={15} />
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo">
        VG<span>.</span>
      </a>

      <div className="footer-identity">
        <b>Vishu Gupta</b>
        <span>Full-Stack Web Developer</span>
      </div>

      <div className="footer-social">
        <a href="https://github.com/" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>

      <span className="copyright">
        © {new Date().getFullYear()} Vishu Gupta. All rights reserved.
      </span>

      <a href="#home" className="back-to-top" aria-label="Back to top">
        <ArrowUpRight />
      </a>
    </footer>
  );
}

export default function Index() {
  return (
    <main className="portfolio">
      <Navbar />

      <div className="top-grid">
        <Hero />
        <About />
      </div>

      <div className="middle-grid">
        <Projects />
        <Skills />
      </div>

      <div className="bottom-grid">
        <Journey />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
