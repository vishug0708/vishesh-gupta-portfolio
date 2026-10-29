import React from "react";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const footerLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Journey", id: "journey" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/vishug0708",
    icon: <FaGithub size={16} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/visheshgupta07",
    icon: <FaLinkedin size={16} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vishug_7",
    icon: <FaInstagram size={16} />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: <FaYoutube size={16} />,
  },
];

export default function Footer({ theme = "light" }) {
  const year = new Date().getFullYear();

  const scrollToSection = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${id}`);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a
            href="#home"
            className="footer-logo"
            aria-label="VG - Back to top"
            onClick={scrollToTop}
          >
            VG
          </a>

          <div className="footer-identity">
            <strong>Vishesh Gupta</strong>
            <span>Full-Stack Web Developer</span>
          </div>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => scrollToSection(event, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-right-group">
          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="footer-copyright">
            © {year} Vishesh Gupta. All rights reserved.
          </p>

          <button
            type="button"
            className="footer-back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
