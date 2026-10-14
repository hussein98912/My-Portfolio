"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import "./navbar.css";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.41-2.69 5.38-5.25 5.67.41.36.77 1.08.77 2.18v3.23c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.49 2.49 0 1 1 5 8.48a2.49 2.49 0 0 1-.02-4.98ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94V21h-4V9Z" />
    </svg>
  );
}

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/hussein98912",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hussein-salman-481782244/",
    icon: LinkedInIcon,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", open);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.classList.remove("nav-menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) close();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <a href="#home" className="logo" onClick={close} aria-label="Hussein Salman home">
            <span className="logo-text">
              H<span>.</span>S
            </span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}

            <div className="nav-socials">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="nav-social-link"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            <a href="#contact" className="nav-contact">
              <span>Let&apos;s talk</span>
              <ArrowUpRight size={15} />
            </a>
          </nav>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-sidebar"
          >
            <Menu size={23} strokeWidth={1.7} />
          </button>
        </div>
      </header>

      <button
        type="button"
        className={`mobile-nav-overlay ${open ? "is-open" : ""}`}
        onClick={close}
        aria-label="Close navigation menu"
        tabIndex={open ? 0 : -1}
      />

      <aside
        id="mobile-sidebar"
        className={`mobile-sidebar ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="mobile-sidebar-header">
          <a href="#home" className="logo" onClick={close}>
            <span className="logo-text">
              H<span>.</span>S
            </span>
          </a>

          <button
            type="button"
            className="mobile-sidebar-close"
            onClick={close}
            aria-label="Close menu"
          >
            <X size={21} strokeWidth={1.7} />
          </button>
        </div>

        <div className="mobile-sidebar-content">
          <div className="mobile-sidebar-label">
            <span />
            Navigation
          </div>

          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                style={{ "--item-index": index } as React.CSSProperties}
              >
                <span className="mobile-nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="mobile-nav-text">{item.label}</span>

                <ArrowUpRight size={17} />
              </a>
            ))}

            <a href="#contact" className="mobile-nav-contact" onClick={close}>
              <span>Let&apos;s talk</span>
              <ArrowUpRight size={17} />
            </a>
          </nav>

          <div className="mobile-sidebar-footer">
            <div className="mobile-sidebar-socials">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            <p>Backend · AI · Automation</p>
          </div>
        </div>
      </aside>
    </>
  );
}