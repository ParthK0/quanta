"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const PROJECTS = [
  {
    id: "00",
    title: "NEUROSCAN",
    desc: "An open-source deep learning framework for early detection of neurological anomalies using MRI scans. Built strictly in Python & TF.",
    tags: ["PYTHON", "TENSORFLOW", "CV"],
    github: "#",
    live: "#",
    color: "hover:bg-[#00E5FF] hover:text-black"
  },
  {
    id: "01",
    title: "CAMPUS ANALYTICS",
    desc: "Real-time hardware/software dashboard analyzing campus foot traffic, library occupancy, and infrastructure load via IoT.",
    tags: ["NEXT.JS", "POSTGRESQL", "IOT"],
    github: "#",
    live: "#",
    color: "hover:bg-[#00E5FF] hover:text-black"
  },
  {
    id: "02",
    title: "QUANTBOT",
    desc: "A reinforcement learning agent trained to interact directly with trading APIs based on heavy sentiment analysis pipelines.",
    tags: ["RL", "NLP", "PANDAS"],
    github: "#",
    color: "hover:bg-[#00E5FF] hover:text-black"
  },
  {
    id: "03",
    title: "AUTOGRAD.PY",
    desc: "A lightweight, raw numpy-based autograd engine designed to reverse-engineer backpropagation for educational architectures.",
    tags: ["MATH", "PYTHON", "NUMPY"],
    github: "#",
    color: "hover:bg-[#00E5FF] hover:text-black"
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] selection:bg-[#00E5FF] selection:text-black pt-32 pb-16">
      <div className="container px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="mb-20 border-b border-white/20 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[8rem] font-black font-syne text-white uppercase tracking-tighter leading-none"
          >
            PROJECTS<span className="text-[#00E5FF] animate-pulse">_</span>
          </motion.h1>
          <span className="text-white/50 font-mono tracking-[0.2em] uppercase">// OPEN SOURCE INITIATIVES</span>
        </div>

        {/* Brutalist Grid */}
        <div className="grid gap-0 md:grid-cols-2 border border-white/20 mb-24">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group flex flex-col justify-between p-10 md:p-14 min-h-[450px] border border-white/20 bg-[#0B1120] transition-colors duration-300 ${project.color}`}
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-6xl font-black font-syne text-white/20 group-hover:text-black/30 transition-colors">
                  {project.id}
                </span>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} className="px-3 py-1 font-mono font-bold text-sm tracking-widest border border-white/20 group-hover:border-black/30 hover:bg-black hover:text-white transition-all">
                      [GH]
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="px-3 py-1 border border-white/20 group-hover:border-black/30 hover:bg-black hover:text-white transition-all flex items-center justify-center">
                      <Globe className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-black font-syne uppercase tracking-tighter mb-6 leading-[1.1]">
                  {project.title}
                </h3>
                <p className="font-mono text-sm md:text-base opacity-70 mb-10 leading-relaxed uppercase tracking-widest max-w-lg">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="px-4 py-2 border border-white/30 group-hover:border-black/50 text-xs font-mono font-bold tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <div className="border border-[#00E5FF] bg-[#00E5FF]/10 p-12 text-center relative overflow-hidden group hover:bg-[#00E5FF] transition-colors duration-500 cursor-pointer">
          <div className="absolute inset-0 bg-[#00E5FF] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black font-syne text-white group-hover:text-black uppercase tracking-tighter mb-4 transition-colors duration-300">
              BUILD WITH US_
            </h3>
            <p className="font-mono text-white/60 group-hover:text-black/80 tracking-widest uppercase mb-8 transition-colors duration-300">
              Contribute to our repositories or pitch a new architecture.
            </p>
            <a href="https://github.com/quantaclub" className="inline-block px-8 py-4 bg-white text-black font-mono font-bold tracking-widest uppercase border-2 border-transparent group-hover:border-black group-hover:bg-transparent group-hover:text-black transition-all duration-300">
              GITHUB.COM/QUANTA
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
