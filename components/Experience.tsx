"use client";

import { motion } from "framer-motion";
import {
  PanelsTopLeft,
  ServerCog,
  BrainCircuit,
  Headset,
} from "lucide-react";

const experience = [
  {
    period: "NOV 2025 — PRESENT",
    role: "Microsoft Power Platform Developer",
    company: "M2P Innovation",
    location: "Tunisia",
    type: "CURRENT",
    description:
      "Developing business applications and workflow automation using Power Apps, Dataverse, SharePoint, and Power Automate. Building integrations with Microsoft 365 and external services, while developing RPA solutions to automate repetitive business processes.",
    technologies: [
      "Power Apps",
      "Dataverse",
      "Power Automate",
      "SharePoint",
      "RPA",
      "Microsoft 365",
    ],
    icon: PanelsTopLeft,
  },
  {
    period: "JUL 2025 — APR 2026",
    role: "Backend Developer",
    company: "Smplics",
    location: "Dubai, UAE",
    type: "PROFESSIONAL",
    description:
      "Developed backend services and REST APIs using Django and Django REST Framework, with PostgreSQL for data management. Contributed to AI-powered features across NLP, computer vision, and deep learning, while building workflow and API automations using n8n.",
    technologies: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
      "AI / ML",
      "n8n",
    ],
    icon: ServerCog,
  },
  {
    period: "JUN 2025 — JUL 2025",
    role: "Machine Learning Intern",
    company: "Code Alpha",
    location: "",
    type: "INTERNSHIP",
    description:
      "Worked on practical machine learning projects involving data preprocessing, feature extraction, model development, and evaluation. Built and evaluated deep learning models using Python and TensorFlow while gaining hands-on experience across the ML development workflow.",
    technologies: [
      "Python",
      "TensorFlow",
      "Machine Learning",
      "Deep Learning",
      "Data Processing",
    ],
    icon: BrainCircuit,
  },
  {
    period: "2022 — 2023",
    role: "Call Center Representative",
    company: "Syriatel Telecom",
    location: "Damascus, Syria",
    type: "PREVIOUS",
    description:
      "Handled customer inquiries and service-related issues, providing technical support and resolving customer problems efficiently while maintaining clear and professional communication.",
    technologies: [
      "Technical Support",
      "Customer Service",
      "Problem Solving",
      "Communication",
    ],
    icon: Headset,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container experience-container">
        {/* Header */}
        <div className="experience-header">
          <div>
            <div className="section-label experience-label">
              <span className="label-line" />
              EXPERIENCE
            </div>

            <h2 className="experience-title">
              Experience
              <span>&amp; background.</span>
            </h2>
          </div>

          <div className="experience-intro">
            <p>
              Experience across backend development, AI, automation,
              and business application development.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="experience-list">
          {experience.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={`${item.company}-${item.role}`}
                className={`experience-item experience-item-${index + 1}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
              >
                {/* Timeline */}
                <div className="experience-timeline">
                  <div className="experience-dot">
                    <span />
                  </div>

                  {index !== experience.length - 1 && (
                    <div className="experience-line" />
                  )}
                </div>

                {/* Date */}
                <div className="experience-date">
                  <span>{item.period}</span>
                </div>

                {/* Card */}
                <div className="experience-content">
                  <div className="experience-top">
                    <div className="experience-heading">
                      <div className="experience-icon">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>

                      <div className="experience-title-block">
                        <div className="experience-role-row">
                          <h3>{item.role}</h3>

                          {item.type === "CURRENT" && (
                            <span className="current-badge">
                              <span />
                              CURRENT
                            </span>
                          )}
                        </div>

                        <div className="experience-company">
                          <span>{item.company}</span>

                          {item.location && (
                            <>
                              <span className="company-separator">/</span>
                              <span>{item.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="experience-body">
                    <p>{item.description}</p>

                    <div className="experience-tech">
                      {item.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="experience-footer">
          <div className="experience-footer-line" />

          <div className="experience-footer-content">
            <span>
              BACKEND · AI · AUTOMATION · SOFTWARE DEVELOPMENT
            </span>

            <span className="experience-footer-status">
              <span />
              OPEN TO OPPORTUNITIES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}