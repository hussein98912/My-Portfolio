"use client";

import {
  Bot,
  BrainCircuit,
  Workflow,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: BrainCircuit,
    title: "LLM Integration",
    text: "Integrating language models into applications to create practical AI-powered features.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    text: "Building conversational and task-oriented AI systems connected to real application workflows.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "Using n8n, APIs, webhooks, and backend services to automate repetitive business processes.",
  },
  {
    icon: Zap,
    title: "AI + Backend",
    text: "Combining backend APIs with AI services to create useful production-oriented applications.",
  },
];

export default function AISection() {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="section-label">AI & AUTOMATION</div>

            <h2 className="section-title mt-5">
              Beyond
              <br />
              <span className="text-slate-500">traditional backend.</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-slate-400">
              My AI background allows me to work at the intersection of
              backend engineering, artificial intelligence, and
              automation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-white/8 bg-[#0b111a] p-6"
                >
                  <Icon
                    size={21}
                    className="text-emerald-300"
                  />

                  <h3 className="mt-5 font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}