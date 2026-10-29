import React, { useEffect, useState } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Journey", id: "journey" },
  { name: "Contact", id: "contact" },
];

export default function Navbar({ theme = "light", toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) {
      setMenuOpen(false);
      return;
    }

    const navbarHeight =
      document.querySelector(".site-navbar")?.getBoundingClientRect().height || 76;

    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${id}`);
    setMenuOpen(false);
  };

  return (
    <header className={`site-navbar ${scrolled ? "site-navbar-scrolled" : "site-navbar-top"}`}>
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-logo"
          aria-label="VG - Home"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("home");
          }}
        >
          VG
        </a>

        <nav
          id="main-navigation"
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

        <div className="navbar-right-group">
          <button
            type="button"
            className="navbar-theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
            title={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
          >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="navbar-cta"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("contact");
            }}
          >
            <span>Let's Talk</span>
            <ArrowRight size={15} aria-hidden="true" />
          </a>

          <button
            className="navbar-menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
