"use client";

import {
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

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-label about-section-label">
          <span
            className="about-label-line"
            aria-hidden="true"
          />
          <span>ABOUT ME</span>
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
              with practical experience working across the full
              stack.
            </p>

            <p>
              I build backend systems and AI-powered applications,
              while also developing responsive frontend interfaces
              when projects require it. My experience includes REST
              APIs, machine learning and LLM integrations, React and
              Next.js development, database workflows, external
              service integrations, and automated workflows.
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
                  <span className="about-focus-number">
                    {item.number}
                  </span>

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
      </div>
    </section>
  );
}