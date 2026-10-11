import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Journey", id: "journey" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <header className="site-navbar">
      <a
        href="#home"
        className="navbar-logo"
        onClick={(event) => {
          event.preventDefault();
          scrollToSection("home");
        }}
      >
        VG<span>.</span>
      </a>

      <nav
        className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(link.id);
            }}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="navbar-cta"
        onClick={(event) => {
          event.preventDefault();
          scrollToSection("contact");
        }}
      >
        Let's Talk
        <ArrowUpRight size={16} />
      </a>

      <button
        className="navbar-menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}