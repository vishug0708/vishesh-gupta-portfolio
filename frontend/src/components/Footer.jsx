
import React from "react";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const footerLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Journey", id: "journey" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <footer className="site-footer">
      <a
        href="#home"
        className="footer-logo"
        aria-label="Back to home"
        onClick={(event) => {
          event.preventDefault();
          scrollToTop();
        }}
      >
        VG<span>.</span>
      </a>

      <div className="footer-identity">
        <strong>Vishu Gupta</strong>
        <span>Full-Stack Web Developer</span>
      </div>

      <nav className="footer-navigation" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="footer-socials">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:your-email@example.com"
          aria-label="Email"
          title="Email"
        >
          <Mail size={18} />
        </a>
      </div>

      <span className="footer-copyright">
        © {year} Vishu Gupta. All rights reserved.
      </span>

      <button
        type="button"
        className="footer-back-top"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
