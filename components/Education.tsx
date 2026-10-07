"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding border-t border-white/5"
    >
      <div className="container">
        <div className="section-label">EDUCATION</div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-3xl border border-white/8 bg-[#0b111a] p-7 sm:p-9"
        >
          <div className="flex flex-col gap-7 sm:flex-row">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/15 bg-emerald-300/5">
              <GraduationCap
                size={25}
                className="text-emerald-300"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-semibold">
                  BSc Informatics Engineering
                </h2>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500">
                  2020 — 2025
                </span>
              </div>

              <p className="mt-2 text-sm text-emerald-300">
                Artificial Intelligence
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Arab International University
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Academic background in artificial intelligence,
                machine learning, software engineering, and computer
                science fundamentals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}