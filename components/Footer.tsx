"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";
import "./Footer.css";

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.73H4.96V9.17h2.97v9.56ZM6.45 7.86a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.28 10.87h-2.96v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.47V9.17h2.84v1.31h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.58 1.97 3.58 4.53v5.26Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.1 3.8 1.48.1-.72.4-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.68.12 2.96.72.78 1.14 1.78 1.14 3.01 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-name">
              Hussein Salman
            </a>
            <span className="footer-role">
              Backend · AI · Automation · Frontend
            </span>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-social">
            <a
              href="https://github.com/hussein98912"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer-social-link"
            >
              <GitHubIcon />
              <span>GitHub</span>
              <ArrowUpRight className="footer-social-arrow" size={13} />
            </a>

            <a
              href="https://www.linkedin.com/in/hussein-salman-481782244/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
              <ArrowUpRight className="footer-social-arrow" size={13} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Hussein Salman. All rights reserved.
          </span>

          <a href="#home" className="footer-back-top">
            <span>BACK TO TOP</span>
            <span className="footer-back-top-icon">
              <ArrowUp size={13} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
