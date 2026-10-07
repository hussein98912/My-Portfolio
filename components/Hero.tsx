"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  LayoutDashboard,
  PanelsTopLeft,
  ServerCog,
} from "lucide-react";

import "./Hero.css";

const heroCards = [
  {
    className: "hero-card-backend",
    icon: ServerCog,
    label: "BACKEND",
    title: "Backend Development",
    items: ["Python", "Django", "DRF", "PostgreSQL"],
    accent: "blue",
  },
  {
    className: "hero-card-ai",
    icon: BrainCircuit,
    label: "AI SYSTEMS",
    title: "AI & Automation",
    items: ["OpenAI", "AI Agents", "n8n", "Computer Vision"],
    accent: "purple",
  },
  {
    className: "hero-card-microsoft",
    icon: PanelsTopLeft,
    label: "MICROSOFT",
    title: "Power Platform",
    items: ["Power Apps", "Power Automate", "Dataverse", "SharePoint"],
    accent: "green",
  },
  {
    className: "hero-card-frontend",
    icon: LayoutDashboard,
    label: "FRONTEND",
    title: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
    accent: "orange",
  },
];

export default function Hero() {
  return (
    <section className="hero-modern" id="home">
      <div className="hero-modern-grid" />
      <div className="hero-modern-noise" />

      <div className="hero-modern-glow hero-glow-left" />
      <div className="hero-modern-glow hero-glow-right" />

      <div className="container hero-modern-container">
        {/* MAIN VISUAL */}
        <div className="hero-modern-main">
          {/* FLOATING CARDS */}
          {heroCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`hero-side-card ${card.className} hero-card-${card.accent}`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div className="hero-side-card-top">
                  <div className="hero-side-card-icon">
                    <Icon size={17} strokeWidth={1.5} />
                  </div>

                  <span className="hero-side-card-label">
                    {card.label}
                  </span>
                </div>

                <h3 className="hero-side-card-title">
                  {card.title}
                </h3>

                <div className="hero-side-card-stack">
                  {card.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* CENTRAL VISUAL */}
          <div className="hero-visual">
            <div className="hero-orbit hero-orbit-outer" />
            <div className="hero-orbit hero-orbit-middle" />
            <div className="hero-orbit hero-orbit-inner" />

            <div className="hero-orbit-dot hero-dot-one" />
            <div className="hero-orbit-dot hero-dot-two" />
            <div className="hero-orbit-dot hero-dot-three" />
            <div className="hero-orbit-dot hero-dot-four" />

            {/* Portrait */}
            <div className="hero-portrait-frame">
              <div className="hero-portrait-grid" />

              <Image
                src="/Image.jpg"
                alt="Hussein Salman — Backend & AI Developer"
                fill
                priority
                className="hero-portrait"
                sizes="(max-width: 768px) 82vw, 560px"
              />

              <div className="hero-portrait-vignette" />

              <div className="hero-portrait-accent hero-accent-blue" />
              <div className="hero-portrait-accent hero-accent-purple" />
            </div>

            {/* Small decorative markers */}
            <div className="hero-cross hero-cross-one">+</div>
            <div className="hero-cross hero-cross-two">+</div>
          </div>

          {/* NAME */}
          <div className="hero-name">
            <span className="hero-name-small">
              HELLO, I&apos;M
            </span>

            <h1>
              Hussein
              <span>Salman.</span>
            </h1>

            <div className="hero-name-meta">
              <span>INFORMATICS ENGINEER</span>

              <span className="hero-name-meta-dot" />

              <span>BACKEND · AI · AUTOMATION</span>
            </div>
          </div>
        </div>

        {/* INTRO */}
        <div className="hero-modern-intro">
          <div className="hero-intro-heading">
            <div className="hero-intro-number">
              <span>01</span>
              <span className="intro-line" />
              <span>CURRENTLY FOCUSED ON</span>
            </div>

            <h2>
              Backend systems,
              <span>AI & automation.</span>
            </h2>

            <div className="hero-actions">
              <a
                href="#projects"
                className="hero-btn hero-btn-primary"
              >
                <span>View my work</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://github.com/hussein98912"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn hero-btn-secondary"
                aria-label="Visit my GitHub profile"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12C24 5.37 18.63 0 12 0Z" />
                </svg>

                <span>GitHub</span>

                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          <div className="hero-intro-copy">
            <div className="hero-copy-line" />

            <div>
              <p>
                I build practical software systems that combine
                reliable backend architecture, AI capabilities,
                and intelligent automation.
              </p>

              <p>
                My main stack revolves around Python, Django,
                REST APIs, databases, modern AI technologies,
                and business automation platforms.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="hero-modern-bottom">
          <div className="hero-meta hero-meta-blue">
            <span className="hero-meta-line" />
            <span>BACKEND</span>
          </div>

          <div className="hero-meta hero-meta-purple">
            <span className="hero-meta-line" />
            <span>AI / ML</span>
          </div>

          <div className="hero-meta hero-meta-green">
            <span className="hero-meta-line" />
            <span>MICROSOFT</span>
          </div>

          <div className="hero-meta hero-meta-orange">
            <span className="hero-meta-line" />
            <span>FRONTEND</span>
          </div>

          <div className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>

            <div className="hero-scroll-icon">
              <ArrowDownRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}