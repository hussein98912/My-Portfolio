"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

function GitHubIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.41-2.69 5.38-5.25 5.67.41.36.77 1.08.77 2.18v3.23c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5A2.49 2.49 0 1 1 5 8.48a2.49 2.49 0 0 1-.02-4.98ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94V21h-4V9Z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a
          href="#home"
          className="logo"
          onClick={close}
        >
          H<span>.</span>S
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="#projects">Work</a>

          <a href="#about">About</a>

          <a href="#experience">Experience</a>

          <a href="#stack">Stack</a>

          <a
            href="https://github.com/hussein98912"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/hussein-salman/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>

          <a
            href="#contact"
            className="nav-contact"
          >
            Let&apos;s talk
            <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="container">
          <nav className="mobile-nav">
            <a href="#projects" onClick={close}>
              Work
            </a>

            <a href="#about" onClick={close}>
              About
            </a>

            <a href="#experience" onClick={close}>
              Experience
            </a>

            <a href="#stack" onClick={close}>
              Stack
            </a>

            <a href="#contact" onClick={close}>
              Let&apos;s talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

