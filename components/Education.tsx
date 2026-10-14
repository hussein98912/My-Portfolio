"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container education-container">

        {/* SECTION HEADER */}
        <div className="education-header">
          <div className="education-section-label">
            <span className="education-label-line" />
            <span>EDUCATION</span>
          </div>

          <p className="education-header-description">
            Academic foundation in artificial intelligence,
            software engineering, and computer science.
          </p>
        </div>

        {/* EDUCATION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="education-card"
        >
          {/* Decorative number */}
          <div className="education-card-number">01</div>

          {/* Icon */}
          <div className="education-icon">
            <GraduationCap
              size={25}
              strokeWidth={1.4}
            />
          </div>

          {/* Main content */}
          <div className="education-content">

            <div className="education-top">
              <span className="education-period">
                2020 — 2025
              </span>

              <span className="education-status">
                COMPLETED
              </span>
            </div>

            <h2 className="education-degree">
              BSc Informatics Engineering
            </h2>

            <div className="education-specialization">
              Artificial Intelligence
            </div>

            <div className="education-divider" />

            <div className="education-bottom">
              <div>
                <span className="education-meta-label">
                  UNIVERSITY
                </span>

                <p className="education-university">
                  Arab International University
                </p>
              </div>

              <p className="education-description">
                Academic background in artificial intelligence,
                machine learning, software engineering, and
                computer science fundamentals.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}