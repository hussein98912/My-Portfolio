"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding border-t border-white/5"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#0b111a] p-8 sm:p-12 lg:p-16"
        >
          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-emerald-300/5 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="section-label">
              GET IN TOUCH
            </div>

            <h2 className="mt-5 font-[var(--font-space)] text-4xl font-semibold tracking-tight sm:text-6xl">
              Let&apos;s build something
              <span className="text-emerald-300"> useful.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
              I&apos;m open to junior backend, AI, and automation
              opportunities, as well as interesting software projects.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="mailto:hussein.salman.dev@gmail.com"
                className="button-primary"
              >
                <Mail size={17} />
                Email Me
              </a>

              <a
                href="https://github.com/hussein98912"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                GitHub
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}