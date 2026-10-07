"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  Globe2,
  Workflow,
} from "lucide-react";
import "./About.css";
const focusAreas = [
  {
    icon: Database,
    number: "01",
    title: "Backend Development",
    description:
      "Building backend systems, REST APIs, authentication, business logic, database workflows, and real-time services for practical applications.",
    technologies: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
      "JWT",
      "Redis",
      "WebSockets",
    ],
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "AI & Machine Learning",
    description:
      "Developing and integrating machine learning, deep learning, LLM, and computer vision solutions into practical software products.",
    technologies: [
      "TensorFlow",
      "Keras",
      "OpenAI",
      "YOLO",
      "OpenCV",
      "CNN",
      "LSTM",
      "BERT",
    ],
  },
  {
    icon: Workflow,
    number: "03",
    title: "Automation & Integrations",
    description:
      "Connecting APIs, AI services, business platforms, and automated workflows to build smarter systems and reduce repetitive processes.",
    technologies: [
      "n8n",
      "REST APIs",
      "Webhooks",
      "Stripe",
      "OpenAI",
      "WebSockets",
    ],
  },
  {
    icon: Globe2,
    number: "04",
    title: "Frontend Development",
    description:
      "Developing responsive frontend interfaces and connecting them with backend APIs to build complete, functional web applications and product experiences.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
];

const technologyStack = [
  {
    title: "Backend",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "JWT",
      "PostgreSQL",
      "SQLite",
      "Redis",
      "Django Channels",
      "WebSockets",
    ],
  },
  {
    title: "AI / Machine Learning",
    items: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "OpenAI",
      "CNN",
      "RNN",
      "LSTM",
      "Transformers",
      "BERT",
    ],
  },
  {
    title: "Computer Vision & Data",
    items: [
      "YOLO",
      "OpenCV",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Automation & Integrations",
    items: [
      "n8n",
      "Stripe",
      "Webhooks",
      "REST Integrations",
      "OpenAI APIs",
    ],
  },
  {
    title: "Microsoft Power Platform",
    items: [
      "Power Apps",
      "Power Automate",
      "Dataverse",
      "Copilot Studio",
      "SharePoint",
    ],
  },
  {
    title: "Languages & Tools",
    items: [
      "C++",
      "Java",
      "SQL",
      "Git",
      "GitHub",
      "Render",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Projects />

        <Experience />

        {/* =========================
            ABOUT
        ========================= */}
        <section id="about" className="section about-section">
          <div className="container">

            {/* Section Header */}
            <div className="section-label">
              ABOUT ME
            </div>

            {/* Intro */}
            <div className="about-intro">
              <div className="about-intro-heading">
                <h2 className="about-title">
                  Backend, AI &
                  <br />
                  <span>building things end-to-end.</span>
                </h2>
              </div>

              <div className="about-intro-text">
                <p>
                  I&apos;m{" "}
                  <span className="about-highlight">
                    Hussein Salman
                  </span>
                  , an Informatics Engineering graduate focused on
                  backend development, AI, and intelligent automation,
                  with practical experience working across the full stack.
                </p>

                <p>
                  I build backend systems and AI-powered applications,
                  while also developing responsive frontend interfaces
                  when projects require it. My experience includes REST APIs,
                  machine learning and LLM integrations, React and Next.js
                  development, database workflows, external service
                  integrations, and automated workflows.
                </p>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="about-focus-grid">
              {focusAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="about-focus-card"
                  >
                    <div className="about-focus-top">

                      <Icon
                        className="about-focus-icon"
                        size={21}
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="about-focus-content">
                      <h3>{item.title}</h3>

                      <p>{item.description}</p>

                      <div className="about-focus-tech">
                        {item.technologies.map((technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Technology Stack */}
            <div className="about-stack">
              <div className="about-stack-header">
                <div>
                  <span className="about-bottom-label">
                    TECHNOLOGY STACK
                  </span>

                  <h3>
                    Tools I use to
                    <br />
                    <span>build.</span>
                  </h3>
                </div>

                <p>
                  A practical technology stack developed through
                  academic, professional, and personal projects
                  across backend development, AI, frontend,
                  automation, and business platforms.
                </p>
              </div>

              <div className="about-stack-groups">
                {technologyStack.map((group) => (
                  <div
                    key={group.title}
                    className="about-stack-group"
                  >
                    <div className="about-stack-group-title">
                      {group.title}
                    </div>

                    <div className="about-stack-list">
                      {group.items.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom */}
            <div className="about-bottom">
              <div className="about-bottom-line" />

              <div className="about-bottom-content">
                <div>
                  <span className="about-bottom-label">
                    CURRENT FOCUS
                  </span>

                  <h3>
                    Backend development,
                    <br />
                    AI & automation.
                  </h3>
                </div>

                <a
                  href="#projects"
                  className="about-project-link"
                >
                  <span>Explore my work</span>

                  <span className="about-project-arrow">
                    <ArrowUpRight size={17} />
                  </span>
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}