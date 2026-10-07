"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  GitBranch,
  Layers3,
  Server,
  Workflow,
} from "lucide-react";

import "./TechStack.css";

const stacks = [
  {
    category: "Backend",
    icon: Server,
    accent: "blue",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "JWT",
      "WebSockets",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    accent: "cyan",
    items: [
      "PostgreSQL",
      "SQLite",
      "Redis",
      "Dataverse",
    ],
  },
  {
    category: "AI / ML",
    icon: BrainCircuit,
    accent: "purple",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "OpenCV",
      "Transformers",
      "BERT",
      "YOLO",
    ],
  },
  {
    category: "AI & Automation",
    icon: Workflow,
    accent: "violet",
    items: [
      "OpenAI API",
      "LLM Integration",
      "AI Agents",
      "n8n",
      "Webhooks",
      "API Integrations",
    ],
  },
  {
    category: "Microsoft",
    icon: Layers3,
    accent: "green",
    items: [
      "Power Apps",
      "Power Automate",
      "Dataverse",
      "Copilot Studio",
      "Power Pages",
    ],
  },
  {
    category: "Tools",
    icon: GitBranch,
    accent: "orange",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Render",
      "CI/CD",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="tech-stack-section">
      <div className="container tech-stack-container">

        {/* Header */}
        <div className="tech-stack-header">
          <div>
            <div className="section-label tech-stack-label">
              <span className="label-line" />
              TECH STACK
            </div>

            <h2
              className="
                tech-stack-title
                mt-5
                font-[var(--font-space)]
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-[-0.055em]
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Tools I use to
              <span className="block text-white/30">
                build.
              </span>
            </h2>
          </div>

          <div className="tech-stack-intro">
            <p className="text-sm leading-7 text-white/60">
              A practical stack built through professional,
              academic, and personal projects across backend,
              AI, automation, Microsoft platforms, and modern
              web development.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="tech-stack-grid">
          {stacks.map((stack, index) => {
            const Icon = stack.icon;

            return (
              <motion.article
                key={stack.category}
                className={`tech-stack-card tech-stack-${stack.accent}`}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                <div className="tech-stack-card-glow" />

                {/* Card Header */}
                <div className="tech-stack-card-top">
                  <div className="tech-stack-icon">
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                    />
                  </div>

                  <span
                    className="
                      tech-stack-category
                      font-[var(--font-space)]
                      text-base
                      font-semibold
                      tracking-[-0.015em]
                      text-white
                    "
                  >
                    {stack.category}
                  </span>
                </div>

                {/* Technologies */}
                <div className="tech-stack-items">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="
                        min-h-[35px]
                        px-3
                        text-[10px]
                        font-medium
                        text-white/60
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="tech-stack-footer">
          <div className="tech-stack-footer-line" />

          <div className="tech-stack-footer-content">
            <span>
              PYTHON · DJANGO · AI · AUTOMATION · MICROSOFT · WEB
            </span>

            <span className="tech-stack-status">
              <span />
              CONTINUOUSLY LEARNING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}