import React from "react";
import { ArrowUp, Mail } from "lucide-react";
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

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/vishug0708",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/visheshgupta07",
    icon: <FaLinkedin />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vishug_7",
    icon: <FaInstagram />,
  },
  {
    label: "Email",
    href: "mailto:vishug0708@gmail.com",
    icon: <Mail />,
  },
];

export default function Footer() {
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
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <a
          href="#home"
          className="footer-logo"
          aria-label="VG - Back to home"
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

      <div className="footer-socials">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.label === "Email" ? undefined : "_blank"}
            rel={social.label === "Email" ? undefined : "noreferrer"}
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
        <ArrowUp size={19} />
      </button>
    </footer>
  );
}
