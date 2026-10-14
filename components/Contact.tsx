"use client";

import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="contact-card"
        >
          {/* Ambient background */}
          <div className="contact-glow contact-glow-one" />
          <div className="contact-glow contact-glow-two" />

          {/* Background grid */}
          <div className="contact-grid" />

          <div className="relative z-10">
            {/* Section Label */}
            <div className="contact-label">
              <span className="contact-label-line" />
              <span>GET IN TOUCH</span>
            </div>

            {/* Main Content */}
            <div className="contact-content">
              <h2>
                Let&apos;s build something
                <span> useful.</span>
              </h2>

              <p>
                I&apos;m interested in opportunities where I can
                contribute across backend development, AI,
                automation, and modern frontend applications —
                building practical software that solves
                real-world problems.
              </p>

              {/* Actions */}
              <div className="contact-actions">
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=husseinsalman199@gmail.com&su=Contact%20from%20Portfolio"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-button contact-button-primary"
>
  <Mail size={16} strokeWidth={1.7} />
  <span>Email Me</span>
  <ArrowUpRight size={14} />
</a>

                <a
                  href="https://github.com/hussein98912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="https://www.linkedin.com/in/hussein-salman-481782244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="/Hussein-Salman-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  <FileText size={15} strokeWidth={1.6} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* Bottom Metadata */}
            <div className="contact-footer">
              <div className="contact-availability">
                <span className="contact-status-dot" />
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>

              <div className="contact-focus">
                <span>BACKEND</span>
                <span>AI</span>
                <span>AUTOMATION</span>
                <span>FRONTEND</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}